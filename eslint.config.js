import tanstackQuery from '@tanstack/eslint-plugin-query'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import i18next from 'eslint-plugin-i18next'
import prettier from 'eslint-plugin-prettier'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
	{
		files: ['**/*.ts', '**/*.tsx'],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				ecmaFeatures: { jsx: true },
				ecmaVersion: 'latest',
				sourceType: 'module'
			},
			globals: {
				browser: true,
				es2021: true,
				node: true
			}
		},
		plugins: {
			'@typescript-eslint': tsPlugin,
			react,
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh,
			'@tanstack/query': tanstackQuery,
			prettier,
			i18next
		},
		rules: {
			...tsPlugin.configs.recommended.rules,
			...react.configs.recommended.rules,
			...react.configs['jsx-runtime'].rules,
			'react-hooks/rules-of-hooks': 'error',
			'react-hooks/exhaustive-deps': 'warn',
			'@tanstack/query/exhaustive-deps': 'error',
			'prettier/prettier': 'error',
			'i18next/no-literal-string': 'warn',
			'react-refresh/only-export-components': [
				'warn',
				{ allowConstantExport: true }
			],
			'constructor-super': 'off',
			'no-this-before-super': 'off'
		},
		settings: {
			react: { version: 'detect' }
		}
	},
	{
		ignores: ['dist/', 'node_modules/', '*.config.js', '.eslintrc.*']
	}
]
