import { useMemo, useState } from 'react'
import Card from '../ui/Card'
import { ResponsiveContainer, PieChart, Pie, Tooltip, Cell } from 'recharts'
import { ALLOCATION_COLORS, renderActiveAllocationSlice } from './allocationPie.helpers'

const AllocationPieChart = ({ allocation, loading }) => {
  const [activeIndex, setActiveIndex] = useState(null)

  const data = useMemo(() => (
    (allocation || []).map((x) => ({
      name: x.assetId,
      value: Number((x.percentage || 0).toFixed(2)),
    }))
  ), [allocation])

  return (
    <Card title="🧩 Allocation">
      {loading ? (
        <div className="animate-pulse h-64 bg-gray-100 rounded" />
      ) : (
        <div className="h-64" onMouseDown={(e) => e.preventDefault()}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                outerRadius={90}
                activeIndex={activeIndex}
                activeShape={renderActiveAllocationSlice}
                onMouseEnter={(_, i) => setActiveIndex(i)}
                onMouseLeave={() => setActiveIndex(null)}
                stroke="transparent"
                isAnimationActive
                animationDuration={1000}
                animationEasing="ease-out"
              >
                {data.map((_, i) => (
                  <Cell key={i} fill={ALLOCATION_COLORS[i % ALLOCATION_COLORS.length]} />
                ))}
              </Pie>

              <Tooltip formatter={(v) => `${v}%`} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      )}
    </Card>
  )
}

export default AllocationPieChart