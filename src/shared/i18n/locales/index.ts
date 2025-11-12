import common from '@/shared/i18n/locales/en/common.json'
import filter from '@/shared/i18n/locales/en/filter.json'
import notFound from '@/shared/i18n/locales/en/not-Found.json'

export const resources = {
	en: {
		translation: {
			...common,
			...filter,
			...notFound
		}
	}
}
