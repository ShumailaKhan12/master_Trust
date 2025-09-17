import React from 'react'
import './App.css'
import Portfolio from "./pages/portfolio/portfolio"
import FundsPanel from './pages/funds/funds'

function App() {

  return (
    <>
    <Portfolio/>
    <FundsPanel/>
     {/* <div className="flex h-screen items-center justify-center bg-gray-300">
      <p className="text-4xl font-bold text-red-600">
        Hello React + Vite + Tailwind
      </p>
    </div> */}
    </>
  )
}

export default App
