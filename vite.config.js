import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	assetsInclude: '**/*.m4a',
	define: {
		'process.env.VITE_DATOCMS_TOKEN': JSON.stringify(
			process.env.VITE_DATOCMS_TOKEN
		),
	},
})
