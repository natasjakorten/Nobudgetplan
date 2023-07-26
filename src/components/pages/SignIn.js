import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import axios from "axios";



        async function fetchData() {
            try{
                const result = await axios.get('http://www.boredapi.com/api/activity?participants=3', {
                    'Accept': 'application/json'
                });
                setActivityData(result.data);
            } catch (e) {
                console.error(e);
            }
        }

        async function chooseActivity() {
            chosenActivityData = 'De gekozen activiteit is: ' + activityData.activity + ' - Groetjes Natasja.';
            console.log(chosenActivityData);
        }


        function SignIn() {
            const {login} = useContext(AuthContext);

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
            )

        }

export default SignIn;
