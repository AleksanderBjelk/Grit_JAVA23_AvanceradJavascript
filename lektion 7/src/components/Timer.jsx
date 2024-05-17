import { useEffect, useState } from "react";

function Timer() {

    const [seconds, setSeconds] = useState(0);

    useEffect(()=>{
        setInterval( () =>{ setSeconds(seconds => seconds+1)}, 1000 );
    }, [])

    return ( <p>{seconds} has passed.</p> );
}

export default Timer;