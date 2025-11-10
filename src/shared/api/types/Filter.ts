export interface FilterOption {
	id: string
	name: string
	description?: string
}

export enum FilterType {
	OPTION = 'OPTION'
}

export interface FilterItem {
	id: string
	name: string
	description?: string
	type: FilterType
	options: FilterOption[]
}
