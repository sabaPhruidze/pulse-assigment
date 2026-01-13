import { formatCurrency, formatPercent, formatNumber, getChangeColor } from '../../utils/format'

const AssetRow = ({ asset, onClick }) => {
  return (
    <tr
      className="hover:bg-gray-50 cursor-pointer"
      onClick={() => onClick?.(asset)}
      title="Click to view details"
    >
      <td className="py-3 pr-4 font-semibold text-gray-900 whitespace-nowrap">{asset.symbol}</td>
      <td className="py-3 pr-4 text-gray-700 min-w-[220px]">{asset.name}</td>

      <td className="py-3 pr-4 text-gray-900 whitespace-nowrap hidden sm:table-cell">
        {formatCurrency(asset.currentPrice)}
      </td>

      <td className={`py-3 pr-4 font-semibold whitespace-nowrap ${getChangeColor(asset.changePercent)}`}>
        {formatPercent(asset.changePercent)}
      </td>

      <td className="py-3 text-gray-700 whitespace-nowrap hidden md:table-cell">
        {formatNumber(asset.volume)}
      </td>
    </tr>
  )
}

export default AssetRow
