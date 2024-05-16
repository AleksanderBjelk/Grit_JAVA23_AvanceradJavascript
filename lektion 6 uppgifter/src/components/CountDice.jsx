import { useState } from "react";

function CountDice() {

    const [cssColor, setCssColor] = useState("bg-blue");
    const [count, setCount] = useState(1);

    function handleClick(event) {
        setCount(count+1);
        console.log(event.target);
    }
    function handleEnter() {
        setCssColor("bg-pink");
        console.log("enter", cssColor);
    }

    return (
        <div id="randomDiceNumbers">
            <button onClick={handleClick}  onMouseEnter={handleEnter} className={cssColor}> {count}</button>
        </div>
    );
}

export default CountDice;