import React, { useState } from "react";
import { ChevronDown, TrendingUp } from "lucide-react";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import { NavLink } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const Market = () => {
  const [selectedIndex, setSelectedIndex] = useState("Nifty 50");
  const [selectedPeriod, setSelectedPeriod] = useState("1 Day");
  const [activeTab, setActiveTab] = useState("Top gainers & losers");

  // Mock data for top gainers
  const topGainers = [
    { symbol: "TATACONSUM", price: 1127.4, change: 35.3, changePercent: 3.23 },
    { symbol: "TRENT", price: 5222.0, change: 74.9, changePercent: 1.45 },
    { symbol: "SBIN", price: 842.7, change: 11.15, changePercent: 1.34 },
    { symbol: "MARUTI", price: 15744.0, change: 171.0, changePercent: 1.1 },
    { symbol: "TATAMOTORS", price: 719.15, change: 5.9, changePercent: 0.83 },
    { symbol: "BEL", price: 411.5, change: 8.6, changePercent: 2.13 },
    { symbol: "KOTAKBANK", price: 2049.3, change: 27.6, changePercent: 1.37 },
    { symbol: "HEROMOTOCO", price: 5379.0, change: 63.0, changePercent: 1.19 },
    { symbol: "COALINDIA", price: 399.0, change: 3.2, changePercent: 0.81 },
    { symbol: "TCS", price: 3171.0, change: 25.3, changePercent: 0.8 },
    { symbol: "TATACONSUM", price: 1127.4, change: 35.3, changePercent: 3.23 },
    { symbol: "TRENT", price: 5222.0, change: 74.9, changePercent: 1.45 },
    { symbol: "SBIN", price: 842.7, change: 11.15, changePercent: 1.34 },
    { symbol: "MARUTI", price: 15744.0, change: 171.0, changePercent: 1.1 },
    { symbol: "TATAMOTORS", price: 719.15, change: 5.9, changePercent: 0.83 },
    { symbol: "BEL", price: 411.5, change: 8.6, changePercent: 2.13 },
    { symbol: "KOTAKBANK", price: 2049.3, change: 27.6, changePercent: 1.37 },
    { symbol: "HEROMOTOCO", price: 5379.0, change: 63.0, changePercent: 1.19 },
    { symbol: "COALINDIA", price: 399.0, change: 3.2, changePercent: 0.81 },
    { symbol: "TCS", price: 3171.0, change: 25.3, changePercent: 0.8 },
  ];

  // Mock data for top losers
  const topLosers = [
    { symbol: "HDFCLIFE", price: 767.85, change: -6.5, changePercent: -0.84 },
    { symbol: "TATASTEEL", price: 170.99, change: -1.03, changePercent: -0.6 },
    {
      symbol: "BAJAJFINSV",
      price: 2069.0,
      change: -11.3,
      changePercent: -0.54,
    },
    { symbol: "POWERGRID", price: 287.05, change: -1.3, changePercent: -0.45 },
    { symbol: "ETERNAL", price: 326.05, change: -1.25, changePercent: -0.38 },
    { symbol: "TITAN", price: 3530.8, change: -26.0, changePercent: -0.73 },
    { symbol: "NESTLEIND", price: 1197.3, change: -6.9, changePercent: -0.56 },
    { symbol: "ITC", price: 410.95, change: -2.15, changePercent: -0.52 },
    { symbol: "SBILIFE", price: 1810.6, change: -8.2, changePercent: -0.45 },
    { symbol: "HINDALCO", price: 753.45, change: -2.5, changePercent: -0.33 },
    { symbol: "HDFCLIFE", price: 767.85, change: -6.5, changePercent: -0.84 },
    { symbol: "TATASTEEL", price: 170.99, change: -1.03, changePercent: -0.6 },
    {
      symbol: "BAJAJFINSV",
      price: 2069.0,
      change: -11.3,
      changePercent: -0.54,
    },
    { symbol: "POWERGRID", price: 287.05, change: -1.3, changePercent: -0.45 },
    { symbol: "ETERNAL", price: 326.05, change: -1.25, changePercent: -0.38 },
    { symbol: "TITAN", price: 3530.8, change: -26.0, changePercent: -0.73 },
    { symbol: "NESTLEIND", price: 1197.3, change: -6.9, changePercent: -0.56 },
    { symbol: "ITC", price: 410.95, change: -2.15, changePercent: -0.52 },
    { symbol: "SBILIFE", price: 1810.6, change: -8.2, changePercent: -0.45 },
    { symbol: "HINDALCO", price: 753.45, change: -2.5, changePercent: -0.33 },
  ];

  return (
    <>
      <Navbar />
      <div className="flex bg-gray-100 ">
        <Sidebar />
        <div className="space-y-6 w-full mt-18 m-0 lg:ml-120">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 mt-1">
            {/* Header */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <NavLink to="/" className="mr-4">
                    <BsArrowLeft className="text-2xl text-blue" />
                  </NavLink>
                  <h2 className="text-xl font-bold text-blue">
                    Market movers
                  </h2>
                </div>
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
                    onClick={() => setActiveTab("Top gainers & losers")}
                    className={`py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === "Top gainers & losers"
                        ? "border-blue text-blue"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    Top gainers & losers
                  </button>
                  <button
                    onClick={() => setActiveTab("52 weeks high & low")}
                    className={`py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === "52 weeks high & low"
                        ? "border-blue text-blue"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
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
                <div className=" ">
                  <div className="flex items-center space-x-2 mb-4 ">
                    <h3 className="text-lg font-medium text-gray-900">
                      Top gainers
                    </h3>
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                      {topGainers.length}
                    </span>
                  </div>
                  <div className="space-y-3 grid  grid-cols-1 lg:grid-cols-2">
                    {topGainers.map((stock, index) => (
                      <div
                        key={stock.symbol}
                        className="flex items-center justify-between py-2  hover:bg-gray-50    px-2"
                      >
                        <div className="flex-1">
                          <div className="font-medium text-gray-900 text-sm">
                            {stock.symbol}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-gray-900 text-sm">
                            {stock.price}
                          </div>
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
                    <h3 className="text-lg font-medium text-gray-900">
                      Top losers
                    </h3>
                    <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded-full">
                      {topLosers.length}
                    </span>
                  </div>
                  <div className="space-y-3 grid  grid-cols-1 lg:grid-cols-2">
                    {topLosers.map((stock, index) => (
                      <div
                        key={stock.symbol}
                        className="flex items-center justify-between py-2 hover:bg-gray-50 rounded-lg px-2"
                      >
                        <div className="flex-1">
                          <div className="font-medium text-gray-900 text-sm">
                            {stock.symbol}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-gray-900 text-sm">
                            {stock.price}
                          </div>
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
              {/* <div className="mt-6 pt-4 border-t border-gray-100">
            <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 font-medium text-sm">
              <span>View all</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div> */}
            </div>

            {/* Refer and Earn Section */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Market;
