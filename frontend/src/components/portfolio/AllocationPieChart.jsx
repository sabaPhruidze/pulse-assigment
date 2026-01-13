import Card from '../ui/Card'
import { ResponsiveContainer, PieChart, Pie, Tooltip } from 'recharts'

const AllocationPieChart = ({ allocation, loading }) => {
  const data = (allocation || []).map((x) => ({
    name: x.assetId,
    value: Number((x.percentage || 0).toFixed(2)),
  }))

  return (
    <Card title="🧩 Allocation">
      {loading ? (
        <div className="animate-pulse h-64 bg-gray-100 rounded" />
      ) : (
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={data} dataKey="value" nameKey="name" outerRadius={90} />
              <Tooltip formatter={(v) => `${v}%`} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      )}
    </Card>
  )
}

export default AllocationPieChart