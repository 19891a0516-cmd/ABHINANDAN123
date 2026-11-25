'use client';

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const trajectory = [
  { day: '01', score: 18 },
  { day: '03', score: 21 },
  { day: '05', score: 24 },
  { day: '07', score: 23 },
  { day: '09', score: 31 },
  { day: '11', score: 38 },
  { day: '13', score: 42 },
  { day: '15', score: 51 },
  { day: '17', score: 55 },
  { day: '19', score: 64 },
];

const distribution = [
  { stage: 'Stable', share: 62, color: '#887969' },
  { stage: 'Drift', share: 19, color: '#A98258' },
  { stage: 'Squeeze', share: 11, color: '#B38A5C' },
  { stage: 'Stress', share: 6, color: '#8D6846' },
  { stage: 'Distress', share: 2, color: '#66594D' },
];

const axisStyle = { fill: '#887969', fontSize: 11 };

export default function DemoCharts() {
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <figure className="min-w-0">
        <figcaption className="mb-3 text-sm font-semibold">Sample risk trajectory</figcaption>
        <div className="h-[270px]" role="img" aria-label="Demonstration chart showing a synthetic risk score rising over ten observations">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart accessibilityLayer data={trajectory} margin={{ top: 10, right: 12, bottom: 4, left: -18 }}>
              <CartesianGrid stroke="#D9CBB8" strokeDasharray="3 3" />
              <XAxis dataKey="day" tick={axisStyle} tickLine={false} axisLine={false} />
              <YAxis domain={[0, 100]} tick={axisStyle} tickLine={false} axisLine={false} />
              <Tooltip
                formatter={(value) => [`${value} / 100`, 'Illustrative score']}
                labelFormatter={(label) => `Observation ${label}`}
                contentStyle={{ borderRadius: 12, borderColor: '#D9CBB8', backgroundColor: '#FFFDF8', fontSize: 12 }}
              />
              <Line
                type="monotone"
                dataKey="score"
                stroke="#A98258"
                strokeWidth={3}
                dot={{ r: 3, fill: '#A98258' }}
                activeDot={{ r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <p className="mt-2 text-xs text-gray">Synthetic example · score scale is illustrative.</p>
      </figure>

      <figure className="min-w-0">
        <figcaption className="mb-3 text-sm font-semibold">Sample stage distribution</figcaption>
        <div className="h-[270px]" role="img" aria-label="Demonstration chart showing synthetic distribution percentages across five risk stages">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart accessibilityLayer data={distribution} layout="vertical" margin={{ top: 8, right: 14, bottom: 4, left: 4 }}>
              <CartesianGrid stroke="#D9CBB8" strokeDasharray="3 3" horizontal={false} />
              <XAxis type="number" domain={[0, 70]} tick={axisStyle} tickLine={false} axisLine={false} unit="%" />
              <YAxis type="category" dataKey="stage" width={72} tick={axisStyle} tickLine={false} axisLine={false} />
              <Tooltip
                formatter={(value) => [`${value}%`, 'Illustrative share']}
                contentStyle={{ borderRadius: 12, borderColor: '#D9CBB8', backgroundColor: '#FFFDF8', fontSize: 12 }}
              />
              <Bar dataKey="share" name="Illustrative share" radius={[0, 6, 6, 0]}>
                {distribution.map((item) => <Cell key={item.stage} fill={item.color} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="mt-2 text-xs text-gray">Synthetic example · not a customer or portfolio measurement.</p>
      </figure>
    </div>
  );
}
