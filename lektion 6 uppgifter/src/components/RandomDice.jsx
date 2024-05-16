import { useState } from "react";

function RandomDice() {
    const [randomNumber, setRandomNumber] = useState(0);
    const [cssColor, setCssColor] = useState("bg-blue");

    function handleClick(event) {
        setRandomNumber(Math.floor(Math.random() * 6) + 1);
        console.log(event.target);
    }
    function handleEnter() {
        setCssColor("bg-pink");
        console.log("enter", cssColor);
    }

    return (
        <div id="randomDiceNumbers">
            <button onClick={handleClick} onMouseEnter={handleEnter} className={cssColor}> {randomNumber}</button>
        </div>
    );
}

export default RandomDice;
