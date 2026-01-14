import { useMemo, useState } from 'react'
import { useAssetsData } from '../hooks/useAssetsData'
import AssetsToolbar from '../components/assets/AssetsToolbar'
import AssetsTable from '../components/assets/AssetsTable'
import AssetDetailsModal from '../components/assets/AssetDetailsModal'

const FILTERS = [
  { value: 'all', label: 'All' },
  { value: 'stock', label: 'Stocks Only' },
  { value: 'crypto', label: 'Crypto Only' },
]

const Assets = () => {
  const { assets, loading, error } = useAssetsData()

  const [filter, setFilter] = useState('all')
  const [search, setSearch] = useState('')
  const [sortField, setSortField] = useState('symbol')
  const [sortOrder, setSortOrder] = useState('asc')
  const [selected, setSelected] = useState(null)

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    return assets
      .filter((a) => (filter === 'all' ? true : a.assetType === filter))
      .filter((a) => (!q ? true : `${a.symbol} ${a.name}`.toLowerCase().includes(q)))
  }, [assets, filter, search])

  const sorted = useMemo(() => {
    const list = [...filtered]
    list.sort((a, b) => {
      const av = a?.[sortField], bv = b?.[sortField]
      const as = typeof av === 'string' ? av.toUpperCase() : Number(av)
      const bs = typeof bv === 'string' ? bv.toUpperCase() : Number(bv)
      if (as < bs) return sortOrder === 'asc' ? -1 : 1
      if (as > bs) return sortOrder === 'asc' ? 1 : -1
      return 0
    })
    return list
  }, [filtered, sortField, sortOrder])

  const onSort = (field) => {
    if (sortField === field) return setSortOrder((p) => (p === 'asc' ? 'desc' : 'asc'))
    setSortField(field)
    setSortOrder(field === 'symbol' ? 'asc' : 'desc')
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-slate-100">Assets</h1>
      <p className="text-gray-600 dark:text-slate-400 mb-6">Unified view of stocks and cryptocurrencies.</p>

      <AssetsToolbar
        filters={FILTERS}
        activeFilter={filter}
        onFilter={setFilter}
        search={search}
        onSearch={setSearch}
      />

      <AssetsTable
        assets={sorted}
        loading={loading}
        error={error}
        sortField={sortField}
        sortOrder={sortOrder}
        onSort={onSort}
        onRowClick={setSelected}
      />

      <AssetDetailsModal asset={selected} onClose={() => setSelected(null)} />
    </div>
  )
}

export default Assets