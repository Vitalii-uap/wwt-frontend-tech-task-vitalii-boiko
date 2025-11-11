import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { useFilters } from '../../../../shared/api/hooks'
import { useFilterStore } from '../../../../shared/store'
import {
	searchRequestToSelectedOptions,
	selectedOptionsToSearchRequest
} from '../../../../shared/utils'
import { ConfirmationDialog } from '../ConfirmationDialog'
import { FilterItem } from '../FilterItem'

interface FilterModalProps {
	isOpen: boolean
	onClose: () => void
}

export const FilterModal = ({ isOpen, onClose }: FilterModalProps) => {
	const { t } = useTranslation()
	const { data: filterItems = [], isLoading } = useFilters()
	const { filters: savedFilters, setFilters } = useFilterStore()

	const [selectedOptions, setSelectedOptions] = useState<
		Record<string, string[]>
	>({})
	const [showConfirmation, setShowConfirmation] = useState(false)

	useEffect(() => {
		if (isOpen) setSelectedOptions(searchRequestToSelectedOptions(savedFilters))
	}, [isOpen, savedFilters])

	const handleOptionToggle = (filterId: string, optionId: string) => {
		setSelectedOptions(prev => {
			const current = prev[filterId] || []
			const updated = current.includes(optionId)
				? current.filter(id => id !== optionId)
				: [...current, optionId]
			return { ...prev, [filterId]: updated }
		})
	}

	const handleApply = () => setShowConfirmation(true)
	const handleConfirm = () => {
		const newFilters = selectedOptionsToSearchRequest(
			filterItems,
			selectedOptions
		)
		setFilters(newFilters)
		setShowConfirmation(false)
		onClose()
	}

	const handleClearAll = () => {
		setSelectedOptions({})
	}

	if (!isOpen) return null

	return (
		<>
			<div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-40">
				<div className="bg-white rounded-lg shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-hidden flex flex-col">
					{/* Header */}
					<div className="relative px-8 py-6 border-b border-gray-200">
						<h2 className="text-2xl font-bold text-center text-gray-900">
							{t('modal.title')}
						</h2>
						<button
							onClick={onClose}
							className="absolute top-6 right-8 text-gray-700 hover:text-gray-900 text-2xl font-light w-6 h-6 flex items-center justify-center leading-none"
							aria-label="Close"
						>
							×
						</button>
					</div>

					{/* Content */}
					<div className="flex-1 overflow-y-auto px-8 py-6">
						{isLoading ? (
							<div className="text-center text-gray-500 py-8">Loading...</div>
						) : (
							<div>
								{filterItems.map((filter, index) => (
									<div key={filter.id}>
										<FilterItem
											filter={filter}
											selectedOptions={selectedOptions[filter.id] || []}
											onOptionToggle={optionId =>
												handleOptionToggle(filter.id, optionId)
											}
										/>
										{index < filterItems.length - 1 && (
											<div className="border-b border-gray-200 my-6" />
										)}
									</div>
								))}
							</div>
						)}
					</div>

					{/* Footer */}
					<div className="px-8 py-5 border-t border-gray-200 flex items-center justify-between bg-gray-50">
						<button
							onClick={handleClearAll}
							className="text-blue-600 hover:text-blue-700 underline text-sm font-medium transition-colors"
						>
							{t('modal.clearAll')}
						</button>
						<button
							onClick={handleApply}
							className="px-8 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 font-medium transition-colors shadow-sm"
						>
							{t('modal.apply')}
						</button>
					</div>
				</div>
			</div>

			<ConfirmationDialog
				isOpen={showConfirmation}
				onConfirm={handleConfirm}
				onCancel={() => setShowConfirmation(false)}
			/>
		</>
	)
}
