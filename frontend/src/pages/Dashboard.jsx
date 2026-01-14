import PortfolioSummaryCard from '../components/dashboard/PortfolioSummaryCard'
import TopMoversSection from '../components/dashboard/TopMoversSection'
import RecentNewsFeed from '../components/dashboard/RecentNewsFeed'
import ActiveAlertsSummary from '../components/dashboard/ActiveAlertsSummary'
import { useDashboardData } from '../hooks/useDashboardData'

const Dashboard = () => {
  const { data, loading, error } = useDashboardData()

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-slate-100">Dashboard</h1>
      <p className="text-gray-600 dark:text-slate-400 mb-6">Portfolio snapshot and market overview.</p>

      <div className="space-y-6">
        <PortfolioSummaryCard />

        <TopMoversSection data={data} loading={loading} error={error} />
        <RecentNewsFeed data={data} loading={loading} error={error} />
        <ActiveAlertsSummary data={data} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default Dashboard
