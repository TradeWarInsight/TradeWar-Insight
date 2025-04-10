import React from 'react';
import { type NextPage } from 'next';
import Head from 'next/head';
import { useSession } from 'next-auth/react';
import Layout from '@/components/Layout';

const Dashboard: NextPage = () => {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </Layout>
    );
  }

  if (!session) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-2xl font-bold text-white mb-4">Access Denied</h1>
          <p className="text-gray-400">Please sign in to view this page.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Head>
        <title>Dashboard - TradeWar Insight</title>
        <meta name="description" content="View your trade war analysis dashboard" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-white mb-8">Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Overview Card */}
          <div className="card">
            <h3 className="text-xl font-semibold text-white mb-4">Overview</h3>
            <div className="space-y-2">
              <p className="text-gray-400">Active Trade Conflicts: <span className="text-white">5</span></p>
              <p className="text-gray-400">Monitored Countries: <span className="text-white">12</span></p>
              <p className="text-gray-400">Risk Level: <span className="text-yellow-500">Medium</span></p>
            </div>
          </div>

          {/* Impact Analysis Card */}
          <div className="card">
            <h3 className="text-xl font-semibold text-white mb-4">Impact Analysis</h3>
            <div className="space-y-2">
              <p className="text-gray-400">GDP Impact: <span className="text-red-500">-2.3%</span></p>
              <p className="text-gray-400">Trade Volume: <span className="text-green-500">+1.7%</span></p>
              <p className="text-gray-400">Market Sentiment: <span className="text-yellow-500">Neutral</span></p>
            </div>
          </div>

          {/* Alerts Card */}
          <div className="card">
            <h3 className="text-xl font-semibold text-white mb-4">Recent Alerts</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                <p className="text-gray-400">New tariff announcement</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                <p className="text-gray-400">Policy change detected</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <p className="text-gray-400">Trade agreement update</p>
              </div>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="text-xl font-semibold text-white mb-4">Trade Flow Trends</h3>
            <div className="h-64 bg-gray-700 rounded-lg">
              {/* D3.js chart will be rendered here */}
            </div>
          </div>

          <div className="card">
            <h3 className="text-xl font-semibold text-white mb-4">Economic Indicators</h3>
            <div className="h-64 bg-gray-700 rounded-lg">
              {/* D3.js chart will be rendered here */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard; 