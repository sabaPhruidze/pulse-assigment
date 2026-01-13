import { formatDateTime } from '../../utils/format'
import Card from '../ui/Card'
import Badge from '../ui/Badge'
import ErrorState from '../ui/ErrorState'
const NewsSkeleton = () => (
  <div className="animate-pulse space-y-3">
    {Array.from({ length: 5 }).map((_, i) => (
      <div key={i} className="h-14 bg-gray-100 rounded" />
    ))}
  </div>
)

const RecentNewsFeed = ({ data, loading, error }) => {
  const items = (data?.recentNews || []).slice(0, 5)

  if (error) return <ErrorState message={error} />

  return (
    <Card
      title="📰 Recent News"
      right={!loading ? <span className="text-sm text-gray-500">Latest 5</span> : null}
    >
      {loading ? (
        <NewsSkeleton />
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

                <Badge>{n.category}</Badge>
              </div>
            </div>
          ))}

          {!items.length && <div className="text-gray-500 py-6 text-center">No news found.</div>}
        </div>
      )}
    </Card>
  )
}

export default RecentNewsFeed
