import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import Header from '../../components/header/Header';


function Profile() {
    const [activityData, setActivityData] = useState({});
    let chosenActivityData;

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

    let element = <>
        <h1>Profielpagina</h1>
        <section>
            <h2>Gegevens</h2>
            <p><strong>Gebruikersnaam:</strong> hardcoded-test</p>
            <p><strong>Email:</strong> hardcoded@test.com</p>
        </section>

        <section>
            <h2>Strikt geheime profiel-content</h2>
            <p>Klik hier als je de activiteit per mail wilt ontvangen</p>

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
                Meld je aan
            </button>
        </section>
        <p>Terug naar de <Link to="/">Product</Link></p>
        </>;
    return element;
}

export default Profile;