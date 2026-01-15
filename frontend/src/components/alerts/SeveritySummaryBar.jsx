import Badge from '../ui/Badge'
import { SEVERITY_ORDER } from './alertsUtils'

const SummaryChip = ({ label, count, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm hover:bg-gray-50 transition-colors dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800"
  >
    <Badge variant={label}>{label}</Badge>
    <span className="text-gray-700 dark:text-slate-200 font-semibold">{count}</span>
  </button>
)

const SeveritySummaryBar = ({ counts, onSelect }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {SEVERITY_ORDER.map((k) => (
        <SummaryChip key={k} label={k} count={counts[k] || 0} onClick={() => onSelect(k)} />
      ))}
    </div>
  )
}

export default SeveritySummaryBar