import { usePortfolioSummary } from '../../hooks/usePortfolioSummary'
import { formatCurrency, formatPercent, getChangeColor } from '../../utils/format'
import Card from '../ui/Card'

const PortfolioSummaryCard = () => {
  const { portfolio, loading, error } = usePortfolioSummary()
  const changeColor = getChangeColor(portfolio?.totalChangePercent)

  return (
    <Card
      title="💼 Portfolio Summary"
      right={loading ? <span className="text-sm text-gray-500 dark:text-slate-400">Loading…</span> : null}
    >
      {error && (
      <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700 dark:border-red-900/40 dark:bg-red-950/40 dark:text-red-200">
          {error}
      </div>
      )}

      {!error && (
        <>
          {loading ? (
            <div className="animate-pulse space-y-3">
             <div className="h-8 bg-gray-100 dark:bg-slate-800/60 rounded" />
                <div className="h-4 bg-gray-100 dark:bg-slate-800/60 rounded w-2/3" />
            </div>
          ) : (
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <div className="text-sm text-gray-500 dark:text-slate-400">Total Value</div>
                <div className="text-3xl font-bold text-gray-900 dark:text-slate-100">
                  {formatCurrency(portfolio?.totalValue)}
                </div>
              </div>

             <div className="text-left sm:text-right">
              <div className="text-sm text-gray-500 dark:text-slate-400">Total Change</div>
                <div className={`text-xl font-semibold ${changeColor}`}>
                  {formatCurrency(portfolio?.totalChange)} ({formatPercent(portfolio?.totalChangePercent)})
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </Card>
  )
}

export default PortfolioSummaryCard
