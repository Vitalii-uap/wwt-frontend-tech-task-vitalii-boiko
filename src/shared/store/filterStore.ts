import { create } from 'zustand'

import type { SearchRequestFilter } from '../api/types/SearchRequest/SearchRequestFilter'

interface FilterStore {
	filters: SearchRequestFilter
	setFilters: (filters: SearchRequestFilter) => void
	clearFilters: () => void
}

export const useFilterStore = create<FilterStore>(set => ({
	filters: [],
	setFilters: filters => set({ filters }),
	clearFilters: () => set({ filters: [] })
}))
