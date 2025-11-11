import { en } from './en'

export const resources = {
	en: {
		translation: {
			...en.filter,
			...en['not-found']
		}
	}
} as const
