import React from 'react';
import {NavLink} from "react-router-dom";
import './Navigation.css';

function Navigation() {
    return (
        <nav>
            <div  className="nav-container">
                <h4>NoBudgetPlan</h4>
                <ul>
                    <li><NavLink to="/" className={({ isActive}) => isActive ? 'active-link' : 'default-link'}>Homepagina</NavLink></li>
                    <li><NavLink to="/signin" className={({ isActive}) => isActive ? 'active-link' : 'default-link'}>Inloggen</NavLink></li>
                    <li><NavLink to="/signup" className={({ isActive}) => isActive ? 'active-link' : 'default-link'}>Aanmelden</NavLink></li>
                    <li><NavLink to="/profile" className={({ isActive}) => isActive ? 'active-link' : 'default-link'}>Profiel</NavLink></li>
                    <li><NavLink to="/tipsenideeen" className={({ isActive}) => isActive ? 'active-link' : 'default-link'}>Tips en ideeën</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;