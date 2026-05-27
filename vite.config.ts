import { sveltekit } from '@sveltejs/kit/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit(), react()],
	ssr: {
		external: ['@excalidraw/excalidraw', 'react', 'react-dom'],
		noExternal: ['clsx']
	}
});
