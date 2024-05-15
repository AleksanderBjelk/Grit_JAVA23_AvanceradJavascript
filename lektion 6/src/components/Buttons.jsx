import { useState } from "react";

function Button() {
    // let cssColor = "bg-blue";

    const [cssColor, setCssColor] = useState("bg-blue");

    const [counter, setCounter] = useState(0);

    function handleClick(event) {
        setCounter(counter + 1);
        console.log(event.target);
    }

    function handleEnter() {
        setCssColor("bg-pink");
        console.log("enter", cssColor);
    }
    function handleLeave() {
        setCssColor("bg-blue");
        console.log("leave", cssColor);
    }

    return (
        <button
            onClick={handleClick}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            className={cssColor}
        >
            {counter}
        </button>
    );
}

export default Button;
