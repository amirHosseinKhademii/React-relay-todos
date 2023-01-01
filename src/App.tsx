import { Todos } from "containers";
import { Suspense } from "react";
import { RelayEnvironmentProvider } from "react-relay";
import { environment } from "relay";

export function App() {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <Suspense fallback="Loading Todos ...">
        <Todos />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}
