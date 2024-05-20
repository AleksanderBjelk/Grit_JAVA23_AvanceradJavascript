import { useState } from "react";


function Button({isFirst, setIsFirst}) {



    const changeIsFirst = () => {
        setIsFirst(!isFirst)
        console.log(isFirst);
    }
    return ( 
        <button onClick={changeIsFirst}>Change isFirst</button>
     );
}

export default Button;