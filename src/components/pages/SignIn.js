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
        <>
            <h1>Inloggen</h1>
            <p>Log hier in als je een account hebt</p>

                <form onSubmit={handleSubmit}>
                <button type="submit">Inloggen</button>
            </form>

            <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
        </>
    );
}

export default SignIn;