import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

interface minseok {}

// https://vitejs.dev/config/
const resolveAlias = Object.fromEntries(
  Object.entries({
    "@api": "./src/api",
    "@pages": "./src/pages",
    "@utils": "./src/utils",
    "@stores": "./src/stores",
    "@router": "./src/router",
    "@plugins": "./src/plugins",
    "@components": "./src/components",
    "@composable": "./src/composable",
  }).map(([key, value]) => [key, path.resolve(__dirname, value)])
);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: resolveAlias,
  },
});
