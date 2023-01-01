import App from "App";

import { RelayEnvironmentProvider } from "react-relay";

import { environment } from "relay/enviroment";

export const Root = () => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <App />
    </RelayEnvironmentProvider>
  );
};
