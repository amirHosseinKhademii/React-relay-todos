import { Environment, Network, RecordSource, Store } from "relay-runtime";
import { token } from "./token";

// 2
const store = new Store(new RecordSource());

// 3
const network = Network.create((operation, variables) => {
  // 4
  return fetch("http://localhost:3001/graphql", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then((response) => {
    return response.json();
  });
});

// 5
export const environment = new Environment({
  network,
  store,
});
