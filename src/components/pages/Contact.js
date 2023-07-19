import {React, useState} from 'react';
import {Link} from 'react-router-dom';
import Header from '../../components/header/Header';
import computerkijken from '../../assets/computerkijken.jpg';
import './contact.css';


function Contact() {
    return (
        <main className="page-container">
            <Header title="Contact"/>
            <article className="computerkijken">
                <img src={computerkijken} alt="computerkijken"/>

                <h1>Wie zijn wij?</h1>
                <p>Wij zijn Natasja en Jeroen en sinds 2010 zijn wij begonnen met nobudgetplan. Wij zijn gestart met dit
                    leuk idee om iedereen
                    (zelfs mensen zonder budget).<br/>
                    Wij zijn te bereiken via mail, telefoon en zelfs op social media!<br/>
                    Onze gegevens zijn:<br/>
                    No Budget Plan <br/>
                    email: info@nobudgetplan.nl<br/>
                    tel.nr 06-1122334455<br/>
                    Wij zijn te volgen op Instagram en Facebook. Zoek ons op nobudgetplan en schrijf je in voor onze
                    nieuwsbrieven.
                </p>
            </article>
        </main>
    );

}

export default Contact;

