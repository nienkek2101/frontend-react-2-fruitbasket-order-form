import React, { useState } from 'react';
import './App.css';
import Counter from './Components/Counter'

// STAPPENPLAN OPDRACHT 1
// -- Let op: We gaan eerst één fruitCounter werkend maken voor we de rest uitschrijven
// -- Welke HTML elementen hebben we nodig?
// [ ] Titel met het fruit
// [ ] Button met -
// [ ] Button met +
// [ ] P element met het aantal
// [ ] Button met reset
// -- Hoe gaan we ervoor zorgen dat de hoeveelheid fruit wordt verlaagd/verhoogd? State
// [ ] Import useState-methode uit React
// [ ] Maak een state variabele + state setter functie voor (specifiek!) de Aardbei-counter (state initialiseren)
// [ ] Een event-listenere op beide knoppen zetten (onClick)
//      [ ] PLUSBUTTON: de huidige hoeveelheid van aardbeien moet + 1
//      [ ] MINBUTTON: de huidige hoeveelheid van aardbeien moet - 1
//      [ ] We willen de MINBUTTON disabelen als de hoeveelheid aardbeien op 0 staat
// [ ] Geef de hoeveelheid aardbeien weer in een <p> element tussen de buttons
// -- Hoe gaan we ervoor zorgen dat de Reset-button alles op 0 zet?
// [ ] Schrijf een reset-functie die de state waardes van alle counters (nu nog alleen aardbeien) op 0 zet
// [ ] Een event-listener op de reset-knop die de reset-functie triggert onClick

/* Alleen aardbei - zonder component */
// function App() {
//     const [strawberryCounterValue, setStrawberryCounterValue] = useState(0);
//     // const [bananaCounterValue, setBananaCounterValue] = useState(0);
//     // const [kiwiCounterValue, setKiwiCounterValue] = useState(0);
//     // const [appleCounterValue, setAppleCounterValue] = useState(0);
//     //
//     function handleClickMin() {
//         setStrawberryCounterValue(strawberryCounterValue - 1);
//     }
//     function handleClickPlus() {
//         setStrawberryCounterValue(strawberryCounterValue + 1);
//     }
//     function resetStrawberries() {
//         setStrawberryCounterValue(0);
//     }
//
//
//     return (
//         <>
//             <h1>Fruitmand bezorgservice</h1>
//             🍓 <h3>Aardbeien</h3>
//             <button type="button" onClick={handleClickMin} disabled={strawberryCounterValue === 0}>-</button>
//             <p>{strawberryCounterValue}</p>
//             <button type="button" onClick={handleClickPlus}>+</button>
//             <button type="button" onClick={resetStrawberries}>Reset</button>
//
//         </>
//     );
// }
//
// export default App;

function App() {
    const [strawberryCounterValue, setStrawberryCounterValue] = useState(0);
    const [bananaCounterValue, setBananaCounterValue] = useState(0);
    const [kiwiCounterValue, setKiwiCounterValue] = useState(0);
    const [appleCounterValue, setAppleCounterValue] = useState(0);

    function resetFruitValue(e) {
        e.preventDefault();
        setStrawberryCounterValue(0);
        setBananaCounterValue(0);
        setKiwiCounterValue(0);
        setAppleCounterValue(0);
    }

    const [ formFirstName, setFormFirstName ] = useState('');
    const [ formLastName, setFormLastName ] = useState('');
    const [ formAge, setFormAge ] = useState('');
    const [ formZipcode, setFormZipcode ] = useState('');
    // const [ formDelivery, setFormDelivery ] = useState('');
    // const [ formDeliveryTime, setFormDeliveryTime ] = useState('');
    const [ formComments, setFormComments ] = useState('');
    const [ formTermsAndConditions, setFormTermsAndConditions ] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(bananaCounterValue, strawberryCounterValue, appleCounterValue, kiwiCounterValue, formFirstName, formLastName, formAge, formZipcode, formComments, formTermsAndConditions);
        // resetFruitValue();
        // setFormFirstName('');

    }

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <Counter
                fruitImage="🍌"
                fruitName="Bananen"
                buttonType="button"
                fruitValue={bananaCounterValue}
                setFruitValue={setBananaCounterValue}
            />
            <Counter
                fruitImage="🍓"
                fruitName="Aardbeien"
                buttonType="button"
                fruitValue={strawberryCounterValue}
                setFruitValue={setStrawberryCounterValue}
            />
            <Counter
                fruitImage="🍏"
                fruitName="Appels"
                buttonType="button"
                fruitValue={appleCounterValue}
                setFruitValue={setAppleCounterValue}
            />
            <Counter
                fruitImage="🥝"
                fruitName="Kiwis"
                buttonType="button"
                fruitValue={kiwiCounterValue}
                setFruitValue={setKiwiCounterValue}
            />
            <button
                type="button"
                onClick={resetFruitValue}
            >
                Reset
            </button>

            <form onSubmit={handleSubmit}>
                <label htmlFor="first-name"> Voornaam
                <input
                    type="text"
                    id="first-name"
                    name="first-name"
                    value={formFirstName}
                    onChange={(e) => setFormFirstName(e.target.value)}
                />
                </label>
                <label htmlFor="last-name"> Achternaam
                <input
                    type="text"
                    id="last-name"
                    name="last-name"
                    value={formLastName}
                    onChange={(e) => setFormLastName(e.target.value)}
                />
                </label>
                <label htmlFor="age"> Leeftijd
                <input
                    type="number"
                    id="age"
                    name="age"
                    value={formAge}
                    onChange={(e) => setFormAge(e.target.value)}
                />
                </label>
                <label htmlFor="zip-code"> Postcode
                <input
                    type="text"
                    id="zip-code"
                    name="zip-code"
                    value={formZipcode}
                    onChange={(e) => setFormZipcode(e.target.value)}
                />
                </label>
                <label htmlFor="bezorg-frequentie"> Bezorgfrequentie
                <select name="bezorg-frequentie" id="bezorg-frequentie">
                    <option value="wekelijks">Wekelijks</option>
                    <option value="2 wekelijks">1 keer per 2 weken</option>
                    <option value="1 keer per maand">1 keer per 4 weken</option>
                </select>
                </label>
                <label htmlFor="savonds">'s Avonds
                <input
                    type="radio"
                    id="savonds"
                    name="tijdstip"
                    // value={formDeliveryTime}
                    // onChange={(e) => setFormDeliveryTime(e.target.value)}
                />
                </label>
                <label htmlFor="overdag">Overdag
                <input
                    type="radio"
                    id="overdag"
                    name="tijdstip"
                    // value={formDeliveryTime}
                    // onChange={(e) => setFormDeliveryTime(e.target.value)}
                />
                </label>
                <label htmlFor="opmerking"> Opmerking
                <textarea
                    id="opmerking"
                    name="opmerking"
                    placeholder="type hier uw opmerking"
                    rows="12"
                    cols="50"
                    value={formComments}
                    onChange={(e) => setFormComments(e.target.value)}
                />
                </label>
                <label htmlFor="voorwaarden">
                <input
                    type="checkbox"
                    id="voorwaarden"
                    name="voorwaarden"
                    checked={formTermsAndConditions}
                    onChange={() => setFormTermsAndConditions(!formTermsAndConditions)}
                /> Ik ga akkoord met de algemene voorwaarden
                </label>
                <button type="submit">
                    Versturen
                </button>
            </form>
        </>
    );
}

export default App;
