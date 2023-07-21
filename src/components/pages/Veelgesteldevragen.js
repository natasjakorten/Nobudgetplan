import React from 'react';
import Header from '../header/Header';
import puzzelen from '../../assets/puzzelen.png';
import './veelgesteldevragen.css';

function Veelgesteldevragen() {
    return (
            <main className="veelgesteldevragen">
            <Header title="Veel gestelde vragen"/>

             <article className="puzzelen">
            <img src={puzzelen} alt="puzzelen"/>

            <h1>Veel gestelde vragen</h1>
            <p>
             Wij krijgen regelmatig vragen van jullie over diverse onderwerpen. <br/>
             Hieronder hebben wij er een aantal op een rijtje gezet:
                <br/>
             1.ALs ik een vraag heb over een activiteit kan ik jullie hier dan over contacten?
                <br/>
             Jazeker, met al je vragen en of problemen kun je contact met ons opnemen.
                <br/>
             2.Is het ook mogelijk om activiteiten te ontvangen voor 2 personen?
                <br/>
             Ook dit is mogelijk, neem contact met ons op en ontvang activiteiten voor 2 personen.
             3. Gaan jullie in de toekomst activiteiten organiseren?
                <br/>
             Wij zijn op dit moment bezig om ons bedrijfje uit te breiden en om de voorgestelde activiteiten ook
             bij jou thuis te organiseren.
                <br/>
             4. Voor welke leeftijden zijn de activiteiten?
                <br/>
             Wij proberen activiteiten te bedenken voor iedere leeftijd. Het kan zijn dat er wat aanpassing nodig is
             is voor de allerkleinste.
                <br/>
             5. Moet ik betalen voor mij te registreren?
                <br/>
             Nee, deze website is voor mensen die beperkt budget hebben en wij vragen dan ook niks voor deze service.
                <br/>
            </p>
        </article>
        </main>
    );
}

export default Veelgesteldevragen;