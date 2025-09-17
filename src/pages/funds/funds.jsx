import React from "react";

// FundsPanel.jsx
// Single-file React component styled with Tailwind CSS to mimic the provided design.
// Drop this into a React project with Tailwind set up (create-react-app + tailwindcss or Vite + tailwind).

const FundsPanel = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-md shadow-sm border border-gray-100 overflow-hidden">
        {/* Header */}
        <div className="p-6 md:p-8 border-b border-gray-200">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-blue-800">Funds</h3>
              <p className="text-sm text-gray-500 mt-1">Available</p>
              <div className="mt-3 text-4xl md:text-5xl font-bold text-gray-800">0</div>

              <div className="mt-6 flex gap-4">
                <button className="px-8 py-3 rounded-lg bg-blue-800 text-white font-medium shadow-sm hover:bg-blue-900 transition">
                  Deposit
                </button>
                <button className="px-8 py-3 rounded-lg bg-blue-800 text-white font-medium shadow-sm hover:bg-blue-900 transition opacity-95">
                  Withdraw
                </button>
              </div>

              <p className="text-xs text-gray-400 mt-6">Deposits will reflect in your account immediately. Withdraw requests placed before 04:00 PM IST on a business day will get processed on the same day.</p>
            </div>

            <div className="hidden md:block">
              {/* Decorative wallet image - replace with actual asset if available */}
              <div className="w-32 h-28 bg-gradient-to-br from-pink-300 to-red-400 rounded-xl flex items-center justify-center shadow-md">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 7h14v10H4z" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="18" cy="12" r="1" fill="#fff" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Balance summary row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border-b border-gray-100">
          <SummaryCard title="Cash balance" value="0" />
          <SummaryCard title="Margin from shares" value="0" />
          <SummaryCard title="Used margin" value="0" />
          <SummaryCard title="Available margin" value="0" />
        </div>

        {/* Available margin for options */}
        <div className="p-6 border-b border-gray-100">
          <div className="text-sm text-blue-700">Available margin for buying options</div>
          <div className="mt-3 text-lg font-medium">0</div>
        </div>

        {/* Action links row */}
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center gap-6 text-sm text-blue-700">
            <ActionLink icon={MoneyIcon} label="Amount due details" />
            <ActionLink icon={HistoryIcon} label="View transaction history" />
          </div>
        </div>

        {/* Footer action */}
        <div className="p-6 bg-white">
          <div className="text-center text-blue-700 font-medium">Pledge for margin/unpledge <span className="inline-block ml-2">↗</span></div>
        </div>
      </div>
    </div>
  );
}

function SummaryCard({ title, value }) {
  return (
    <div className="p-4 md:p-6">
      <div className="text-sm text-blue-700 flex items-center justify-between">
        <span>{title}</span>
        <svg className="w-4 h-4 text-blue-700 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="mt-3 text-lg font-medium text-gray-700">{value}</div>
    </div>
  );
}

function ActionLink({ icon: Icon, label }) {
  return (
    <button className="flex items-center gap-3 px-2 py-2 hover:bg-gray-50 rounded-md">
      <span className="w-6 h-6 flex items-center justify-center bg-blue-50 rounded-full">
        <Icon className="w-4 h-4 text-blue-700" />
      </span>
      <span>{label}</span>
    </button>
  );
}

// Simple SVG icons as React components
function MoneyIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="7" width="20" height="10" rx="2" stroke="currentColor" strokeWidth="1.3" />
      <path d="M7 12h10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function HistoryIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 12a9 9 0 11-3.32-6.73" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 7v5l3 1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default FundsPanel;
