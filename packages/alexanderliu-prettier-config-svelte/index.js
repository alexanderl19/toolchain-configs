import prettierConfig from 'prettier-config';

export default {
	...prettierConfig,
	plugins: ['prettier-plugin-svelte'],
	overrides: [
		{
			files: '*.svelte',
			options: {
				parser: 'svelte',
			},
		},
	],
};
