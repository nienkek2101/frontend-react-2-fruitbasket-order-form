import React, { useState } from 'react';

function Counter({ fruitName, fruitImage, buttonType }) {

    const [fruitCounterValue, setFruitCounterValue] = useState(0);

    return (
        <>
            <article>
                {fruitImage}
                <h3>{fruitName}</h3>
                <button
                    type={buttonType}
                    onClick={() => setFruitCounterValue(fruitCounterValue - 1)}
                    disabled={fruitCounterValue === 0}
                >
                    -
                </button>
                <p>{fruitCounterValue}</p>
                <button
                    type={buttonType}
                    onClick={() => setFruitCounterValue(fruitCounterValue + 1)}
                >
                    +
                </button>
                <button
                    type="button"
                    onClick={setFruitCounterValue(fruitCounterValue === 0)}
                >
                    Reset
                </button>
            </article>

        </>
    );
}

export default Counter;