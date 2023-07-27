import { React, createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import jwtDecode from "jwt-decode"
import axios from axios

export const AuthContext = createContext({});

function AuthContextProvider({ children }) {
    const [isAuth, setIsAuth] = useState
    isAuthenticated: false,
        user: null,
        status:'pending'
});

 useEffect(effect() =>{
    const token = localStorage.getItem(key:'token');
    const decodeToken = jwtDecode(token);
    console.log(decodedToken);
    if (token) {
        void fetchUserData(decodedtoken, token);
    } else {
    }
}, deps: []);
    const navigate = useNavigate();

    function login(token) {
        console.log(token);
        localStorage.setItem('token,token')
        console.log('Gebruiker is ingelogd!');
        setIsAuth( {
            isAuthenticated: true,
                user: {
                username: 'Piet',
                email: 'Piet@Novi.nl',
                wachtwoord: '123456',
            }
        });
        navigate('/profile');
    }

    function logout() {
        console.log('Gebruiker is uitgelogd!');
        setIsAuth( value: {
            isAuthenticated: false
            user: null,
        });
        navigate('/');
    }

    const contextData = {
        ...isAuth,
        login: login,
        logout: logout,
    };

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;