import { Todo } from "containers/todo/Todos";
import { Suspense } from "react";
import { loadQuery, RelayEnvironmentProvider } from "react-relay";
import { environment } from "relay";
import "./index.css";
import { TodoQuery as TTodoQuery } from "containers/todo/graphql/__generated__/TodoQuery.graphql";
import { TodoQuery } from "containers/todo/graphql/Todo.queries";

const initialQueryRef = loadQuery<TTodoQuery>(environment, TodoQuery, {
  id: "VG9kbzoxNjQ5YTVhMi0yZTIyLTQ1ZTAtYWIyZi04ZjZkYjliZGVjYzM=",
});

export function App() {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <Suspense fallback="Loading Todos ...">
        <Todo {...{ initialQueryRef }} />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}
