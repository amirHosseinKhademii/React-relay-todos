import { Suspense } from "react";
import { RelayEnvironmentProvider } from "react-relay";
import { environment } from "relay";
import "./index.css";
import { TodosPage } from "pages/todo/TodoPage";

export function App() {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <Suspense fallback="Loading Todos ...">
        <TodosPage />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}
