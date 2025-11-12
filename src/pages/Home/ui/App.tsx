import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { useFilterStore } from '../../../shared/store'
import { FilterModal } from '../components/FilterModal'

export const App = () => {
	const { t } = useTranslation()
	const [isModalOpen, setIsModalOpen] = useState(false)
	const { filters } = useFilterStore()

	return (
		<section className="w-full min-h-dvh p-8">
			<div className="max-w-4xl mx-auto">
				<h1 className="text-6xl text-gray-600 mb-12 text-center">
					{t('title')}
				</h1>

				<div className="mb-8 text-center">
					<button
						onClick={() => setIsModalOpen(true)}
						className="px-6 py-2.5 bg-orange-500 text-white rounded-md hover:bg-orange-600 font-medium transition-colors shadow-sm"
					>
						{t('modal.title')}
					</button>
				</div>

				<div className="bg-gray-100 p-6 rounded-lg">
					<h2 className="text-xl font-bold mb-4">{t('currentFilters')}</h2>
					<pre className="bg-white p-4 rounded overflow-auto">
						{JSON.stringify(filters, null, 2)}
					</pre>
				</div>
			</div>

			<FilterModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
			/>
		</section>
	)
}
