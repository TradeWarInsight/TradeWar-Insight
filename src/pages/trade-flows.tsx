import React from 'react';
import TradeFlowChart from '../components/TradeFlowChart';

const sampleData = [
  { date: '2023-01', value: 1200 },
  { date: '2023-02', value: 1350 },
  { date: '2023-03', value: 1500 },
  { date: '2023-04', value: 1420 },
  { date: '2023-05', value: 1650 },
  { date: '2023-06', value: 1800 },
  { date: '2023-07', value: 1750 },
  { date: '2023-08', value: 1900 },
  { date: '2023-09', value: 2100 },
  { date: '2023-10', value: 2000 },
  { date: '2023-11', value: 2200 },
  { date: '2023-12', value: 2400 },
];

const TradeFlowsPage: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Trade Flow Analysis</h1>
      <div className="grid gap-8">
        <TradeFlowChart
          data={sampleData}
          title="Monthly Trade Volume"
          yAxisLabel="Trade Volume (Million USD)"
        />
      </div>
    </div>
  );
};

export default TradeFlowsPage; 