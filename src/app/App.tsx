import { Todo } from "containers/todo/Todos";
import { Suspense } from "react";
import { loadQuery, RelayEnvironmentProvider } from "react-relay";
import { environment } from "relay";
import "./index.css";
import { TodoQuery as TTodoQuery } from "containers/todo/graphql/__generated__/TodoQuery.graphql";
import { TodoQuery } from "containers/todo/graphql/Todo.queries";

const initialQueryRef = loadQuery<TTodoQuery>(environment, TodoQuery, {
  id: "VG9kbzo3ZWNlZmYzYi0zODRiLTQ2ODAtOTg5Ny0xMjZmMzc3ODAxODQ=",
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
