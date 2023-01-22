import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import relay from "vite-plugin-relay";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), relay],
  server: {
    proxy: {
      "/graphql": {
        target: "http://localhost:5109/graphql",
        changeOrigin: true,
      },
    },
  },
});
