import type { FilterItem } from '../api/types/Filter'
import { FilterType } from '../api/types/Filter'
import type {
	SearchRequestFilter,
	SearchRequestOptions
} from '../api/types/SearchRequest/SearchRequestFilter'

export const selectedOptionsToSearchRequest = (
	filterItems: FilterItem[],
	selectedOptions: Record<string, string[]>
): SearchRequestFilter => {
	return filterItems
		.filter(
			item => selectedOptions[item.id] && selectedOptions[item.id].length > 0
		)
		.map(
			item =>
				({
					id: item.id,
					type: FilterType.OPTION,
					optionsIds: selectedOptions[item.id]
				}) as SearchRequestOptions
		)
}

export const searchRequestToSelectedOptions = (
	searchRequest: SearchRequestFilter
): Record<string, string[]> => {
	const result: Record<string, string[]> = {}
	searchRequest.forEach(filter => {
		result[filter.id] = filter.optionsIds
	})
	return result
}
