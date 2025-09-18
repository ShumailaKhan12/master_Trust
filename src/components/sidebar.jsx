import React, { useState } from "react";
import { Search, Filter, Edit3, X, ListFilter, Pencil, ListPlus } from "lucide-react";
import { MdFilterList } from "react-icons/md";

const Sidebar = ({ isOpen, onClose }) => {


  const stocksData = [
    { symbol: "TATASTEEL", exchange: "NSE", price: 170.99, change: -1.03, changePercent: -0.6 },
    { symbol: "HAPPSTMNDS", exchange: "NSE", price: 575.0, change: 0.3, changePercent: 0.05 },
    { symbol: "RAMCOCEM", exchange: "NSE", price: 1063.7, change: 23.7, changePercent: 2.27 },
    { symbol: "TATATECH", exchange: "NSE", price: 713.7, change: 2.5, changePercent: 0.35 },
    { symbol: "TECHM", exchange: "NSE", price: 1539.1, change: 7.6, changePercent: 0.5 },
    { symbol: "GODREJPROP", exchange: "NSE", price: 2077.9, change: 16.9, changePercent: 0.82 },
    { symbol: "TATAMOTORS", exchange: "NSE", price: 719.45, change: 6.2, changePercent: 0.87 },
    { symbol: "TCS", exchange: "NSE", price: 3169.9, change: 24.2, changePercent: 0.77 },
    { symbol: "TATACHEM", exchange: "NSE", price: 1006.9, change: 24.35, changePercent: 2.48 },
    { symbol: "RELIANCE", exchange: "NSE", price: 1411.1, change: 5.8, changePercent: 0.41 },
    { symbol: "INDHOTEL", exchange: "NSE", price: 784.65, change: 6.0, changePercent: 0.77 },
    { symbol: "INDHOTEL", exchange: "NSE", price: 784.65, change: 6.0, changePercent: 0.77 },
    { symbol: "INDHOTEL", exchange: "NSE", price: 784.65, change: 6.0, changePercent: 0.77 },
    { symbol: "INDHOTEL", exchange: "NSE", price: 784.65, change: 6.0, changePercent: 0.77 },
    { symbol: "RELIANCE", exchange: "NSE", price: 1411.1, change: 5.8, changePercent: 0.41 },
    { symbol: "INDHOTEL", exchange: "NSE", price: 784.65, change: 6.0, changePercent: 0.77 },
    { symbol: "INDHOTEL", exchange: "NSE", price: 784.65, change: 6.0, changePercent: 0.77 },
    { symbol: "INDHOTEL", exchange: "NSE", price: 784.65, change: 6.0, changePercent: 0.77 },
    { symbol: "INDHOTEL", exchange: "NSE", price: 784.65, change: 6.0, changePercent: 0.77 },
  ];

  const [currentPage, setCurrentPage] = useState(1);

  // Just split into 2 pages manually
  const midIndex = Math.ceil(stocksData.length / 2);
  const page1Data = stocksData.slice(0, midIndex);
  const page2Data = stocksData.slice(midIndex);

  const getCurrentPageData = () => {
    return currentPage === 1 ? page1Data : page2Data;
  };

  return (
    <div
      className={`   hidden  fixed lg:block inset-y-0 z-50  ml-80 lg:ml-3 w-72 lg:w-110   mt-18  bg-white border rounded-lg border-gray-200 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
    >
      <div className="h-full flex flex-col">

        {/* Sticky Top Section */}
        <div className="fixed bottom-0 left-0 right-0 lg:static bg-white rounded-t-lg border-t border-gray-200 z-20">


          {/* Pagination (only 1 & 2 fixed) */}
          <div className="px-4 pt-4 border-b border-gray-200">
            <div className="flex items-end justify-between">
              {/* Left Pagination Numbers */}
              <div className="flex space-x-1 ">
                {[1, 2].map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-3 pb-2 text-xl cursor-pointer ${currentPage === page
                      ? "text-blue border-blue font-semibold"
                      : "text-gray-700 font-semibold"
                      }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              {/* Right Button */}
              {/* <div className="flex items-center border border-gray-100 p-2 rounded-lg cursor-pointer mb-1">
                <ListPlus className="w-5 h-5 text-blue-600" />
              </div> */}
            </div>
          </div>

          {/* Search Bar */}
          <div className="p-3 flex align-center space-x-2 w-full">
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={16}
              />
              <input
                type="text"
                placeholder="Search & add"
                className=" pl-10 w-80 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

            </div>

            {/* <div className=" flex space-x-1">

              <div className="flex items-center border border-gray-100 p-2 rounded-lg cursor-pointer ">
                <ListFilter className="w-5 h-5 text-blue-600" />
              </div>

              <div className="flex items-center border border-gray-100 p-2 rounded-lg cursor-pointer">
                <Pencil className="w-5 h-5 text-blue-600" />
              </div>
            </div> */}
          </div>
        </div>

        {/* Scrollable Stock List */}
        <div className="flex-1 overflow-y-auto pb-16">
          <div className="p-4 space-y-2">
            {getCurrentPageData().map((stock, index) => (
              <div
                key={`${stock.symbol}-${index}`}
                className="flex items-center justify-between py-2 border-b border-gray-100"
              >
                <div>
                  <div className="font-medium text-sm text-gray-400">{stock.symbol}</div>
                  <div className="text-xs text-gray-500">{stock.exchange}</div>
                </div>
                <div className="text-right">
                  <div className="font-medium text-sm text-gray-500">{stock.price}</div>
                  <div
                    className={`text-xs ${stock.change >= 0 ? "text-green font-semibold" : "text-red"
                      }`}
                  >
                    {stock.change >= 0 ? "+" : ""}
                    {stock.change} (
                    {stock.changePercent >= 0 ? "+" : ""}
                    {stock.changePercent}%)
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Sidebar;
