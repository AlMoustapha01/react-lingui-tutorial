import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { lingui } from "@lingui/vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), lingui()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
