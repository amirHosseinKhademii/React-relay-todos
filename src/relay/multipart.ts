import extractFiles from "extract-files/extractFiles.mjs";
import isExtractableFile from "extract-files/isExtractableFile.mjs";
import { createClient as createClientSSE } from "graphql-sse";
import { createClient as createClientWS } from "graphql-ws";
import { meros } from "meros/browser";
import {
  Environment,
  Network,
  Observable,
  RecordSource,
  Store,
} from "relay-runtime";

import { token } from "./token";

import { merge } from "lodash";

export const defer = (value: any, wait: any) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, wait);
  });

const pause = (ms: any) => defer(null, ms);

export const isAsyncIterable = (value: any) =>
  typeof Object(value)[Symbol.asyncIterator] === "function";

const ErrorMessages = {
  FAILED_FETCH: "Failed to fetch",
  ERROR_FETCH: "Error in fetch",
  UNWORKABLE_FETCH: "Unworkable fetch",
  SOCKET_CLOSED: "Socket closed",
  GRAPHQL_ERRORS: "GraphQL error",
};

class NetworkError extends Error {
  constructor(message: any, options: any) {
    super(message, options);

    this.name = "NetworkError";

    if (options) {
      const { cause, ...meta } = options;

      Object.assign(this, meta);
    }
  }
}

const fetchFn = (
  operation: any,
  variables: any,
  _cacheConfig: any,
  _uploadables: any
) => {
  const httpEndpoint = "/graphql";

  return Observable.create((sink) => {
    const init = {
      method: "POST",
      headers: {
        "content-type": "application/json; charset=utf-8",
        Authorization: token,
      } as any,
    };

    const { clone, files } = extractFiles(
      {
        id: operation.id ?? undefined,
        query: operation.text ?? undefined,
        variables,
      },
      isExtractableFile
    );

    if (files.size) {
      const form = new FormData();

      form.set("operations", JSON.stringify(clone));

      const map = {} as any;
      let i = 0;

      files.forEach((paths: any) => {
        map[i++] = paths;
      });

      form.set("map", JSON.stringify(map));

      i = 0;
      files.forEach((paths: any, file: any) => {
        form.set(`${i++}`, file, file.name);
      });

      merge(init, {
        body: form,
      });
    } else {
      merge(init, {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(clone),
      });
    }

    (async () => {
      const request = new Request(httpEndpoint, init);

      try {
        const response = await fetch(request);

        // Status code in range 200-299 inclusive (2xx).
        if (response.ok) {
          try {
            const parts = (await meros(response)) as any;

            if (isAsyncIterable(parts)) {
              for await (const part of parts) {
                if (!part.json) {
                  sink.error(
                    new NetworkError(ErrorMessages.UNWORKABLE_FETCH, {
                      request,
                      response,
                    })
                  );
                  break;
                }

                // If any exceptions occurred when processing the request,
                // throw an error to indicate to the developer what went wrong.
                if ("errors" in part.body) {
                  sink.error(
                    new NetworkError(ErrorMessages.GRAPHQL_ERRORS, {
                      request,
                      response,
                    })
                  );
                  break;
                }

                // DEMO: delay chunked responses
                await pause(100);

                if ("data" in part.body) {
                  sink.next(part.body);
                }

                if ("incremental" in part.body) {
                  for (const chunk of part.body.incremental) {
                    if ("data" in chunk) {
                      sink.next({
                        ...chunk,
                        hasNext: part.body.hasNext,
                      });
                    } else {
                      if (chunk.items) {
                        // All but the non-final path segments refers to the location
                        // of the list field containing the `@stream` directive.
                        // The final segment of the path list is an integer.
                        //
                        // Note: We must "copy" to avoid mutations.
                        const location = chunk.path.slice(0, -1);
                        let index = chunk.path.at(-1);

                        for (const item of chunk.items) {
                          sink.next({
                            ...chunk,
                            path: location.concat(index++),
                            data: item,
                            hasNext: part.body.hasNext,
                          });
                        }
                      } else {
                        sink.next({
                          ...chunk,
                          data: chunk.items,
                          hasNext: part.body.hasNext,
                        });
                      }
                    }
                  }
                }
              }
            } else {
              const json = await response.json();

              // If any exceptions occurred when processing the request,
              // throw an error to indicate to the developer what went wrong.
              if ("errors" in json) {
                sink.error(
                  new NetworkError(ErrorMessages.GRAPHQL_ERRORS, {
                    request,
                    response,
                  })
                );
              } else {
                // DEMO: delay response
                // await pause(2_000);

                sink.next(json);
              }
            }

            sink.complete();
          } catch (err) {
            sink.error(
              new NetworkError(ErrorMessages.UNWORKABLE_FETCH, {
                cause: err,
                request,
                response,
              }),
              true
            );
          }
        } else {
          sink.error(
            new NetworkError(ErrorMessages.ERROR_FETCH, { request, response })
          );
        }
      } catch (err) {
        sink.error(
          new NetworkError(ErrorMessages.FAILED_FETCH, { cause: err, request }),
          true
        );
      }
    })();
  });
};

const subscribeFnWithSSE = (operation: any, variables: any) => {
  const httpEndpoint = "/graphql";

  const client = createClientSSE({
    url: httpEndpoint,

    /** If you have an HTTP/2 server, it is recommended to use the client in "distinct connections mode" (singleConnection = false) which will create a new SSE connection for each subscribe. */
    singleConnection: false,

    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });

  return Observable.create((sink) =>
    client.subscribe(
      {
        id: operation.id ?? undefined,
        query: operation.text,
        variables,
      } as any,
      {
        ...sink,
        error(err: any) {
          if (Array.isArray(err)) {
            sink.error(
              new NetworkError(ErrorMessages.ERROR_FETCH, { cause: err })
            );
          } else {
            sink.error(err, true);
          }
        },
      }
    )
  );
};

// DEMO: choose one of the implementations
const subscribeFn = subscribeFnWithSSE as any;
// const subscribeFn = subscribeFnWithWS;

const createEnvironment = () => {
  const source = new RecordSource();

  /**
   * Presence of Data
   * @see https://relay.dev/docs/guided-tour/reusing-cached-data/presence-of-data/
   *
   * - Note that having a buffer size of 0 is equivalent to not having the release buffer, which means that queries will be immediately released and collected.
   * - By default, environments have a release buffer size of 10.
   *
   * @example
   * // last 10 queries
   * gcReleaseBufferSize: 10,
   *
   *
   * Staleness of Data
   * @see https://relay.dev/docs/guided-tour/reusing-cached-data/staleness-of-data/
   *
   * - If the query cache expiration time is not provided, staleness checks only look at whether the referenced records have been invalidated.
   *
   * @example
   * // 1 min
   * queryCacheExpirationTime: 60 * 1_000,
   */
  const options = {};

  const store = new Store(source, options);

  const network = Network.create(fetchFn, subscribeFn);

  return new Environment({
    network,
    store,
  });
};

export const environment = createEnvironment();
