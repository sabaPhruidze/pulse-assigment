import Card from '../ui/Card'
import Badge from '../ui/Badge'
import { formatDateTime } from '../../utils/format'
import ErrorState from '../ui/ErrorState'
const AlertsSkeleton = () => (
  <div className="animate-pulse space-y-3">
    {Array.from({ length: 5 }).map((_, i) => (
      <div key={i} className="h-14 bg-gray-100 rounded" />
    ))}
  </div>
)

const ActiveAlertsSummary = ({ data, loading, error }) => {
  const items = (data?.activeAlerts || []).slice(0, 5)

 if (error) return <ErrorState message={error} />

  return (
    <Card
      title="🚨 Active Alerts"
      right={!loading ? <span className="text-sm text-gray-500">Latest 5</span> : null}
    >
      {loading ? (
        <AlertsSkeleton />
      ) : (
        <div className="divide-y divide-gray-100">
          {items.map((a) => (
            <div key={a.id} className="py-3 first:pt-0 last:pb-0">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="font-medium text-gray-900">{a.message}</div>
                  <div className="text-sm text-gray-500 mt-1">{formatDateTime(a.timestamp)}</div>
                </div>

                <Badge variant={a.severity || 'neutral'}>{a.severity}</Badge>
              </div>
            </div>
          ))}

          {!items.length && <div className="text-gray-500 py-6 text-center">No alerts found.</div>}
        </div>
      )}
    </Card>
  )
}

export default ActiveAlertsSummary
