import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  // base:"/deploying-vite-project",
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      sass: {
        // options for sass
      },
    },
  },
  server: {
    port: 3000,
  },
});
