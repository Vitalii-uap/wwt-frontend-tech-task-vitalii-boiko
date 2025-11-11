import type { FilterItem as FilterItemType } from '../../../../shared/api/types/Filter'

interface FilterItemProps {
	filter: FilterItemType
	selectedOptions: string[]
	onOptionToggle: (optionId: string) => void
}

export const FilterItem = ({
	filter,
	selectedOptions,
	onOptionToggle
}: FilterItemProps) => {
	return (
		<div>
			<h3 className="text-base font-semibold text-gray-900 mb-4">
				{filter.name}
			</h3>
			<div className="grid grid-cols-3 gap-x-8 gap-y-4">
				{filter.options.map(option => (
					<label
						key={option.id}
						className="flex items-center gap-2.5 cursor-pointer group"
					>
						<input
							type="checkbox"
							checked={selectedOptions.includes(option.id)}
							onChange={() => onOptionToggle(option.id)}
							className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500 focus:ring-2 cursor-pointer accent-orange-500"
						/>
						<span className="text-sm text-gray-700 group-hover:text-gray-900 select-none">
							{option.name}
						</span>
					</label>
				))}
			</div>
		</div>
	)
}
