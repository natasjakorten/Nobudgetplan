import {useState, useEffect} from "react";
import Header from '../../components/header/Header';
import rennen from '../../assets/rennen.jpg';
import './tipsenideeen.css';

function Tipsenideeen() {
    const [messageValue, setMessageValue] = useState('');
    const [termsAndConditionsValue, setTermsAndConditionsValue] = useState(false);

    useEffect(() => {
        setMessageValue(messageValue);
        console.log(messageValue);
    }, [messageValue])

    useEffect(() => {
        setTermsAndConditionsValue(termsAndConditionsValue);
        console.log(termsAndConditionsValue);
    }, [termsAndConditionsValue])

    return (
        <main className="tipsenideeen">
            <Header title="Tips en ideeën"/>

            <article className="rennen">
                    <img src={rennen} alt="rennen"/>
                    <h2>Tips en ideeën</h2>

                    <p>Wij zien graag tips graag tips en ideeën van jullie! <br/>
                        Laat hier je idee achter </p>
                    <form>
                    <textarea
                        id="form-message"
                        name="message"
                        value={messageValue}
                        placeholder="type hier je idee"
                        onChange={(e) => setMessageValue(e.target.value)}
                    /> <br/>
                    <label htmlFor="form-terms-and-conditions">
                        <input
                            type="checkbox"
                            id="form-terms-and-conditions"
                            name="terms-and-conditions"
                            checked={termsAndConditionsValue}
                            onChange={(e) => setTermsAndConditionsValue(e.target.checked)}
                        />
                        Ik ga akkoord met de algemene voorwaarden
                    </label>
                </form>
            </article>

        </main>
    );
}

export default Tipsenideeen;