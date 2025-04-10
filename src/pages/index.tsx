import React from 'react';
import { type NextPage } from 'next';
import Head from 'next/head';
import { useSession } from 'next-auth/react';

const Home: NextPage = () => {
  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>TradeWar Insight - Trade War Impact Analysis Platform</title>
        <meta name="description" content="Comprehensive platform for analyzing trade war impacts and trends" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-8">
              TradeWar Insight
            </h1>
            <p className="text-xl text-gray-300 mb-12">
              Analyze trade war impacts and trends with real-time data and advanced analytics
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature Cards */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-white mb-4">Real-time Analysis</h3>
                <p className="text-gray-400">Monitor and analyze trade war impacts as they happen</p>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-white mb-4">Data Visualization</h3>
                <p className="text-gray-400">Interactive charts and graphs for better understanding</p>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-white mb-4">Trend Prediction</h3>
                <p className="text-gray-400">AI-powered predictions of future trade trends</p>
              </div>
            </div>

            <div className="mt-12">
              {session ? (
                <a
                  href="/dashboard"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
                >
                  Go to Dashboard
                </a>
              ) : (
                <a
                  href="/api/auth/signin"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
                >
                  Get Started
                </a>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home; 