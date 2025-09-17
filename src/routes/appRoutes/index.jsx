import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../../pages/home/home';
import Login from '../../pages/auth/login/login';
import Register from '../../pages/auth/register/register';
import TopPicks from '../../pages/portfolio/portfolio';
import FundsPanel from '../../pages/funds/funds';

const AppRoutes = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/portfolio" element={<TopPicks />} />
                    <Route path="/fund" element={<FundsPanel />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </Router>
        </>
    );
};

export default AppRoutes;