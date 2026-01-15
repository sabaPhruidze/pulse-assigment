import { useEffect, useMemo, useState } from 'react'
import Card from '../ui/Card'
import SeveritySummaryBar from './SeveritySummaryBar'
import SeveritySection from './SeveritySection'
import { groupBySeverity, SEVERITY_ORDER } from './alertsUtils'
import ErrorState from '../ui/ErrorState'
const Skeleton = () => (
  <div className="animate-pulse space-y-3">
    {Array.from({ length: 6 }).map((_, i) => (
      <div key={i} className="h-12 bg-gray-100 dark:bg-slate-800/60 rounded" />
    ))}
  </div>
)

const AlertsGroupedBySeverity = ({ items, loading, error }) => {
  const groups = useMemo(() => groupBySeverity(items), [items])
  const counts = useMemo(
    () => SEVERITY_ORDER.reduce((acc, k) => ({ ...acc, [k]: groups[k].length }), {}),
    [groups]
  )

  const [openKey, setOpenKey] = useState('critical')

  useEffect(() => {
    const el = document.getElementById(`sev-${openKey}`)
    if (!el) return
    setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 0)
  }, [openKey])

  if (error) return <ErrorState message={error} />

  return (
    <Card title="🚨 Alerts Center" right={!loading ? <span className="text-sm text-gray-500 dark:text-slate-400">Grouped by severity</span> : null}>
      {loading ? (
        <Skeleton />
      ) : (
        <div className="space-y-5">
          <SeveritySummaryBar counts={counts} onSelect={setOpenKey} />

          {SEVERITY_ORDER.map((k) => (
            <SeveritySection
              key={k}
              id={`sev-${k}`}
              title={k}
              items={groups[k]}
              isOpen={openKey === k}
              onToggle={() => setOpenKey((prev) => (prev === k ? '' : k))}
            />
          ))}
        </div>
      )}
    </Card>
  )
}

export default AlertsGroupedBySeverity