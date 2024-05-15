import { useState } from "react";
import SiblingCount from "./SiblingCount.jsx";
import SiblingDigit from "./SiblingDigit.jsx";

function SiblingContainer() {

    const [counter, setCounter] = useState(0);


    return (
        <div>
            <SiblingCount setCounter={setCounter} counter={counter}/>
            <SiblingDigit counter={counter}/>
        </div>
    );
}

export default SiblingContainer;
