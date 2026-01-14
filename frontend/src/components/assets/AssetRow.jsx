import { formatCurrency, formatPercent, formatNumber, getChangeColor } from '../../utils/format'

const AssetRow = ({ asset, onClick }) => {
  return (
    <tr
      className="hover:bg-gray-50 cursor-pointer"
      onClick={() => onClick?.(asset)}
      title="Click to view details"
    >
      {/* Symbol column - shows name on mobile */}
      <td className="py-3 pr-4 font-semibold text-gray-900 whitespace-nowrap">
        {asset.symbol}
        <div className="sm:hidden text-xs text-gray-500 font-normal mt-1">
          {asset.name}
        </div>
      </td>

      {/* Name column - hidden on mobile */}
      <td className="py-3 pr-4 text-gray-700 min-w-[220px] hidden sm:table-cell">
        {asset.name}
      </td>

      {/* Price column - hidden on mobile */}
      <td className="py-3 pr-4 text-gray-900 whitespace-nowrap hidden sm:table-cell">
        {formatCurrency(asset.currentPrice)}
      </td>

      {/* Change % column - shows price on mobile */}
      <td className={`py-3 pr-4 font-semibold whitespace-nowrap ${getChangeColor(asset.changePercent)}`}>
        {formatPercent(asset.changePercent)}
        <div className="sm:hidden text-xs text-gray-500 font-normal mt-1">
          {formatCurrency(asset.currentPrice)}
        </div>
      </td>

      {/* Volume column - hidden on tablet and mobile */}
      <td className="py-3 text-gray-700 whitespace-nowrap hidden md:table-cell">
        {formatNumber(asset.volume)}
      </td>
    </tr>
  )
}

export default AssetRow