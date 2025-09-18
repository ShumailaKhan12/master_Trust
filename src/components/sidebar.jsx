import React, { useState } from "react";
import { Search, Filter, Edit3, X, ListFilter, Pencil, ListPlus } from "lucide-react";
import { MdFilterList } from "react-icons/md";
import stocks from '../data/stocksData.json';

const Sidebar = ({ isOpen, onClose }) => {


const { stocksData } = stocks;
 
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
      className={`   hidden  fixed lg:block inset-y-0   ml-80 lg:ml-3 w-72 lg:w-110   mt-18 bg-white border rounded-lg border-gray-200 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"
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
                    className={`px-2 text-sm pb-2 cursor-pointer ${currentPage === page
                      ? "border-b-2 border-blue-600 text-xl text-blue-600 font-semibold"
                      : "text-gray-700 font-semibold text-xl"
                      }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              {/* Right Button */}
              <div className="flex items-center border border-gray-100 p-2 rounded-lg cursor-pointer mb-1">
                <ListPlus className="w-5 h-5 text-blue-600" />
              </div>
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

            <div className=" flex space-x-1">

              <div className="flex items-center border border-gray-100 p-2 rounded-lg cursor-pointer ">
                <ListFilter className="w-5 h-5 text-blue-600" />
              </div>

              <div className="flex items-center border border-gray-100 p-2 rounded-lg cursor-pointer">
                <Pencil className="w-5 h-5 text-blue-600" />
              </div>
            </div>
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
                    className={`text-xs ${stock.change >= 0 ? "text-green-600 font-semibold" : "text-red-600"
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
