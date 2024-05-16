import { useState } from "react";
import RandomDice from "./RandomDice";
import CountDice from "./CountDice";

function DiceContainer() {
    return <div id="diceDiv">

        <RandomDice/>
        <RandomDice/>
        <RandomDice/>
        <RandomDice/>
        <RandomDice/>

        <br />
        <br />
        <CountDice/>
        <CountDice/>
        <CountDice/>
        <CountDice/>

    </div>;
}

export default DiceContainer;
