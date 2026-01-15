import Badge from '../ui/Badge'
import { formatDateTime } from '../../utils/format'

const SeveritySection = ({ id, title, items, isOpen, onToggle }) => {
  return (
    <div id={id} className="scroll-mt-24">
      <div className="rounded-lg border border-gray-100 dark:border-slate-800">
        <button
          type="button"
          onClick={onToggle}
         className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-slate-800/60 transition-colors"
        >
          <div className="flex items-center gap-2">
            <Badge variant={title}>{title}</Badge>
            <span className="text-sm text-gray-600 dark:text-slate-400">{items.length} items</span>
          </div>
          <span className="text-xs text-gray-400 dark:text-slate-500">{isOpen ? 'hide' : 'show'}</span>
        </button>

        {isOpen && (
         <div className="px-4 pb-4 divide-y divide-gray-100 dark:divide-slate-800">
            {items.map((a) => (
              <div key={a.id} className="py-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div className="font-medium text-gray-900 dark:text-slate-100">{a.message}</div>
                    <div className="text-sm text-gray-500 dark:text-slate-400 mt-1">{formatDateTime(a.timestamp)}</div>
                  </div>
                  <Badge variant={a.severity}>{a.severity}</Badge>
                </div>
              </div>
            ))}

            {!items.length && <div className="py-6 text-center text-gray-500 dark:text-slate-400">No alerts.</div>}
          </div>
        )}
      </div>
    </div>
  )
}

export default SeveritySection