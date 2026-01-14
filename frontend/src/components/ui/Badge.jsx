const styles = {
  neutral:
    'bg-gray-100 text-gray-700 border border-gray-200 ' +
    'dark:bg-slate-800/60 dark:text-slate-200 dark:border-slate-700',

  // Alert severities
  low:
    'bg-gray-100 text-gray-700 border border-gray-200 ' +
    'dark:bg-slate-800/60 dark:text-slate-200 dark:border-slate-700',
  medium:
    'bg-yellow-100 text-yellow-700 border border-yellow-200 ' +
    'dark:bg-yellow-950/40 dark:text-yellow-200 dark:border-yellow-900/40',
  high:
    'bg-orange-100 text-orange-700 border border-orange-200 ' +
    'dark:bg-orange-950/40 dark:text-orange-200 dark:border-orange-900/40',
  critical:
    'bg-red-100 text-red-700 border border-red-200 ' +
    'dark:bg-red-950/40 dark:text-red-200 dark:border-red-900/40',

  // News categories
  macro:
    'bg-blue-100 text-blue-700 border border-blue-200 ' +
    'dark:bg-blue-950/40 dark:text-blue-200 dark:border-blue-900/40',
  technology:
    'bg-purple-100 text-purple-700 border border-purple-200 ' +
    'dark:bg-purple-950/40 dark:text-purple-200 dark:border-purple-900/40',
  crypto:
    'bg-indigo-100 text-indigo-700 border border-indigo-200 ' +
    'dark:bg-indigo-950/40 dark:text-indigo-200 dark:border-indigo-900/40',
  earnings:
    'bg-green-100 text-green-700 border border-green-200 ' +
    'dark:bg-green-950/40 dark:text-green-200 dark:border-green-900/40',
  regulatory:
    'bg-yellow-100 text-yellow-700 border border-yellow-200 ' +
    'dark:bg-yellow-950/40 dark:text-yellow-200 dark:border-yellow-900/40',
  market:
    'bg-gray-100 text-gray-700 border border-gray-200 ' +
    'dark:bg-slate-800/60 dark:text-slate-200 dark:border-slate-700',
}

const Badge = ({ children, variant = 'neutral' }) => {
  const base = 'inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium whitespace-nowrap'
  const cls = styles[variant] || styles.neutral

  return <span className={`${base} ${cls}`}>{children}</span>
}

export default Badge
