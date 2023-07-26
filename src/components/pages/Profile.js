import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

function Profile() {
    const [activityData, setActivityData] = useState({});
    let chosenActivityData;

    async function chooseActivity() {
        chosenActivityData = 'De gekozen activiteit is: ' + activityData.activity + ' - Groetjes Natasja.';
        console.log(chosenActivityData)};

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

    let element = <>
        <h1>Profielpagina</h1>
        <section>
            <h2>Gegevens</h2>
            <p><strong>Gebruikersnaam:</strong> Piet</p>
            <p><strong>Email:</strong> Piet@Novi.nl</p>
            <p><strong>Wachtwoord:</strong> 123456</p>
        </section>

        <section>
            <h2>beveiligd wachtwoord</h2>
            <p>Klik hieronder aan als je de activiteit per mail wilt ontvangen</p>




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
            <br/>
            <button
                type="button"
                onClick={chooseActivity}>
                klik hier voor de activiteit per mail te krijgen
            </button>
        </section>
        <p>Terug naar de <Link to="/">homepagina</Link></p>

        return element;
        </>;


    }

export default Profile