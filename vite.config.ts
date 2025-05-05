import { reactRouter } from "@react-router/dev/vite";
import { sentryReactRouter, type SentryReactRouterBuildOptions } from "@sentry/react-router";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const sentryConfig: SentryReactRouterBuildOptions = {
  org: "cloudsnetworks",
  project: "travel-agency",
  // An auth token is required for uploading source maps.
  authToken: "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"
  // ...
};


export default defineConfig(config => {
  return {
  plugins: [tailwindcss(), tsconfigPaths(),reactRouter(),sentryReactRouter(sentryConfig, config)],
  sentryConfig, 
  ssr: {
    noExternal: [/@syncfusion/]
  }
  
  };
});
