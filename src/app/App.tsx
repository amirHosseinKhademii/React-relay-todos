import { Suspense } from "react";
import { RelayEnvironmentProvider } from "react-relay";
import { environment } from "relay";
import "./index.css";
import { Todos } from "containers/todo/Todos";

export function App() {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <Suspense fallback="Loading Todos ...">
        <Todos />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}
