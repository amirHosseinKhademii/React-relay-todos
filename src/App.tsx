import { useEffect } from "react";
import {
  graphql,
  loadQuery,
  PreloadedQuery,
  usePreloadedQuery,
  useQueryLoader,
  useRelayEnvironment,
} from "react-relay";
import { environment } from "relay";
import { AppTodosQuery as AppTodosQueryType } from "__generated__/AppTodosQuery.graphql";

const AppTodosQuery = graphql`
  query AppTodosQuery {
    todos(page: 1, limit: 10) {
      data {
        id
        title
        description
        created_at
        updated_at
        isCompleted
      }
      count
      nextPage
      prevPage
    }
  }
`;
const preloadedQuery = loadQuery<AppTodosQueryType>(
  environment,
  AppTodosQuery,
  {}
);

function App() {
  const data = usePreloadedQuery(AppTodosQuery, preloadedQuery);
  console.log(data.todos.data);

  return <div>test</div>;
}

export default App;
