import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../../pages/home/home';
import Login from '../../pages/auth/login/login';
import Register from '../../pages/auth/register/register';
import FundsPanel from '../../pages/funds/funds';
import Portfolio from '../../pages/portfolio/portfolio';
import Market from '../../pages/market/market';
// import Navbar from '../../components/navbar';

const AppRoutes = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/funds" element={<FundsPanel />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/market" element={<Market />} />
                    
                </Routes>
            </Router>
        </>
    );
};

export default AppRoutes;