import React from "react";
import Data from '../Data/home.json'
import stocks from '../data/stocksData.json';
const MobileSidebar = () => {

    // const { stocksData } = Data

const { stocksData } = stocks;

    return (
        <div className="w-full">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 pt-3">
                Market Indices
            </h3>

            {/* Horizontal Scrollable Container */}
            <div className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth">
                {stocksData.map((stock, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 w-34 p-4 border border-gray-200 bg-white rounded-lg hover:shadow-md transition-shadow cursor-pointer"
                    >
                        <h4 className="font-medium text-gray-900 mb-2">{stock.symbol}</h4>

                        <p className="text-xl font-semibold text-gray-900">
                            {stock.price}
                        </p>
                        <p
                            className={`text-sm font-medium ${stock.change >= 0 ? "text-green-600" : "text-red-600"
                                }`}
                        >
                            {stock.change >= 0 ? "+" : ""}
                            {stock.change} ({stock.change >= 0 ? "+" : ""}
                            {stock.changePercent}%)
                        </p>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default MobileSidebar;
