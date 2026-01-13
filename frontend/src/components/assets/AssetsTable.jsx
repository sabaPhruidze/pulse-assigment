import Card from '../ui/Card'
import SortHeader from './SortHeader'
import AssetRow from './AssetRow'

const Skeleton = () => (
  <div className="animate-pulse space-y-3">
    {Array.from({ length: 8 }).map((_, i) => (
      <div key={i} className="h-10 bg-gray-100 rounded" />
    ))}
  </div>
)

const AssetsTable = ({ assets, loading, error, sortField, sortOrder, onSort, onRowClick }) => {
  if (error) return <ErrorState message={error} />

  return (
    <Card title="Assets">
      {loading ? (
        <Skeleton />
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left text-gray-500 border-b border-gray-200">
              <tr>
                <th className="py-3 pr-4">
                  <SortHeader label="Symbol" active={sortField === 'symbol'} order={sortOrder} onClick={() => onSort('symbol')} />
                </th>
                <th className="py-3 pr-4">Name</th>
                <th className="py-3 pr-4 hidden sm:table-cell">
                  <SortHeader label="Price" active={sortField === 'currentPrice'} order={sortOrder} onClick={() => onSort('currentPrice')} />
                </th>
                <th className="py-3 pr-4">
                  <SortHeader label="Change %" active={sortField === 'changePercent'} order={sortOrder} onClick={() => onSort('changePercent')} />
                </th>
                <th className="py-3 hidden md:table-cell">
                  <SortHeader label="Volume" active={sortField === 'volume'} order={sortOrder} onClick={() => onSort('volume')} />
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {assets.map((a) => (
                <AssetRow key={`${a.assetType}-${a.id}`} asset={a} onClick={onRowClick} />
              ))}
            </tbody>
          </table>

          {!assets.length && <div className="text-center text-gray-500 py-10">No assets found.</div>}
          <div className="mt-3 text-xs text-gray-500">Mobile hides some columns. Tap a row for details.</div>
        </div>
      )}
    </Card>
  )
}

export default AssetsTable
