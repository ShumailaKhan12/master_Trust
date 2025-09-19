
import Sidebar from '../../components/sidebar';
import React, { useState } from 'react';
import MarketMovers from '../../components/MarketMovers';
import Navbar from '../../components/navbar';
import MobileSidebar from '../../components/mobileSidebar';
import Data from '../../Data/home.json'
import Bag from "../../assets/Images/empty-bag.png"
// import wareener from '../../assets/Images/home/wareener.png'



const Home = () => {

    const [activeTab, setActiveTab] = useState('Stocks');

    const iconBgColors = ["bg-green-transparent", "bg-purple-transparent", "bg-red-transparent", "bg-blue-transparent"];

    const { mostBoughtStocks, payLaterStocks, investmentProducts, investingTools, researchTools, marketUpdates } = Data

    return (
        <div>
            <Navbar />
            <div className="flex bg-gray-100">
                <Sidebar />
                <div className="p-4 space-y-6 pt-16 w-full my-2 mt-5 lg:mt-2 lg:ml-110">
                    {/* Tabs */}
                    <div className="rounded-lg">
                        <div className="flex shadow-md bg-white rounded-tl-lg rounded-tr-lg">
                            {['Stocks', 'F&O', 'Mutual funds'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-5 md:px-15 py-3 text-sm font-medium ${activeTab === tab
                                        ? 'text-blue border-blue'
                                        : 'text-gray-600 hover:text-gray-900'
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        <div className="p-6 shadow-md rounded-b-lg ">
                            {activeTab === "Stocks" && (
                                <>
                                    <div className='block lg:hidden'>
                                        <MobileSidebar />
                                    </div>
                                    {/* Most bought on Kotak */}
                                    <div className=" w-full">
                                        <h3 className="text-lg font-semibold text-gray-400 mb-2">Most bought on Kotak</h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
                                            {mostBoughtStocks?.map((stock, index) => (
                                                <div key={index} className="p-4 border bg-white rounded-lg shadow-sm border-gray-200 transition-shadow">
                                                    <div className='flex'>
                                                        <div className='bg-gray-100 rounded-full h-10 w-10 me-3 flex items-center justify-center p-1'>
                                                            <img src={stock?.img} className='w-full h-full rounded-full' alt={stock?.name} />
                                                        </div>
                                                        <h4 className="font-medium text-gray-900 mb-2">{stock.name}</h4>
                                                    </div>
                                                    <span className='flex items-center'>
                                                        <p className="text-xl font-semibold text-gray-600 mb-1">{stock.price}</p>
                                                        <p className={`text-sm font-medium ${stock.change >= 0 ? 'text-green' : 'text-red-600'}`}>
                                                            {stock.change >= 0 ? '+' : ''}{stock.change} ({stock.change >= 0 ? '+' : ''}{stock.changePercent}%)
                                                        </p>
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>


                                    {/* Investment Products */}
                                    <div className="">
                                        <h3 className="text-lg font-semibold text-gray-400 mb-2 pt-4">Investment products</h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                                            {investmentProducts.map((product, index) => (
                                                <div key={index} className={`bg-white ${product.color} rounded-lg shadow-md shadow-slate-300 transition-shadow relative`}>
                                                    {product.badge && (
                                                        <span className={`absolute -top-3 right-0 px-2 py-1 text-xs font-medium rounded ${product.badge === 'LIVE NOW' ? 'bg-green-600 text-white' :
                                                            product.badge === 'LIVE' ? 'bg-blue-700 text-white' :
                                                                'bg-orange-600 text-white'
                                                            }`}>
                                                            {product.badge}
                                                        </span>
                                                    )}
                                                    <div className="flex justify-between items-center">
                                                        <h4 className="font-medium text-gray-900 p-3">{product.name}</h4>
                                                        <div className={`${iconBgColors[index % iconBgColors.length]} rounded-l-4xl p-3`}>
                                                            <img src={product?.icon} className='h-12 w-10' alt={product?.name} />
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Investing Tools */}
                                    <div className="">
                                        <h3 className="text-lg font-semibold text-gray-400 mb-2 pt-4">Investing tools</h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                                            {investingTools.map((tool, index) => (
                                                <div key={index} className="p-3 border bg-white flex items-center border-gray-200 rounded-lg transition-shadow relative">
                                                    {tool.badge && (
                                                        <span className="absolute top-2 right-2 px-2 py-1 text-xs font-bold bg-orange-600 text-white rounded"> {tool.badge} </span>)}
                                                    <div className="flex items-center">
                                                        <img src={tool.icon} className='h-8 w-8 me-3' alt="loading" />
                                                        <h4 className="font-medium text-gray-900">{tool.name}</h4>
                                                    </div>

                                                </div>))}
                                        </div>
                                    </div>

                                    {/* Research and Market Updates */}
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                        <div className="">
                                            <h3 className="text-lg font-semibold text-gray-400 mb-2 pt-4">Research</h3>
                                            <div className="space-y-3 bg0">
                                                {researchTools?.map((tool, index) => (
                                                    <div key={index} className="flex items-center space-x-3 p-3 border bg-white border-gray-200 rounded-lg transition-shadow">
                                                        <div className="flex items-center">
                                                            <img src={tool?.icon} className='h-10 w-12 me-3' alt="Laoding" />

                                                            <h4 className="font-medium text-gray-900">{tool?.name}</h4>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="">
                                            <h3 className="text-lg font-semibold text-gray-400 mb-2 pt-4">Market updates</h3>
                                            <div className="space-y-3">
                                                {marketUpdates.map((update, index) => (
                                                    <div key={index} className="flex items-center space-x-3 p-3 bg-white border border-gray-200 rounded-lg transition-shadow">
                                                        <div className="flex items-center">
                                                            <img src={update?.icon} className='h-10 w-12 me-3' alt="Loading" />
                                                            <h4 className="font-medium text-gray-900">{update.name}</h4>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>


                                    {/* Pay Later Section */}
                                    <div className="bg-white rounded-lg shadow-sm p-3 mt-4">
                                        <div className="flex items-center space-x-2">
                                            <h3 className="text-lg font-semibold text-gray-900">Pay later (MTF)</h3>
                                            <span className="px-2 py-1 text-xs font-bold bg-blue text-white rounded">New</span>
                                        </div>
                                        <p className="text-sm text-gray-600 mb-4">You pay a fraction of the amount, we fund the rest</p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                                            {payLaterStocks.map((stock, index) => (
                                                <div key={index} className="border border-gray-200 rounded-lg p-4 shadow-md transition-shadow">
                                                    <div className="flex justify-between items-start mb-2">
                                                        <h4 className="font-medium text-gray-900">{stock.name}</h4>
                                                        <button className="px-2 py-1 text-xs font-semibold bg-blue text-white rounded hover:bg-blue transition-colors">
                                                            {stock.buyOption}
                                                        </button>
                                                    </div>
                                                    <span className='flex items-center'>
                                                        <p className="text-lg font-semibold text-gray-900 mb-1">{stock.price}</p>
                                                        <p className={`text-sm font-medium ${stock.change >= 0 ? 'text-green' : 'text-red-600'}`}>
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
                                <div className="flex flex-col justify-center items-center min-h-[calc(100vh-200px)]">
                                    <img src={Bag} alt="Bag" />
                                    <p className="text-gray-500 text-lg font-semibold">
                                        Your positions will appear here.
                                    </p>
                                </div>
                            )}

                            {/* Mutual Funds Content */}
                            {activeTab === "Mutual funds" && (
                                <div className="flex  flex-col justify-center items-center min-h-[calc(100vh-200px)]">
                                    <img src={Bag} alt="bag" />
                                    <p className="text-gray-500 text-lg font-semibold">
                                        Mutual Funds section under development
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