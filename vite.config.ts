import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    {
      name: "mirror-mimarlik-route",
      closeBundle() {
        const distDir = path.resolve(__dirname, "dist");
        const sourceIndex = path.join(distDir, "index.html");
        const mimarlikDir = path.join(distDir, "mimarlik");
        const mimarlikIndex = path.join(mimarlikDir, "index.html");

        if (!fs.existsSync(sourceIndex)) {
          return;
        }

        fs.mkdirSync(mimarlikDir, { recursive: true });
        fs.copyFileSync(sourceIndex, mimarlikIndex);
      },
    },
  ],
  // Include common image/video assets with project-specific extensions
  assetsInclude: ["**/*.PNG", "**/*.JPG", "**/*.jpg", "**/*.MOV", "**/*.mov"],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
