import React, { useState } from 'react';
import { ChevronDown, TrendingUp, Gift, ChevronRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const MarketMovers = () => {
  const [selectedIndex, setSelectedIndex] = useState('Nifty 50');
  const [selectedPeriod, setSelectedPeriod] = useState('1 Day');
  const [activeTab, setActiveTab] = useState('Top gainers & losers');

  // Mock data for top gainers
  const topGainers = [
    { symbol: 'TATACONSUM', price: 1127.40, change: 35.30, changePercent: 3.23 },
    { symbol: 'TRENT', price: 5222.00, change: 74.90, changePercent: 1.45 },
    { symbol: 'SBIN', price: 842.70, change: 11.15, changePercent: 1.34 },
    { symbol: 'MARUTI', price: 15744.00, change: 171.00, changePercent: 1.10 },
    { symbol: 'TATAMOTORS', price: 719.15, change: 5.90, changePercent: 0.83 },
    { symbol: 'BEL', price: 411.50, change: 8.60, changePercent: 2.13 },
    { symbol: 'KOTAKBANK', price: 2049.30, change: 27.60, changePercent: 1.37 },
    { symbol: 'HEROMOTOCO', price: 5379.00, change: 63.00, changePercent: 1.19 },
    { symbol: 'COALINDIA', price: 399.00, change: 3.20, changePercent: 0.81 },
    { symbol: 'TCS', price: 3171.00, change: 25.30, changePercent: 0.80 },
    
    
  ];

  // Mock data for top losers
  const topLosers = [
    { symbol: 'HDFCLIFE', price: 767.85, change: -6.50, changePercent: -0.84 },
    { symbol: 'TATASTEEL', price: 170.99, change: -1.03, changePercent: -0.60 },
    { symbol: 'BAJAJFINSV', price: 2069.00, change: -11.30, changePercent: -0.54 },
    { symbol: 'POWERGRID', price: 287.05, change: -1.30, changePercent: -0.45 },
    { symbol: 'ETERNAL', price: 326.05, change: -1.25, changePercent: -0.38 },
    { symbol: 'TITAN', price: 3530.80, change: -26.00, changePercent: -0.73 },
    { symbol: 'NESTLEIND', price: 1197.30, change: -6.90, changePercent: -0.56 },
    { symbol: 'ITC', price: 410.95, change: -2.15, changePercent: -0.52 },
    { symbol: 'SBILIFE', price: 1810.60, change: -8.20, changePercent: -0.45 },
    { symbol: 'HINDALCO', price: 753.45, change: -2.50, changePercent: -0.33 }
  ];

  return (
    <>
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 mt-4">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">Market movers</h2>
          <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-red-500" />
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <div className="px-6">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('Top gainers & losers')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'Top gainers & losers'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
            >
              Top gainers & losers
            </button>
            <button
              onClick={() => setActiveTab('52 weeks high & low')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === '52 weeks high & low'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
            >
              52 weeks high & low
            </button>
          </nav>
        </div>
      </div>

      {/* Filters */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center justify-end space-x-4">
          {/* Index Selector */}
          <div className="relative">
            <button className="flex items-center space-x-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100">
              <span>{selectedIndex}</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          {/* Period Selector */}
          <div className="relative">
            <button className="flex items-center space-x-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100">
              <span>{selectedPeriod}</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-1 xl:grid-cols-2 gap-8 ">
          {/* Top Gainers */}
          <div className=' '>
            <div className="flex items-center space-x-2 mb-4 ">
              <h3 className="text-lg font-medium text-gray-900">Top gainers</h3>
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                {topGainers.length}
              </span>
            </div>
            <div className="space-y-3 grid  grid-cols-1 lg:grid-cols-2">
              {topGainers.map((stock, index) => (
                <div key={stock.symbol} className="flex items-center justify-between py-2  hover:bg-gray-50    px-2">
                  <div className="flex-1">
                    <div className="font-medium text-gray-900 text-sm">{stock.symbol}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-gray-900 text-sm">{stock.price}</div>
                    <div className="text-green-600 text-xs font-medium">
                      +{stock.change} (+{stock.changePercent}%)
                    </div>
                  </div>
                </div>
              ))}
              
            </div>
          </div>

          {/* Top Losers */}
          <div>
            <div className="flex items-center space-x-2 mb-4 ">
              <h3 className="text-lg font-medium text-gray-900">Top losers</h3>
              <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded-full">
                {topLosers.length}
              </span>
            </div>
            <div className="space-y-3 grid  grid-cols-1 lg:grid-cols-2">
              {topLosers.map((stock, index) => (
                <div key={stock.symbol} className="flex items-center justify-between py-2 hover:bg-gray-50 rounded-lg px-2">
                  <div className="flex-1">
                    <div className="font-medium text-gray-900 text-sm">{stock.symbol}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-gray-900 text-sm">{stock.price}</div>
                    <div className="text-red-600 text-xs font-medium">
                      {stock.change} ({stock.changePercent}%)
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="mt-6 pt-4 border-t border-gray-100">
          <NavLink to="/market" className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 font-medium text-sm">
            <span>View all</span>
            <ChevronRight className="w-4 h-4" />
          </NavLink>
        </div>
      </div>

      {/* Refer and Earn Section */}
    
    </div>


{/* Refer */}
      <div className="p-6 border-t border-gray-100 mt-4 bg-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-lg flex items-center justify-center">
              <Gift className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Refer and earn</h4>
              <p className="text-gray-600 text-sm">Invite friends, earn rewards</p>
            </div>
          </div>
          <button className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center space-x-2 transition-colors">
            <span>Refer now</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
      </>
  );
};

export default MarketMovers;