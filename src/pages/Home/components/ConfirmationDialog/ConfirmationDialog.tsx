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
		<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
			<div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
				<h2 className="text-xl font-bold mb-4">{t('confirmation.title')}</h2>
				<p className="text-gray-600 mb-6">{t('confirmation.message')}</p>
				<div className="flex justify-end space-x-4">
					<button
						onClick={onCancel}
						className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50"
					>
						{t('confirmation.cancel')}
					</button>
					<button
						onClick={onConfirm}
						className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
					>
						{t('confirmation.confirm')}
					</button>
				</div>
			</div>
		</div>
	)
}
