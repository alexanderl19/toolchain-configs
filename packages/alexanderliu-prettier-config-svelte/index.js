import prettierConfig from '@alexanderliu/prettier-config';

export default {
	...prettierConfig,
	plugins: [...prettierConfig.plugins, 'prettier-plugin-svelte'],
	overrides: [
		{
			files: '*.svelte',
			options: {
				parser: 'svelte',
			},
		},
	],
};
