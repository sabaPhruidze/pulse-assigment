import Card from '../ui/Card'
import Badge from '../ui/Badge'
import { formatDateTime } from '../../utils/format'

const Skeleton = () => (
  <div className="animate-pulse space-y-3">
    {Array.from({ length: 8 }).map((_, i) => (
      <div key={i} className="h-14 bg-gray-100 rounded" />
    ))}
  </div>
)

const NewsList = ({ items, loading, error }) => {
 if (error) return <ErrorState message={error} />

  return (
    <Card title="📰 News">
      {loading ? (
        <Skeleton />
      ) : (
        <div className="divide-y divide-gray-100">
          {items.map((n) => (
            <div key={n.id} className="py-3 first:pt-0 last:pb-0">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="font-medium text-gray-900">{n.title}</div>
                  <div className="text-sm text-gray-500 mt-1">
                    {n.source} • {formatDateTime(n.timestamp)}
                  </div>
                </div>

                <Badge variant={n.category || 'neutral'}>{n.category}</Badge>
              </div>
            </div>
          ))}

          {!items.length && <div className="text-gray-500 py-6 text-center">No news found.</div>}
        </div>
      )}
    </Card>
  )
}

export default NewsList
