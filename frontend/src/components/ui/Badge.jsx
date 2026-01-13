const styles = {
  neutral: 'bg-gray-100 text-gray-700',
  low: 'bg-gray-100 text-gray-700',
  medium: 'bg-yellow-100 text-yellow-700',
  high: 'bg-orange-100 text-orange-700',
  critical: 'bg-red-100 text-red-700',
   macro: 'bg-blue-100 text-blue-700',
  technology: 'bg-purple-100 text-purple-700',
  crypto: 'bg-indigo-100 text-indigo-700',
  earnings: 'bg-green-100 text-green-700',
  regulatory: 'bg-yellow-100 text-yellow-700',
  market: 'bg-gray-100 text-gray-700',
}

const Badge = ({ children, variant = 'neutral' }) => {
  const base = 'inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium'
  const cls = styles[variant] || styles.neutral

  return <span className={`${base} ${cls}`}>{children}</span>
}

export default Badge
