import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
	base: "/Landing-Page-React-Level-01/",
	plugins: [react(), tailwindcss()],
});
