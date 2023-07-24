import React, {useState} from 'react';
import {link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import Header from '../../components/header/Header';
import axios from "axios";
import familiehanden from "../../assets/familiehanden.jpg";
import './inschrijven.css';


function Inschrijven() {
    const [activityData, setActivityData] = useState({});
    let chosenActivityData;

    async function fetchData() {
        try {
            let result = await axios.get('http://www.boredapi.com/api/activity?participants=3', {
                'Accept': 'application/json',
            })
            setActivityData(result.data);
        } catch (e) {
            console.error(e);
        }
    }

    async function chooseActivity() {
        chosenActivityData = 'De gekozen activiteit is: ' + activityData.activity + ' - Groetjes Natasja.';
        console.log(chosenActivityData);

    }

    return (
        <>
            <main className="inschrijven">
                <Header title="Inschrijven"/>

                    <article className="familiehanden">
                        <img src={familiehanden} alt="familiehanden"/>

                        <h1>Inschrijven</h1>

                        <p> Log jezelf hier in <link to={"./Signin"}>inloggen</link> of jezelf <link
                            to={"./Signup"}>registeren</link>
                            als je nog geen account hebt.
                        </p>

                        <h2>Gevonden activiteit:</h2>
                        {activityData.activity}
                        <p><i>Type activiteit:</i> {activityData.type}<br/>
                            <i>Aantal mensen:</i> {activityData.participants}</p>
                        <small>Is dit niet de activiteit die je zoekt? Zoek dan nogmaals.</small><br/>
                        <button
                            type="button"
                            onClick={fetchData}>
                            Zoek naar activiteit!
                        </button>
                    </article>
                </main>
            </>

            );

            }

            export default Inschrijven;






