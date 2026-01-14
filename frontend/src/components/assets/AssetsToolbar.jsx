const FilterButton = ({ active, children, onClick }) => {
  const base = 'px-3 py-2 rounded-lg text-sm font-medium transition-colors'
  const activeCls =
  'bg-gray-900 text-white ' +
  'dark:bg-slate-200 dark:text-slate-900'

const idleCls =
  'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 ' +
  'dark:bg-slate-900 dark:text-slate-200 dark:border-slate-700 dark:hover:bg-slate-800'
  return (
    <button type="button" onClick={onClick} className={`${base} ${active ? activeCls : idleCls}`}>
      {children}
    </button>
  )
}

const AssetsToolbar = ({ filters, activeFilter, onFilter, search, onSearch }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        {filters.map((f) => (
          <FilterButton key={f.value} active={activeFilter === f.value} onClick={() => onFilter(f.value)}>
            {f.label}
          </FilterButton>
        ))}
      </div>

      <div className="w-full md:w-72">
        <input
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          placeholder="Search by symbol or name…"
          className="select-text w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-gray-900/20 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:ring-slate-200/20"
        />
      </div>
    </div>
  )
}

export default AssetsToolbar