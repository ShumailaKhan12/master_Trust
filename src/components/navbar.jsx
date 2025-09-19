import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import { IoBagOutline } from 'react-icons/io5';
import { MdOutlineAccountBalanceWallet } from 'react-icons/md';
import { GoHomeFill } from 'react-icons/go';
import { ChevronDown, ChevronUp, LogOut, Search } from 'lucide-react';
import { BsDot } from 'react-icons/bs';
import MasterLogo from '../assets/Images/master-logo.png';
import StockData from '../Data/navbarData.json'

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    const { navbarData } = StockData

    const [selectedSpots, setSelectedSpots] = useState({
        spot1: {
            name: "NIFTY",
            title1: "NSE",
            title2: "NIFTY 50",
            value: "25334.15",
            change: "+95.05 (+0.38%)",
        },
        spot2: {
            name: "SENSEX",
            title1: "BSE",
            title2: "S&P BSE SENSEX",
            value: "82713.14",
            change: "+332.45 (+0.40%)",
        },
    });



    const handleAddToSpot = (item, spot) => {
        setSelectedSpots((prev) => ({
            ...prev,
            [spot]: item,
        }));
    };


    return (
        <>
            {/* Top Navbar */}
            <nav className="w-full bg-white shadow-sm px-4   flex items-center fixed top-0 left-0 right-0 z-50">

                {/* Left Section - NIFTY SENSEX */}
                <div className="hidden md:flex items-center  space-x-4 lg:space-x-16 border-r border-gray-300 ">
                    {selectedSpots.spot1 && (
                        <div className="flex flex-col">
                            <span className="font-semibold text-sm">{selectedSpots.spot1.name}</span>
                            <div>
                                <span className='text-xs font-semibold'>25334.15 </span>
                                {/* <span className='text-xs font-semibold'>{selectedSpots.spot1.title1} </span> */}
                                {/* <span className='text-xs font-semibold'>{selectedSpots.spot1.title2} </span> */}
                                <span className="text-green text-xs">+95.05 (+0.38%)</span>
                            </div>
                        </div>
                    )}
                    {selectedSpots.spot2 && (
                        <div className="flex flex-col">
                            <span className="font-semibold text-sm">{selectedSpots.spot2.name}</span>
                            <div>
                                <span className='text-xs font-semibold'>82713.14 </span>
                                {/* <span className='text-xs font-semibold'>{selectedSpots.spot2.title1} </span> */}
                                {/* <span className='text-xs font-semibold'>{selectedSpots.spot2.title2} </span> */}
                                <span className="text-green text-xs">+332.45 (+0.40%)</span>
                            </div>
                        </div>
                    )}
                    {/* Dropdown */}
                    <div className="relative z-100">
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="flex items-center text-gray-700  hover:text-blue cursor-pointer"
                        >
                            {isDropdownOpen ? <ChevronUp /> : <ChevronDown />}
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute top-13 right-0 bg-white border border-gray-300 shadow-md rounded-md w-100 py-3">
                                <div className="relative text-center">
                                    <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                                    <input
                                        type="text"
                                        placeholder="Search & add"
                                        className="pl-8 w-90 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div className='px-3'>
                                    <p className='text-sm text-gray-400 pt-3 text-left'>Most pinned indices</p>
                                    {navbarData.map((item, index) => (

                                        <div className="hover:bg-gray-100 border-b border-b-gray-300 py-2 px-2 flex justify-between items-center group"
                                            key={index}>
                                            <div className='hover:bg-gray-100py-2' key={index}>
                                                <p className="cursor-pointer mb-0">{item.name}</p>
                                                <p className="text-slate-500 text-xs cursor-pointer uppercase flex items-center">{item.title1}<BsDot /> {item.title2}</p>
                                            </div>

                                            <div className="hidden group-hover:flex space-x-2">
                                                <button
                                                    onClick={() => handleAddToSpot(item, "spot1")}
                                                    className="bg-gray-100 border border-gray-500 px-3 py-1 rounded-2xl text-xs"
                                                >
                                                    Spot 1
                                                </button>
                                                <button
                                                    onClick={() => handleAddToSpot(item, "spot2")}
                                                    className="bg-gray-100 border border-gray-500 px-3 py-1 rounded-2xl text-xs"
                                                >
                                                    Spot 2
                                                </button>
                                            </div>
                                        </div>


                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Center Logo */}
                <div className="flex justify-start lg:ml-4 flex-grow">
                    <img src={MasterLogo} alt="Logo" className="h-12 w-20 md:w-20 md:h-14 my-2 ml-2  md:my-1" />
                </div>

                {/* Right Section */}
                <div className="hidden md:flex items-center space-x-6 ml-auto">
                    <NavLink to="/" className={({ isActive }) => isActive ? "text-blue font-medium flex items-center" : "text-gray-600 hover:text-blue flex items-center"}>
                        <GoHomeFill className="me-2 text-lg" />Home
                    </NavLink>
                    <NavLink to="/portfolio" className={({ isActive }) => isActive ? "text-blue font-medium flex items-center" : "text-gray-600 hover:text-blue flex items-center"}>
                        <IoBagOutline className="me-2 text-lg" />Portfolio
                    </NavLink>
                    <NavLink to="/funds" className={({ isActive }) => isActive ? "text-blue font-medium flex items-center" : "text-gray-600 hover:text-blue flex items-center"}>
                        <MdOutlineAccountBalanceWallet className="me-2 text-lg" />Funds
                    </NavLink>
                    <div onClick={() => setIsProfileOpen(!isProfileOpen)} className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-100 text-blue font-semibold cursor-pointer">
                        R
                    </div>
                </div>

                {/* Mobile Search */}
                <div className="md:hidden flex items-center">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                        <input
                            type="text"
                            placeholder="Search"
                            className="pl-8 w-32 sm:w-40 md:w-56 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                        />
                    </div>
                </div>
            </nav>

            {/* Mobile Bottom Tab */}
            <div className="fixed bottom-0 left-0 w-full bg-white shadow-inner border-t border-gray-200 flex justify-around py-2 md:hidden z-50">
                <NavLink to="/" className={({ isActive }) => isActive ? "text-blue flex flex-col items-center text-xs" : "text-gray-500 flex flex-col items-center text-xs"}>
                    <GoHomeFill className="text-lg" />Home
                </NavLink>
                <NavLink to="/portfolio" className={({ isActive }) => isActive ? "text-blue flex flex-col items-center text-xs" : "text-gray-500 flex flex-col items-center text-xs"}>
                    <IoBagOutline className="text-lg" />Portfolio
                </NavLink>
                <NavLink to="/funds" className={({ isActive }) => isActive ? "text-blue flex flex-col items-center text-xs" : "text-gray-500 flex flex-col items-center text-xs"}>
                    <MdOutlineAccountBalanceWallet className="text-lg" />Funds
                </NavLink>
            </div>

            {/* Profile Drawer */}
            {isProfileOpen && (
                <div className="fixed inset-0 flex justify-end z-50 pt-20 pr-5">
                    <div className="absolute inset-0" onClick={() => setIsProfileOpen(false)}></div>
                    <div className="relative w-64 rounded-b-lg bg-white h-32 shadow-lg p-4 flex flex-col z-50">
                        <h2 className="text-lg font-semibold mb-4">Hi, Rajik</h2>
                        <NavLink to={"/login "}>
                            <div className="flex items-center hover:bg-red-100 rounded-lg text-red py-2">
                                <LogOut className="bg-gray-200 p-1 rounded-full" />
                                <button
                                    className="px-2"
                                // onClick={() => setIsProfileOpen(false)}
                                >
                                    Logout
                                </button>
                            </div>
                        </NavLink>
                    </div>
                </div>
            )}
        </>
    )
}

export default Navbar;
