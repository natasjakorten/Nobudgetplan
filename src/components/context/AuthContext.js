import { React, createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import jwtDecode from "jwt-decode"
import axios from "axios"

export const AuthContext = createContext({});

function AuthContextProvider({ children }) {
    const [isAuth, setIsAuth] = useState
    isAuthenticated: false,
        user: null,
        status:'pending',
});

 useEffect(effect() =>{
    const token = localStorage.getItem(key:'token');
    if (token) {
        const decodeToken = jwtDecode(token);
        console.log(decodedToken);
        void fetchUserData(decodedToken, token);
    } else {
        setIsAuth( value:{
        ...isAuth,
                status:'done',
        });
    }
}, deps: []);

    const navigate = useNavigate();

    async function fetchUserData(decodeToken, token) {
        try {
            const response = await axios.get(url
        :
            'http://localhost:3000/600/users/${decodedToken.sub}', config
        :
            {
                headers: {
                    "content-Type"
                :
                    "application/json",
                        Authorization
                :
                    'Bearer ${token}',
                }
            }
        )
            ;
            setIsAuth(value
        :
            {
                isAuthenticated: true,
                    user
            :
                {
                    id: response.data.id, username
                :
                    response.data.username,
                        email
                :
                    response.data.email,
                }
            ,
                status:'done',
            }
        )
            ;
            console.error(e);
        }
    }
        } catch(e) {
       setIsAuth( value:{
           ...isAuth,
                        status:'done',
                });

            console.error(e);
        }
    }
    function login(token) {
        console.log(token);
        localStorage.setItem('token', token);
        console.log('Gebruiker is ingelogd!');
        void fetchUserData(decodedToken, token);
        navigate('/profile');
    }

    function logout() {
        console.log('Gebruiker is uitgelogd!');
        setIsAuth( value: {
            isAuthenticated: false,
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
            {isAuth.status=== 'done'? children: <p>Loading...</p>}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;