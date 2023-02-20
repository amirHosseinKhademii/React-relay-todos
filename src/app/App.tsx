import { Todos } from "containers/todos/Todos";
import { Suspense, useState } from "react";
import { RelayEnvironmentProvider } from "react-relay";
import { environment } from "relay/multipart";

import "./index.css";

export function App() {
  const [isOpen, setisOpen] = useState(false);
  return (
    <div className="bg-slate-900 antialiased h-screen p-8">
      <RelayEnvironmentProvider environment={environment}>
        <button onClick={() => setisOpen(true)}>Open</button>
        <Suspense fallback="Loading Todos ...">{isOpen && <Todos />}</Suspense>
      </RelayEnvironmentProvider>
    </div>
  );
}
