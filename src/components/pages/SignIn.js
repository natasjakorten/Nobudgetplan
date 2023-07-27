import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';


function SignIn() {
    const { login } = useContext(AuthContext);

    function handleSubmit(e) {
        e.preventDefault();
        login();
    }

    return (
        <div>
            <h1>Inloggen</h1>
            <p>Log hier in als je een account hebt</p>

            <form onSubmit={handleSubmit}>
                <p>Log je hier in met je gebruikersnaam en email</p>
                <button type="submit">Inloggen</button>
            </form>

            <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
        </div>
    );
}

export default SignIn;