import {React, useState} from "react";
import axios from 'axios';
import {Link} from "react-router-dom";

function SignUp() {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [matchPwd, setMatchPwd] = useState('');
    const [success, setSuccess] = useState(false);
    const baseUrl = "https://frontend-educational-backend.herokuapp.com/";

    const handleSubmit = async () => {
        // MOET NOG WEGGEHAALD WORDEN als back-end gekoppeld/aangeroepen is
        setSuccess(true);

        try {
            const result = await axios.post(`${baseUrl}api/auth/signup`, {
                "username": user,
                "email" : email,
                "password" : pwd,
                "role": ["user"]
            });
        }
        catch(e) {
            console.log(`Er is iets misgegaan met registreren: ${e}`);
        }
    }

    return (
        <>
            {success ? (
                <section>
                    <h1>Je bent succesvol geregistreerd!</h1>
                    <p>
                        <Link to="/signin">Log hier in</Link>
                    </p>
                </section>
            ) : (
                <section>
                    <h1>Registreren</h1>
                    <p>Registreer je hier en ontvang een activiteit op je profielpagina</p>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">
                            Gebruikersnaam:
                        </label>
                        <input
                            type="text"
                            id="username"
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        /><br/>

                        <label htmlFor="email">
                            Email:
                        </label>
                        <input
                            type="text"
                            id="email"
                            autoComplete="off"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                        /><br/>

                        <label htmlFor="password">
                            Wachtwoord:
                        </label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        /><br/>

                        <button>Registreer</button>
                    </form>
                    <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>
                </section>
            )}
        </>
    )
}

export default SignUp;