import React from "react";
import { FaMoneyBills } from "react-icons/fa6";
import { MdArrowForwardIos, MdOutlineHistory } from "react-icons/md";
import Sidebar from "../../components/sidebar";
import Navbar from "../../components/navbar";

// FundsPanel.jsx
// Single-file React component styled with Tailwind CSS to mimic the provided design.
// Drop this into a React project with Tailwind set up (create-react-app + tailwindcss or Vite + tailwind).

const FundsPanel = () => {
  const summaries = [
    { title: "Cash balance", value: 0 },
    { title: "Margin from shares", value: 0 },
    { title: "Used margin", value: 0 },
    { title: "Available margin", value: 0 },
  ];

  const links = [
    {
      label: "Amount due details",
      icon: <FaMoneyBills />,
    },
    {
      label: "View transaction history",
      icon: <MdOutlineHistory />,
    },
  ];

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-12 grid-rows-5 gap-4 min-h-screen bg-gray-100">
        <div className="col-span-3 my-20">
          <Sidebar />
        </div>
        <div className="col-span-9 col-start-4 mt-15">
          <div className="bg-white rounded-md shadow-sm border border-gray-100 overflow-hidden mx-6 mt-6">
            {/* Header */}
            <div className="p-6 md:p-8 border-b border-gray-200">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-blue">Funds</h3>
                  <p className="text-sm text-gray-500 mt-1">Available</p>
                  <div className="mt-3 text-3xl md:text-5xl font-semibold text-gray-800">
                    0
                  </div>

                  <div className="mt-6 flex gap-4">
                    <button className="p-2 lg:w-80 md:w-auto cursor-pointer rounded-lg bg-blue text-white font-medium shadow-sm hover:bg-blue-900 transition">
                      Deposit
                    </button>
                    <button className="p-2 lg:w-80 md:w-auto cursor-pointer rounded-lg bg-blue text-white font-medium shadow-sm hover:bg-blue-900 transition opacity-95">
                      Withdraw
                    </button>
                  </div>

                  <p className="text-xs text-gray-400 mt-6">
                    Deposits will reflect in your account immediately. Withdraw
                    requests placed before 04:00 PM IST on a business day will get
                    processed on the same day.
                  </p>
                </div>

                <div className="hidden md:block">
                  {/* Decorative wallet image - replace with actual asset if available */}
                  {/* <div className="w-32 h-28 bg-gradient-to-br from-pink-300 to-red-400 rounded-xl flex items-center justify-center shadow-md">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 7h14v10H4z" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="18" cy="12" r="1" fill="#fff" />
                </svg>
              </div> */}
                </div>
              </div>
            </div>
          </div>


          {/* Balance summary row */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 rounded-md shadow-sm border bg-white mx-6 my-3 border-b border-gray-100">
            {summaries.map((item, index) => (
              <div className="p-4" key={index}>
                <p className="text-sm text-blue font-medium flex items-center">
                  <span>{item.title}</span>
                  <MdArrowForwardIos />
                </p>
                <p className="text-lg font-medium">{item.value}</p>
              </div>
            ))}
          </div>

          {/* Available margin for options */}
          <div className="p-3 border-b border-gray-100 rounded-md shadow-sm border bg-white mx-6 my-3">
            <div className="text-sm text-blue font-medium">
              Available margin for buying options
            </div>
            <div className="mt-3 text-lg font-medium">0</div>
          </div>

          {/* Action links row */}
          <div className="p-3 bg-white border-b border-gray-100 rounded-md shadow-sm border mx-6 my-3">
            <div className="flex items-center gap-6 text-sm text-blue">
              {links.map((link, index) => (
                <button key={index} className="flex items-center gap-3 px-2 py-2 hover:bg-gray-50 rounded-md">
                  <span className="w-8 h-8 text-xl flex items-center justify-center bg-blue-50 rounded-full">
                    {link.icon}
                  </span>
                  <span className="font-medium">{link.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Footer action */}
          <div className="px-3 py-5 bg-white border-b border-gray-100 rounded-md shadow-sm border mx-6">
            <div className="text-center text-blue font-medium">
              Pledge for margin/unpledge{" "}
              <span className="inline-block ml-2">↗</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FundsPanel;
