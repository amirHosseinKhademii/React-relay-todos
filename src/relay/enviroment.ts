import { Environment, Network, RecordSource, Store } from "relay-runtime";
import fetchGraphQL from "./fetch-gql";

// Relay passes a "params" object with the query name and text. So we define a helper function
// to call our fetchGraphQL utility with params.text.
async function fetchRelay(params: any, variables: any) {
  console.log(
    `fetching query ${params.name} with ${JSON.stringify(variables)}`
  );
  return fetchGraphQL(params.text, variables);
}

// Export a singleton instance of Relay Environment configured with our network function:
export default new Environment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource()),
});

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
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6InNvdXJlbmEiLCJpYXQiOjE2NzI1MDQ3MTIsImV4cCI6MTY3MjU5MTExMn0.0zX2vNUoRRHkrcdKWeQrNaw3zEeHDn-bYKBd7fBvc6k",
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
