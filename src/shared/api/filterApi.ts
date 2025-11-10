import filterData from '../temp/filterData.json'
import type { FilterItem } from './types/Filter'

export interface FilterDataResponse {
	filterItems: FilterItem[]
}

export const fetchFilters = async (): Promise<FilterItem[]> => {
	await new Promise(resolve => setTimeout(resolve, 100))
	return (filterData as FilterDataResponse).filterItems
}
