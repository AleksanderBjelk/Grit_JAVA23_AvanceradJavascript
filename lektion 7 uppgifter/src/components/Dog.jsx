import { useEffect, useState } from "react";
import { getRandomDogImage } from "../utils/dogApi";




function Dog() {
    const [dogImageUrl, setDogImgUrl] = useState('');
    
    useEffect(( )=> {
    getRandomDogImage().then(imgUrl => setDogImgUrl(imgUrl))
    }, [])
    return ( <div>
        <img src={dogImageUrl} alt="" />
    </div> );
}

export default Dog;