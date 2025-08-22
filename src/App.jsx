import React, { useState } from 'react'
import './index.css' 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Login from './Views/Login'
import Register from './Views/Register'
import Home from './Views/Home'
import Courses from './Views/Courses'
import BasicPackages from './Views/BasicPackages'
import StandardPackages from './Views/StandardPackages'
import AdvancedPackages from './Views/AdvancedPackages'
import PremiumPackages from './Views/PremiumPackages' 
import UltimatePackages from './Views/UltimatePackages'
import Contact from './Views/Contact'
function App() {
  return (
    <Router>   
      <Routes>
        <Route path="/" element={<><Header /><Home /></>} />
        <Route path="/Login" element={<><Header isDarkMode={true}/><Login /></>} />
        <Route path="/Courses" element={<><Header isDarkMode={true}/><Courses/></>} />
        <Route path="/Register" element={<><Header isDarkMode={true}/><Register /></>} />
        <Route path="/BasicPackages" element={<><Header isDarkMode={true}/><BasicPackages /></>} />
        <Route path="/StandardPackages" element={<><Header isDarkMode={true}/><StandardPackages /></>} />
        <Route path="/AdvancedPackages" element={<><Header isDarkMode={true}/><AdvancedPackages /></>} />
        <Route path="/PremiumPackages" element={<><Header isDarkMode={true}/><PremiumPackages /></>} />
        <Route path="/UltimatePackages" element={<><Header isDarkMode={true}/><UltimatePackages /></>} />
        <Route path="/Contact" element={<><Header /><Contact /></>} />
      </Routes>
    </Router>
  );
}

export default App
