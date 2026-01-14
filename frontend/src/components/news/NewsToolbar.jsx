const NewsToolbar = ({ category, onCategory }) => {
  return (
    <div className="flex items-center justify-between gap-4 mb-4">
      <div className="text-sm text-gray-600">Filter by category</div>

      <select
        value={category}
        onChange={(e) => onCategory(e.target.value)}
        className="select-text rounded-lg border border-gray-200 px-3 py-2 text-sm bg-white"
      >
        <option value="all">All</option>
        <option value="macro">Macro</option>
        <option value="technology">Technology</option>
        <option value="crypto">Crypto</option>
        <option value="earnings">Earnings</option>
        <option value="regulatory">Regulatory</option>
        <option value="market">Market</option>
      </select>
    </div>
  )
}

export default NewsToolbar
