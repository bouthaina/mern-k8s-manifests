import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(() => {
	return {
		plugins: [react()],
                define: {
                   'import.meta.env.VITE_API_URL': JSON.stringify(process.env.VITE_API_URL),
                },
		test: {
			globals: true,
			environment: 'jsdom',
			setupFiles: './src/setupTests.ts',
	},
	};
});
