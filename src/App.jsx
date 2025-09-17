import React from 'react'
import './App.css'
import Login from './pages/auth/login/login'
import Home from './pages/home/home'
import { BrowserRouter } from 'react-router-dom'
function App() {

  return (
    <BrowserRouter>
      {/* <Login /> */}
      <Home/>
    </BrowserRouter>
  ) 
}

export default App
