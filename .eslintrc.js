module.exports = {
	env: {
		es2017: true,
	},
	root: true,
	extends: [
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'prettier/@typescript-eslint',
		'plugin:prettier/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2019,
		project: 'tsconfig.json',
	},
	plugins: ['@typescript-eslint', 'prettier', 'html'],
	rules: {
		'linebreak-style': ['error', 'unix'],
		'@typescript-eslint/no-inferrable-types': ['off'],
		'prettier/prettier': 'error',
		'curly': ['error', 'all'],
		'no-confusing-arrow': ["error", { "allowParens": false }]
	},
	reportUnusedDisableDirectives: true,
};
