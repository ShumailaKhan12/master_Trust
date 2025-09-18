
import Sidebar from '../../components/sidebar';
import React, { useState } from 'react';
import MarketMovers from '../../components/MarketMovers';
import Navbar from '../../components/navbar';

//Import Images
import Bag from "../../assets/Images/empty-bag.png";
const Home = () => {

    const [activeTab, setActiveTab] = useState('Stocks');

    const mostBoughtData = [
        { symbol: 'WAAREEENER', price: 3592.10, change: 13.10, changePercent: 0.37 },
        { symbol: 'BHARTIARTL', price: 1947.90, change: 8.40, changePercent: 0.43 },
        { symbol: 'INFY', price: 1523.70, change: 12.40, changePercent: 0.82 },
        { symbol: 'HAL', price: 4904.20, change: 65.00, changePercent: 1.34 }
    ];

    const mostBoughtStocks = [
        { name: 'WAAREEENR', price: 3592.10, change: +13.10, changePercent: +0.37 },
        { name: 'BHARTIARTL', price: 1947.90, change: +8.40, changePercent: +0.43 },
        { name: 'INFY', price: 1523.70, change: +12.40, changePercent: +0.82 },
        { name: 'HAL', price: 4904.20, change: +65.00, changePercent: +1.34 }
    ];

    const payLaterStocks = [
        { name: 'TORNTPOWER', price: 1263.20, change: +1.30, changePercent: +0.10, buyOption: 'BUY 4X' },
        { name: 'PYRINOX', price: 1133.40, change: -12.70, changePercent: -1.11, buyOption: 'BUY 3X' },
        { name: 'GMRAIRPORT', price: 91.71, change: -1.13, changePercent: -1.22, buyOption: 'BUY 3X' }
    ];

    const investmentProducts = [
        { name: 'Mutual funds', icon: '💰', badge: 'LIVE NOW', color: 'bg-green-100' },
        { name: 'IPO', icon: '📈', badge: 'LIVE', color: 'bg-blue-100' },
        { name: 'Stockcase', icon: '🧳', color: 'bg-purple-100' },
        { name: 'SipIt', icon: '💧', badge: 'NEW', color: 'bg-orange-100' }
    ];

    const investingTools = [
        { name: 'Screeners', icon: '🔍' },
        { name: 'Results', icon: '📊' },
        { name: 'Superstar investors', icon: '⭐' },
        { name: 'Trade from charts', icon: '📈', badge: 'NEW' }
    ];

    const researchTools = [
        { name: 'Investment ideas', icon: '💡' },
        { name: 'Trading calls', icon: '📞' }
    ];

    const marketUpdates = [
        { name: 'Live news', icon: '📡' }
    ];
    return (
        <div>
            <Navbar />
            <div className="flex bg-gray-100 ">
                <Sidebar />
                <div className="p-4 space-y-6 pt-16 w-full my-2  m-0 lg:ml-110">
                    {/* Tabs */}
                    <div className=" rounded-lg">
                        <div className="flex shadow-md bg-white rounded-tl-lg rounded-tr-lg">
                            {['Stocks', 'F&O', 'Mutual funds'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-6 py-3 text-sm font-medium ${activeTab === tab
                                        ? 'text-blue border-blue'
                                        : 'text-gray-600 hover:text-gray-900'
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        <div className="p-6 shadow-md rounded-b-lg">
                            {activeTab === "Stocks" && (
                                <>
                                    {/* Most bought on Kotak */}
                                    <div className=" w-full">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4 pt-3">Most bought on Kotak</h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
                                            {mostBoughtStocks.map((stock, index) => (
                                                <div key={index} className="p-4 border border-gray-200 bg-white rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                                                    <h4 className="font-medium text-gray-900 mb-2">{stock.name}</h4>
                                                    <span className='flex items-center'>
                                                        <p className="text-xl font-semibold text-gray-900 mb-1">{stock.price}</p>
                                                        <p className={`text-sm font-medium ${stock.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                                            {stock.change >= 0 ? '+' : ''}{stock.change} ({stock.change >= 0 ? '+' : ''}{stock.changePercent}%)
                                                        </p>
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>


                                    {/* Investment Products */}
                                    <div className="">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4 pt-4">Investment products</h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                                            {investmentProducts.map((product, index) => (
                                                <div key={index} className={`p-4 bg-white ${product.color} rounded-lg hover:shadow-md transition-shadow cursor-pointer relative`}>
                                                    {product.badge && (
                                                        <span className={`absolute top-2 right-2 px-2 py-1 text-xs font-bold rounded ${product.badge === 'LIVE NOW' ? 'bg-green-600 text-white' :
                                                            product.badge === 'LIVE' ? 'bg-blue-600 text-white' :
                                                                'bg-orange-600 text-white'
                                                            }`}>
                                                            {product.badge}
                                                        </span>
                                                    )}
                                                    <div className="text-2xl mb-2">{product.icon}</div>
                                                    <h4 className="font-medium text-gray-900">{product.name}</h4>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Investing Tools */}
                                    <div className="">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4 pt-4">Investing tools</h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                                            {investingTools.map((tool, index) => (
                                                <div key={index} className="p-2 border bg-white flex items-center border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer relative">
                                                    {tool.badge && (
                                                        <span className="absolute top-2 right-2 px-2 py-1 text-xs font-bold bg-orange-600 text-white rounded"> {tool.badge} </span>)}
                                                    <div className="text-2xl mb-2">{tool.icon}</div>
                                                    <h4 className="font-medium text-gray-900">{tool.name}</h4>
                                                </div>))}
                                        </div>
                                    </div>

                                    {/* Research and Market Updates */}
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                        <div className="">
                                            <h3 className="text-lg font-semibold t  ext-gray-900 mb-4 pt-4">Research</h3>
                                            <div className="space-y-3 bg0">
                                                {researchTools.map((tool, index) => (
                                                    <div key={index} className="flex items-center space-x-3 p-3 border bg-white border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                                                        <div className="text-xl">{tool.icon}</div>
                                                        <h4 className="font-medium text-gray-900">{tool.name}</h4>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="">
                                            <h3 className="text-lg font-semibold text-gray-900 mb-4 pt-4">Market updates</h3>
                                            <div className="space-y-3">
                                                {marketUpdates.map((update, index) => (
                                                    <div key={index} className="flex items-center space-x-3 p-3 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                                                        <div className="text-xl">{update.icon}</div>
                                                        <h4 className="font-medium text-gray-900">{update.name}</h4>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>


                                    {/* Pay Later Section */}
                                    <div className="bg-white rounded-lg shadow-sm p-3 mt-4">
                                        <div className="flex items-center space-x-2">
                                            <h3 className="text-lg font-semibold text-gray-900">Pay later (MTF)</h3>
                                            <span className="px-2 py-1 text-xs font-bold bg-blue-600 text-white rounded">New</span>
                                        </div>
                                        <p className="text-sm text-gray-600 mb-4">You pay a fraction of the amount, we fund the rest</p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                                            {payLaterStocks.map((stock, index) => (
                                                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                                                    <div className="flex justify-between items-start mb-2">
                                                        <h4 className="font-medium text-gray-900">{stock.name}</h4>
                                                        <button className="px-2 py-1 text-xs font-semibold bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                                                            {stock.buyOption}
                                                        </button>
                                                    </div>
                                                    <span className='flex items-center'>
                                                        <p className="text-lg font-semibold text-gray-900 mb-1">{stock.price}</p>
                                                        <p className={`text-sm font-medium ${stock.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                                            {stock.change >= 0 ? '+' : ''}{stock.change} ({stock.change >= 0 ? '+' : ''}{stock.changePercent}%)
                                                        </p>
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <MarketMovers />

                                </>

                            )}


                            {activeTab === "F&O" && (
                                <div className="flex flex-col justify-center items-center h-full">
                                    <img src={Bag} alt="Bag" />
                                    <p className="text-gray-500 text-lg font-semibold">
                                        {/* 🚧 Coming Soon 🚧 */}
                                        Your positions will appear here.
                                    </p>
                                </div>
                            )}

                            {/* Mutual Funds Content */}
                            {activeTab === "Mutual funds" && (
                                <div className="flex justify-center items-center h-40">
                                    <img src={Bag} alt="bag" />
                                    <p className="text-gray-700 text-lg font-semibold">
                                        📢 Mutual Funds section under development
                                    </p>
                                </div>
                            )}


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Home;