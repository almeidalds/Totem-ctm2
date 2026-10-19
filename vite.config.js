import { fileURLToPath } from "node:url";
import { resolve } from "node:path";
import { defineConfig } from "vite";

const rootDirectory = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: resolve(rootDirectory, "index.html"),
        transition: resolve(rootDirectory, "transition.html"),
        map: resolve(rootDirectory, "src/pages/index.html")
      }
    }
  }
});
