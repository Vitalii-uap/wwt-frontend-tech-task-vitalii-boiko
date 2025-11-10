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
		<div className="mb-6">
			<h3 className="text-lg font-semibold mb-2">{filter.name}</h3>
			{filter.description && (
				<p className="text-sm text-gray-600 mb-4">{filter.description}</p>
			)}
			<div className="space-y-2">
				{filter.options.map(option => (
					<label
						key={option.id}
						className="flex items-start space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded"
					>
						<input
							type="checkbox"
							checked={selectedOptions.includes(option.id)}
							onChange={() => onOptionToggle(option.id)}
							className="mt-1"
						/>
						<div className="flex-1">
							<div className="font-medium">{option.name}</div>
							{option.description && (
								<div className="text-sm text-gray-600">
									{option.description}
								</div>
							)}
						</div>
					</label>
				))}
			</div>
		</div>
	)
}
