import { useAlertsData } from '../hooks/useAlertsData'
import AlertsGroupedBySeverity from '../components/alerts/AlertsGroupedBySeverity'

const Alerts = () => {
  const { data, loading, error } = useAlertsData()

  return (
    <div>
    <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-slate-100">Alerts</h1>
    <p className="text-gray-600 dark:text-slate-400 mb-6">All alerts, grouped by severity for faster triage.</p>
      <AlertsGroupedBySeverity
        items={data || []}
        loading={loading}
        error={error && 'Failed to load alerts.'}
      />
    </div>
  )
}

export default Alerts