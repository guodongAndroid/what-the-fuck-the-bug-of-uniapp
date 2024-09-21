import { defineConfig } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';
import eslint from 'vite-plugin-eslint';
import { resolve } from 'node:path';

console.log('VITE ENV', process.env.NODE_ENV);

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: [
			{
				find: '@',
				replacement: resolve(__dirname, './src'),
			},
		],
	},
	plugins: [
		uni(),
		// 开发环境添加 eslint 校验即可
		process.env.NODE_ENV === 'development'
			? eslint({
					cache: false,
					include: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.vue'],
					exclude: ['node_modules', 'uni_modules'],
				})
			: undefined,
	],
	build: {
		minify: 'terser',
		terserOptions: {
			compress: {
				drop_console: process.env.NODE_ENV === 'production',
				drop_debugger: process.env.NODE_ENV === 'production',
			},
		},
	},
});
