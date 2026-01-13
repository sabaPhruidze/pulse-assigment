import { useState } from 'react'
import { useNewsData } from '../hooks/useNewsData'
import NewsToolbar from '../components/news/NewsToolbar'
import NewsList from '../components/news/NewsList'

const News = () => {
  const [category, setCategory] = useState('all')
  const { data, loading, error } = useNewsData(category)

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">News</h1>
      <p className="text-gray-600 mb-6">Market news with category filtering.</p>

      <NewsToolbar category={category} onCategory={setCategory} />
      <NewsList items={data || []} loading={loading} error={error && 'Failed to load news.'} />
    </div>
  )
}

export default News
