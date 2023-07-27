import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';


function SignIn() {
    const { isAuthenticated, signUserIn } = useContext(AuthContext);
    async function signUserIn () {
        try {
            const response = await axios.post('${BaseUrl}api/auth/signin',
                {
                    "username": "user",
                    "password": "123456",
                });
            signinFunction(response.data.accesToken);
        } catch(e){
        console.error(e);
    }

    return (
        <>
            <h1>Inloggen</h1>
            <p>Log hier in als je een account hebt</p>
            {isAuthenticated===false &&
            <button type={"button onclick={logUserIn"}>
                Log je hier in met je gebruikersnaam en email
                <button type="submit">Inloggen</button>
            <form>

            <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
        </>
    );
}

export default SignIn;