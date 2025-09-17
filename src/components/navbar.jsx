import React, { useState } from 'react'

import { NavLink } from "react-router-dom";
import { IoMenu } from 'react-icons/io5';
import { RxCross2 } from 'react-icons/rx';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="w-full bg-white border-b shadow-sm px-6 py-2 flex items-center justify-between">
                {/* Left Section */}
                <div className="flex items-center space-x-6">
                    {/* NIFTY & SENSEX */}
                    <div className="hidden md:flex items-center space-x-4 text-sm">
                        <div className="flex space-x-1">
                            <span className="font-semibold">NIFTY</span>
                            <span>25334.15</span>
                            <span className="text-green-600">+95.05 (+0.38%)</span>
                        </div>
                        <div className="flex space-x-1">
                            <span className="font-semibold">SENSEX</span>
                            <span>82713.14</span>
                            <span className="text-green-600">+332.45 (+0.40%)</span>
                        </div>
                    </div>
                </div>

                {/* Center Logo */}
                <div className="flex justify-center">
                    <h1 className="text-2xl font-bold text-red-600">Neo</h1>
                </div>

                {/* Right Section */}
                <div className="hidden md:flex items-center space-x-6">
                    <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-600 font-medium" : "text-gray-600 hover:text-blue-600"}>Home</NavLink>
                    <NavLink to="/portfolio" className={({ isActive }) => isActive ? "text-blue-600 font-medium" : "text-gray-600 hover:text-blue-600"}>Portfolio</NavLink>
                    <NavLink to="/funds" className={({ isActive }) => isActive ? "text-blue-600 font-medium" : "text-gray-600 hover:text-blue-600"}>Funds</NavLink>
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 font-semibold cursor-pointer">
                        R
                    </div>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden flex items-center">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <RxCross2 className="w-6 h-6" /> : <IoMenu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="absolute top-14 left-0 w-full bg-white shadow-md flex flex-col items-center py-4 space-y-4 md:hidden z-50">
                        <NavLink to="/" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "text-blue-600 font-medium" : "text-gray-600 hover:text-blue-600"}>Home</NavLink>
                        <NavLink to="/portfolio" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "text-blue-600 font-medium" : "text-gray-600 hover:text-blue-600"}>Portfolio</NavLink>
                        <NavLink to="/funds" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "text-blue-600 font-medium" : "text-gray-600 hover:text-blue-600"}>Funds</NavLink>
                        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 font-semibold cursor-pointer">
                            R
                        </div>
                    </div>
                )}
            </nav>

        </>
    );
};

export default Navbar