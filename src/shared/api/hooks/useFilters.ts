import { useQuery } from '@tanstack/react-query'

import { fetchFilters } from '../filterApi'

export const useFilters = () => {
	return useQuery({
		queryKey: ['filters'],
		queryFn: fetchFilters
	})
}
