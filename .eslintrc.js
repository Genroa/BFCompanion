module.exports = {
	root: true,

	env: {
		node: true
	},

	extends: [
		'plugin:vue/essential',
		'@vue/standard'
	],

	parserOptions: {
		parser: 'babel-eslint'
	},

	rules: {
		'no-console': 'off',
		'no-debugger': 'off',
		indent: [
			'error',
			'tab'
		],
		'no-tabs': 0,
		'vue/no-unused-vars': 'warn',
		'no-unused-vars': 'warn'
	}
}
