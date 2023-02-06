import { Todos } from "containers/todos/Todos";
import { Suspense } from "react";
import { RelayEnvironmentProvider } from "react-relay";
import { environment } from "relay";
import "./index.css";

export function App() {
  return (
    <div className="bg-slate-900 antialiased h-screen p-8">
      <RelayEnvironmentProvider environment={environment}>
        <Suspense fallback="Loading Todos ...">
          <Todos />
        </Suspense>
      </RelayEnvironmentProvider>
    </div>
  );
}
