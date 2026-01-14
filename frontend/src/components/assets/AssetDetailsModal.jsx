import { useEffect } from 'react'
import { formatCurrency, formatNumber, formatPercent, getChangeColor } from '../../utils/format'
import Badge from '../ui/Badge'

const DetailItem = ({ label, children }) => (
  <div className="rounded-lg border border-gray-100 p-4">
    <div className="text-sm text-gray-500">{label}</div>
    <div className="mt-1">{children}</div>
  </div>
)

const AssetDetailsModal = ({ asset, onClose }) => {
  useEffect(() => {
    const onKeyDown = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onClose])

  if (!asset) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-2 sm:p-4" onMouseDown={onClose}>
      <div className="w-full max-w-lg rounded-lg bg-white shadow-lg border border-gray-100 p-4 sm:p-6 max-h-[85vh] overflow-y-auto" onMouseDown={(e) => e.stopPropagation()}>
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-sm text-gray-500">Asset Details</div>
            <div className="text-2xl font-bold text-gray-900 mt-1">
              {asset.symbol} <span className="text-gray-500 font-medium">— {asset.name}</span>
            </div>
          </div>

          <button type="button" onClick={onClose} className="rounded-lg border border-gray-200 px-3 py-1.5 text-sm hover:bg-gray-50">
            Close
          </button>
        </div>

        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <DetailItem label="Type"><Badge>{asset.assetType}</Badge></DetailItem>
          <DetailItem label="Price"><span className="text-lg font-semibold text-gray-900">{formatCurrency(asset.currentPrice)}</span></DetailItem>
          <DetailItem label="Change"><span className={`text-lg font-semibold ${getChangeColor(asset.changePercent)}`}>{formatPercent(asset.changePercent)}</span></DetailItem>
          <DetailItem label="Volume"><span className="text-lg font-semibold text-gray-900">{formatNumber(asset.volume)}</span></DetailItem>
        </div>

        <div className="mt-4 text-xs text-gray-500">Tip: Press <span className="font-semibold">Esc</span> to close.</div>
      </div>
    </div>
  )
}

export default AssetDetailsModal