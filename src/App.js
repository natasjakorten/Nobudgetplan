import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from './components/pages/Product';
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';
import Profile from './components/pages/Profile';
import Tipsenideeen from './components/pages/Tipsenideeen';
import Veelgesteldevragen from './components/pages/Veelgesteldevragen';
import Contact from './components/pages/Contact';
import Navigation from './components/Navigation/Navigation';


function App() {
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path='/' exact element={<Product />} />
                <Route path='/signin' element={<SignIn />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/tipsenideeen' element={<Tipsenideeen />} />
                <Route path='/veelgesteldevragen' element={<Veelgesteldevragen />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </Router>
    );

}

export default App;