//tz-meta {"id":"sveltekit-config","title":"SvelteKit config","category":"Starter","file":"starters/sveltekit/svelte.config.js","tags":["sveltekit","config"],"description":"Minimal SvelteKit config using adapter-auto.","dnas":["botanical-lab"]}
import adapter from '@sveltejs/adapter-auto';

export default {
	kit: {
		adapter: adapter()
	}
};
