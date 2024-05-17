import CountDice from "./CountDice.jsx";
import DiceContainer from "./DiceContainer.jsx";
import RandomDice from "./RandomDice.jsx";
import BoxContainer from "./BoxContainer.jsx";
import GuessContainer from "./GuessContainer.jsx";


export function App() {
    return (
        <div className="diceDiv">
            <DiceContainer />
            <BoxContainer/>
            <GuessContainer/>
        </div>

        // <>
        // <h1>App</h1>
        // <p>test</p>
        // </>
    );
}
