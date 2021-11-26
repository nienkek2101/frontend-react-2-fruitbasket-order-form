import React from 'react';
import './App.css';
import Counter from './Components/Counter.js'

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

function App() {
    // const [strawberryCounterValue, setStrawberryCounterValue] = useState(0);
    // const [bananaCounterValue, setBananaCounterValue] = useState(0);
    // const [kiwiCounterValue, setKiwiCounterValue] = useState(0);
    // const [appleCounterValue, setAppleCounterValue] = useState(0);
    //
    // function handleClickMin() {
    //     setStrawberryCounterValue(strawberryCounterValue - 1);
    // }
    // function handleClickPlus() {
    //     setStrawberryCounterValue(strawberryCounterValue + 1);
    // }
    // function resetStrawberries() {
    //     setStrawberryCounterValue(0);
    // }



    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <Counter
                fruitImage="🍓"
                fruitName="Aardbeien"
                buttonType="button"
                // fruitCounterValue={fruitCounterValue}
            />

            {/*🍓 <h3>Aardbeien</h3>*/}
            {/*<button type="button" onClick={handleClickMin} disabled={strawberryCounterValue === 0}>-</button>*/}
            {/*<p>{strawberryCounterValue}</p>*/}
            {/*<button type="button" onClick={handleClickPlus}>+</button>*/}
            {/*<button type="button" onClick={resetStrawberries}>Reset</button>*/}

        </>
    );
}

export default App;
