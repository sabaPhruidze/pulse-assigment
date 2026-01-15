import Card from '../ui/Card'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Cell } from 'recharts'
import { useUI } from '../../context/UIContext'

const COLORS = [
  '#2563eb', // blue
  '#16a34a', // green
  '#f59e0b', // amber
  '#ef4444', // red
]

const ChangeBarChart = ({ assets, loading }) => {
  const data = (assets || []).map((a) => ({
    name: a.assetId,
    change: Number(a.changePercent || 0),
  }))
  const { isDark } = useUI()

  return (
    <Card title="📊 Change % by Asset">
      {/* container always exists -> background transition works */}
      <div
        className={[
          'h-64 rounded transition-colors duration-1000 ease-in-out',
          loading ? 'bg-slate-800/15' : 'bg-transparent',
        ].join(' ')}
      >
        {loading ? (
          <div className="h-full animate-pulse rounded bg-slate-800/25" />
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
             <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.25)" />
              <XAxis dataKey="name" tick={{ fill: 'rgba(226, 232, 240, 0.8)' }} axisLine={{ stroke: 'rgba(148, 163, 184, 0.35)' }} tickLine={{ stroke: 'rgba(148, 163, 184, 0.35)' }} />
              <YAxis tick={{ fill: 'rgba(226, 232, 240, 0.8)' }} axisLine={{ stroke: 'rgba(148, 163, 184, 0.35)' }} tickLine={{ stroke: 'rgba(148, 163, 184, 0.35)' }} />
              <Tooltip
                formatter={(v) => `${Number(v).toFixed(2)}%`}
                contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.95)', border: '1px solid rgba(148,163,184,0.25)', borderRadius: 8 }}
                labelStyle={{ color: 'rgba(226,232,240,0.9)' }}
                itemStyle={{ color: 'rgba(226,232,240,0.9)' }}
              />


              <Bar
                dataKey="change"
                isAnimationActive
                animationDuration={1000}
                animationEasing="ease-out"
                radius={[6, 6, 0, 0]}
              >
                {data.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>
    </Card>
  )
}

export default ChangeBarChart
