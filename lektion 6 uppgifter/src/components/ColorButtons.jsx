import { useState } from "react";

function Colorbuttons() {

    const [cssColor, setCssColor] = useState("bg-white");

    function handleClickGreen(){
        setCssColor("bg-green");
        console.log("enter", cssColor);
    }
    function handleClickBlue(){
        setCssColor("bg-blue");
        console.log("enter", cssColor);
    }
    function handleClickRed(){
        setCssColor("bg-red");
        console.log("enter", cssColor);
    }


    return ( 
        <div>
    <button onClick={handleClickRed}>Red</button>
    <button onClick={handleClickGreen} >Green</button>
    <button onClick={handleClickBlue} >Blue</button>
    <div className={cssColor} id="colorComponent">{cssColor}</div>

    </div>


     );
}

export default Colorbuttons;