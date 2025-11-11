import { useTranslation } from 'react-i18next'

interface ConfirmationDialogProps {
	isOpen: boolean
	onConfirm: () => void
	onCancel: () => void
}

export const ConfirmationDialog = ({
	isOpen,
	onConfirm,
	onCancel
}: ConfirmationDialogProps) => {
	const { t } = useTranslation()

	if (!isOpen) return null

	return (
		<div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
			<div className="bg-white rounded-lg shadow-2xl max-w-md w-full mx-4 relative">
				<button
					onClick={onCancel}
					className="absolute top-4 right-4 text-gray-700 hover:text-gray-900 text-xl font-light w-6 h-6 flex items-center justify-center leading-none"
					aria-label="Close"
				>
					×
				</button>
				<div className="p-6 pt-8 pb-6">
					<h2 className="text-lg font-semibold text-gray-800 mb-8 text-center px-4">
						{t('confirmation.title')}
					</h2>
					<div className="flex gap-3 justify-center">
						<button
							onClick={onCancel}
							className="px-6 py-2.5 bg-white border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 font-medium transition-colors shadow-sm"
						>
							{t('confirmation.useOld')}
						</button>
						<button
							onClick={onConfirm}
							className="px-6 py-2.5 bg-orange-500 text-white rounded-md hover:bg-orange-600 font-medium transition-colors shadow-sm"
						>
							{t('confirmation.applyNew')}
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
