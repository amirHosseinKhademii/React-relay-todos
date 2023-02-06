import { Todos } from "containers/todos/Todos";
import { Users } from "containers/users/Users";
import { Suspense } from "react";
import { RelayEnvironmentProvider } from "react-relay";
import { environment } from "relay";
import "./index.css";

export function App() {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <div className="bg-slate-900 antialiased h-screen p-8 grid grid-cols-3 gap-x-4">
        <Suspense fallback="Loading Todos ...">
          <Todos />
        </Suspense>
        <Users />
      </div>
    </RelayEnvironmentProvider>
  );
}
