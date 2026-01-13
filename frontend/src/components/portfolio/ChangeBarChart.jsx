import Card from '../ui/Card'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts'

const ChangeBarChart = ({ assets, loading }) => {
  const data = (assets || []).map((a) => ({
    name: a.assetId,
    change: Number(a.changePercent || 0),
  }))

  return (
    <Card title="📊 Change % by Asset">
      {loading ? (
        <div className="animate-pulse h-64 bg-gray-100 rounded" />
      ) : (
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="change" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </Card>
  )
}

export default ChangeBarChart