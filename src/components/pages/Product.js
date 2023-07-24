import React from 'react';
import Header from '../../components/header/Header';
import verveling from '../../assets/verveling.jpg';
import './product.css';

function Product() {
    return (
            <main className="product">
                <Header title="Homepagina"/>
                    <article className="verveling">
                        <img src={verveling} alt="verveling"/>

                        <h1>No Budget Plan</h1>
                        <p>Slaat de verveling toe? En is er weinig tot geen budget voor activiteiten?<br/>
                            Zouden jullie als gezin leuke activiteiten willen doen voor weinig tot geen geld?
                            Dan is hier de oplossing ! <br/>
                            Registreer je dan op de inschrijf pagina en ontvang een de door jouw gekozen leuke
                            activiteit via de mail!<br/>
                            Heb je nog ideeën voor andere gratis activiteiten die mogelijk zijn
                            voor een gezin te ondernemen zijn dan willen we dat heel graag horen van jou! <br/>
                            Laat je super idee achter op onze tips en ideeën pagina!</p>
                    </article>
                </main>
            );
            }

            export default Product;


