import { useRef, useState } from "react";
import Result from "./Result.jsx";

function Guess() {

    const [guess, setGuess] = useState(0);


    const [isCorrect, setIsCorrect] = useState(false);

    const numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const randomNumber = useRef(Math.floor(Math.random()*10)+1);
    console.log(randomNumber);

    function handleGuess(event){
        console.log(event.target.innerText == randomNumber.current);
        setGuess(event.target.innerText);
        setIsCorrect(event.target.innerText == randomNumber.current)

        if(isCorrect) randomNumber.current = Math.floor(Math.random()*10)+1;
        console.log(randomNumber.current);
    }
    
    return (
        <div>
            {numberArr.map(num =>  <button onClick={handleGuess}>{num}</button>)}
            <Result number={guess} isCorrect={isCorrect} />
        </div>
    );
}

export default Guess;
