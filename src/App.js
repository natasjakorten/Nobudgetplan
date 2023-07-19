import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from './components/pages/Product';
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';
import Profile from './components/pages/Profile';
import Tipsenideeen from './components/pages/Tipsenideeen';
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
            </Routes>
        </Router>
    );
    /*return (
            <Navigation />
            <Product />
            <Inschrijven />
            <Tipsenideeen />
            <Veelgesteldevragen />
            <Contact />
            <NavBar />
            <div className="content">
                <Routes>
                    <Route exact path="/" element={<Product />}/>
                    <Route path="/profile" element={ isAuth ? <Profile /> : <Navigate to="/signin" />}/>
                    <Route path="/signin" element={ <SignIn />} />
                    <Route path="/signup" element={<SignUp />}/>

                </Routes>
            </div>
    );*/
}

export default App;