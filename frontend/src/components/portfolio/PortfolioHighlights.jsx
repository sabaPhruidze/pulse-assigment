import Card from '../ui/Card'
import { formatCurrency, formatPercent, getChangeColor } from '../../utils/format'

const Stat = ({ label, value, className = '' }) => (
  <div>
    <div className="text-sm text-gray-500 dark:text-slate-400">{label}</div>
    <div className={`text-lg font-semibold ${className}`}>{value}</div>
  </div>
)

const PortfolioHighlights = ({ portfolio, performance, loading }) => {
  const changeCls = getChangeColor(portfolio?.totalChangePercent)

  return (
    <Card title="💼 Portfolio Highlights" right={loading ? <span className="text-sm text-gray-500 dark:text-slate-400">Loading…</span> : null}>
      {loading ? (
        <div className="animate-pulse space-y-3">
          <div className="h-10 bg-gray-100 dark:bg-slate-800/60 rounded" />
          <div className="h-10 bg-gray-100 dark:bg-slate-800/60 rounded" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Stat label="Total Value" value={formatCurrency(portfolio?.totalValue)} />
          <Stat
            label="Total Change"
            value={`${formatCurrency(portfolio?.totalChange)} (${formatPercent(portfolio?.totalChangePercent)})`}
            className={changeCls}
          />
          <Stat
            label="Best Performer"
            value={`${performance?.bestPerformer?.assetId} (${formatPercent(performance?.bestPerformer?.changePercent)})`}
            className="text-green-700 dark:text-green-300"
          />
          <Stat
            label="Worst Performer"
            value={`${performance?.worstPerformer?.assetId} (${formatPercent(performance?.worstPerformer?.changePercent)})`}
            className="text-red-700 dark:text-red-300"
          />
        </div>
      )}
    </Card>
  )
}

export default PortfolioHighlights