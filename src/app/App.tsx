import { Todos } from "containers/todos/Todos";
import { Suspense, useState } from "react";
import { RelayEnvironmentProvider } from "react-relay";
import { environment } from "relay/multipart";

import "./index.css";

export function App() {
  return (
    <div className="bg-slate-900 antialiased p-8 h-screen overflow-y-auto">
      <RelayEnvironmentProvider environment={environment}>
        <Suspense fallback="Loading Todos ...">
          <Todos />
        </Suspense>
      </RelayEnvironmentProvider>
    </div>
  );
}
