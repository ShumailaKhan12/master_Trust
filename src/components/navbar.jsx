import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import { IoBagOutline, IoMenu } from 'react-icons/io5';
import { RxCross2 } from 'react-icons/rx';
import MasterLogo from '../assets/Images/master-logo.png'
import { ChevronDown, ChevronUp, LogOut } from 'lucide-react';
import { GoHomeFill } from 'react-icons/go';
import { MdOutlineAccountBalanceWallet } from 'react-icons/md';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    return (
        <>
            <nav className="w-full bg-white  shadow-sm px-6  flex items-center fixed z-60">
                {/* Left Section - NIFTY & SENSEX */}
                <div className="flex items-center space-x-6 h-full  ">
                    <div className="hidden md:flex items-center space-x-8 text-sm border-r border-gray-300 h-16  ">
                        <div className="flex flex-col">
                            <span className="font-semibold">NIFTY</span>
                            <div>
                                <span>25334.15 </span>
                                <span className="text-green-600">+95.05 (+0.38%)</span>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-semibold">SENSEX</span>
                            <div>
                                <span>82713.14 </span>
                                <span className="text-green-600">+332.45 (+0.40%)</span>
                            </div>
                        </div>

                        {/* Dropdown trigger */}
                        <div className="relative">
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="flex items-center text-gray-700 hover:text-blue-600"
                            >
                                {isDropdownOpen ? <ChevronUp /> : <ChevronDown />}
                            </button>

                            {/* Dropdown list */}
                            {isDropdownOpen && (
                                <div className="absolute top-6 left-0 bg-white shadow-md rounded-md w-40 py-2">
                                    <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 1</p>
                                    <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 2</p>
                                    <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 3</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Center Logo */}
                <div className="flex justify-start ml-8 flex-grow">
                    <img src={MasterLogo} alt="Logo" className='w-24 h-14' />
                </div>

                {/* Right Section - NavLinks end me chale gaye */}
                <div className="hidden md:flex items-center space-x-6 ml-auto">
                    <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-600 font-medium flex items-center" : "text-gray-600 hover:text-blue-600 flex items-center"}><GoHomeFill className='me-2 text-lg' />Home</NavLink>
                    <NavLink to="/portfolio" className={({ isActive }) => isActive ? "text-blue-600 font-medium flex items-center" : "text-gray-600 hover:text-blue-600 flex items-center"}><IoBagOutline className='me-2 text-lg' />Portfolio</NavLink>
                    <NavLink to="/funds" className={({ isActive }) => isActive ? "text-blue-600 font-medium flex items-center" : "text-gray-600 hover:text-blue-600 flex items-center"}><MdOutlineAccountBalanceWallet className='me-2 text-lg' /> Funds</NavLink>
                    <div onClick={() => setIsProfileOpen(!isProfileOpen)} className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-100 text-blue-700 font-semibold cursor-pointer">
                        R
                    </div>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden flex items-center">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <RxCross2 className="w-6 h-6" /> : <IoMenu className="w-6 h-6" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <div className=" sm:hidden absolute top-14 left-0 w-full bg-white shadow-md flex flex-col items-center py-4 space-y-4   z-50">
                    <NavLink to="/" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "text-blue-600 font-medium" : "text-gray-600 hover:text-blue-600"}>Home</NavLink>
                    <NavLink to="/portfolio" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "text-blue-600 font-medium" : "text-gray-600 hover:text-blue-600"}>Portfolio</NavLink>
                    <NavLink to="/funds" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "text-blue-600 font-medium" : "text-gray-600 hover:text-blue-600"}>Funds</NavLink>
                    <div onClick={() => setIsProfileOpen(!isProfileOpen)} className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 font-semibold cursor-pointer">
                        R
                    </div>
                </div>
            )}



            {isProfileOpen && (
                <div className="fixed inset-0 flex justify-end z-50 pt-20 pr-5 sm:hidden ">
                    {/* Overlay click → close */}
                    <div
                        className="absolute inset-0"
                        onClick={() => setIsProfileOpen(false)}
                    ></div>

                    {/* Profile Drawer */}
                    <div className="relative w-64 lg:w-44 rounded-b-lg bg-white h-48 lg:h-28 shadow-lg p-4 flex flex-col z-50">
                        {/* User Info */}
                        <div className="mb-6">
                            <h2 className="text-lg font-semibold">Hi, Rajik</h2>
                        </div>

                        {/* Logout */}

                        <div className='flex items-center'>
                            <LogOut className='bg-gray-200  p-1 rounded-full' />
                            <button
                                className="px-2 "
                                onClick={() => {
                                    // logout logic
                                    setIsProfileOpen(false);
                                }}
                            >
                                Logout
                            </button>
                        </div>

                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
