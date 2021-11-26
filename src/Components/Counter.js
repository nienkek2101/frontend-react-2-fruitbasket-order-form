import React from 'react';

function Counter({ fruitName, fruitImage, buttonType, fruitValue, setFruitValue }) {

    return (
        <>
            <article>
                {fruitImage}
                <h3>{fruitName}</h3>
                <button
                    type={buttonType}
                    onClick={() => setFruitValue(fruitValue - 1)}
                    disabled={fruitValue === 0}
                >
                    -
                </button>
                <p>{fruitValue}</p>
                <button
                    type={buttonType}
                    onClick={() => setFruitValue(fruitValue + 1)}
                >
                    +
                </button>
                <button
                    type="button"
                    onClick={() => setFruitValue(0)}
                >
                    Reset
                </button>
                {/*<button*/}
                {/*    type={buttonType}*/}
                {/*    onClick={() => setFruitCounterValue(fruitCounterValue - 1)}*/}
                {/*    disabled={fruitCounterValue === 0}*/}
                {/*>*/}
                {/*    -*/}
                {/*</button>*/}
                {/*<p>{fruitCounterValue}</p>*/}
                {/*<button*/}
                {/*    type={buttonType}*/}
                {/*    onClick={() => setFruitCounterValue(fruitCounterValue + 1)}*/}
                {/*>*/}
                {/*    +*/}
                {/*</button>*/}
                {/*<button*/}
                {/*    type="button"*/}
                {/*    onClick={setFruitCounterValue(fruitCounterValue === 0)}*/}
                {/*>*/}
                {/*    Reset*/}
                {/*</button>*/}

            </article>

        </>
    );
}

export default Counter;