const SortHeader = ({ label, active, order, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center gap-2 font-semibold text-gray-700 hover:text-gray-900"
    >
      {label}
      {active && <span className="text-xs text-gray-400">{order === 'asc' ? '▲' : '▼'}</span>}
    </button>
  )
}

export default SortHeader
