import { formatCurrency, formatPercent, getChangeColor } from '../../utils/format'
import Card from '../ui/Card'
import ErrorState from '../ui/ErrorState'
const MoversList = ({ items }) => {
  return (
    <div className="divide-y divide-gray-100">
      {(items || []).slice(0, 3).map((a) => (
        <div key={a.id} className="py-3 first:pt-0 last:pb-0 flex justify-between gap-4">
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-900">{a.symbol}</span>
              <span className="text-sm text-gray-500 truncate">{a.name}</span>
            </div>
            <div className="text-xs text-gray-500 mt-1">{formatCurrency(a.currentPrice)}</div>
          </div>

          <div className={`font-semibold ${getChangeColor(a.changePercent)}`}>
            {formatPercent(a.changePercent)}
          </div>
        </div>
      ))}
    </div>
  )
}

const MoversSkeleton = () => (
  <div className="animate-pulse space-y-3">
    {Array.from({ length: 3 }).map((_, i) => (
      <div key={i} className="h-12 bg-gray-100 rounded" />
    ))}
  </div>
)

const MoversCard = ({ title, items, loading }) => {
  return (
    <Card title={title}>
      {loading ? <MoversSkeleton /> : <MoversList items={items} />}
    </Card>
  )
}

const TopMoversSection = ({ data, loading, error }) => {
 if (error) return <ErrorState message={error} />

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <MoversCard title="📈 Top Gainers" items={data?.topGainers} loading={loading} />
      <MoversCard title="📉 Top Losers" items={data?.topLosers} loading={loading} />
    </div>
  )
}


export default TopMoversSection
