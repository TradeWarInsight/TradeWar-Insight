import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

interface TradeFlowChartProps {
  data: Array<{
    date: string;
    value: number;
  }>;
  title: string;
  yAxisLabel: string;
}

const TradeFlowChart: React.FC<TradeFlowChartProps> = ({ data, title, yAxisLabel }) => {
  return (
    <div className="w-full h-[400px] p-4">
      <h2 className="text-xl font-semibold mb-4 text-center">{title}</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="date"
            tick={{ fontSize: 12 }}
            tickFormatter={(value) => new Date(value).toLocaleDateString()}
          />
          <YAxis
            label={{
              value: yAxisLabel,
              angle: -90,
              position: 'insideLeft',
              style: { textAnchor: 'middle' },
            }}
            tick={{ fontSize: 12 }}
          />
          <Tooltip
            formatter={(value: number) => [`${value.toLocaleString()}`, yAxisLabel]}
            labelFormatter={(label) => new Date(label).toLocaleDateString()}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#2563eb"
            strokeWidth={2}
            dot={{ fill: '#2563eb', r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TradeFlowChart; 