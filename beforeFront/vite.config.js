import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

const resolveAlias = Object.fromEntries(
  Object.entries({
    "@api": "./src/api",
  }).map(([key, value]) => [key, path.resolve(__dirname, value)])
);

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: resolveAlias,
  },
});
