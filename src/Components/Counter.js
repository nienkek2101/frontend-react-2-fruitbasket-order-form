import React from 'react';
import './Counter.css';

/* Poging 1 component maken*/
// function Counter({ fruitName, fruitImage, buttonType, fruitValue, setFruitValue }) {
//
//     return (
//         <>
//             <article>
//                 {fruitImage}
//                 <h3>{fruitName}</h3>
//                 <button
//                     type={buttonType}
//                     onClick={() => setFruitCounterValue(fruitCounterValue - 1)}
//                     disabled={fruitCounterValue === 0}
//                 >
//                     -
//                 </button>
//                 <p>{fruitCounterValue}</p>
//                 <button
//                     type={buttonType}
//                     onClick={() => setFruitCounterValue(fruitCounterValue + 1)}
//                 >
//                     +
//                 </button>
//                 <button
//                     type="button"
//                     onClick={setFruitCounterValue(fruitCounterValue === 0)}
//                 >
//                     Reset
//                 </button>
//             </article>
//
//         </>
//     );
// }
//
// export default Counter;

function Counter({ fruitName, fruitImage, buttonType, fruitValue, setFruitValue }) {

    return (
        <>
            <article className={fruitName}>
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
            </article>

        </>
    );
}

export default Counter;