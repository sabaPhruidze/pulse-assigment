import Card from '../ui/Card'
import { formatCurrency, formatPercent, getChangeColor } from '../../utils/format'

const PortfolioHoldingsTable = ({ assets, loading }) => {
  return (
    <Card title="📋 Holdings">
      {loading ? (
        <div className="animate-pulse space-y-3">
          {Array.from({ length: 6 }).map((_, i) => <div key={i} className="h-10 bg-gray-100 dark:bg-slate-800/60 rounded" />)}
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
           <thead className="text-left text-gray-500 dark:text-slate-400 border-b border-gray-200 dark:border-slate-800">
              <tr>
                <th className="py-3 pr-4">Asset</th>
                <th className="py-3 pr-4">Qty</th>
                <th className="py-3 pr-4 hidden sm:table-cell">Avg Buy</th>
                <th className="py-3 pr-4">Price</th>
                <th className="py-3 pr-4 hidden md:table-cell">Value</th>
                <th className="py-3">Change %</th>
              </tr>
            </thead>

           <tbody className="divide-y divide-gray-100 dark:divide-slate-800">
              {(assets || []).map((a) => (
               <tr key={a.assetId} className="hover:bg-gray-50 dark:hover:bg-slate-800/60">
                  <td className="py-3 pr-4 font-semibold text-gray-900 dark:text-slate-100">{a.assetId}</td>
                  <td className="py-3 pr-4 text-gray-700 dark:text-slate-200">{a.quantity}</td>
                  <td className="py-3 pr-4 text-gray-700 dark:text-slate-200 hidden sm:table-cell">{formatCurrency(a.avgBuyPrice)}</td>
                  <td className="py-3 pr-4 text-gray-900 dark:text-slate-100">{formatCurrency(a.currentPrice)}</td>
                  <td className="py-3 pr-4 text-gray-700 dark:text-slate-200 hidden md:table-cell">{formatCurrency(a.value)}</td>
                  <td className={`py-3 font-semibold ${getChangeColor(a.changePercent)}`}>
                    {formatPercent(a.changePercent)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {!assets?.length && <div className="py-8 text-center text-gray-500 dark:text-slate-400">No holdings.</div>}
        </div>
      )}
    </Card>
  )
}

export default PortfolioHoldingsTable