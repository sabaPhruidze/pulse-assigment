import { usePortfolioSummary } from '../hooks/usePortfolioSummary'
import { usePortfolioPerformance } from '../hooks/usePortfolioPerformance'
import PortfolioHighlights from '../components/portfolio/PortfolioHighlights'
import PortfolioHoldingsTable from '../components/portfolio/PortfolioHoldingsTable'
import AllocationPieChart from '../components/portfolio/AllocationPieChart'
import ChangeBarChart from '../components/portfolio/ChangeBarChart'

const Portfolio = () => {
  const { portfolio, loading: pLoading, error: pError } = usePortfolioSummary()
  const { data: perf, loading: perfLoading, error: perfError } = usePortfolioPerformance()

  const loading = pLoading || perfLoading
  const error = pError || perfError

  if (error) {
    return (
      <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-700">
        {error}
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Portfolio</h1>
        <p className="text-gray-600">Detailed holdings + charts.</p>
      </div>

      <PortfolioHighlights portfolio={portfolio} performance={perf} loading={loading} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AllocationPieChart allocation={perf?.assetAllocation} loading={loading} />
        <ChangeBarChart assets={portfolio?.assets} loading={loading} />
      </div>

      <PortfolioHoldingsTable assets={portfolio?.assets} loading={loading} />
    </div>
  )
}

export default Portfolio