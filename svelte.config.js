import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: {
		runes: ({ filename }) =>
			filename.split(/[/\\]/).includes('node_modules') ? undefined : true
	},
	kit: {
		adapter: adapter({ strict: true }),
		paths: {
			base: '/gift-for-alif'
		},
		prerender: {
			entries: ['*']
		}
	}
};

export default config;
