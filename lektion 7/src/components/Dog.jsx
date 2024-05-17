import { useEffect, useState } from "react";
import { getAllBreeds, getDogImage } from "../utils/dogApi";

function Dog() {
    const [breeds, setBreeds] = useState([]);
    const [userSelectBreed, setUserSelectBreed] = useState('hound');
    const [dogImgUrl, setDogImgUrl] = useState('');

    useEffect(() => {
        getAllBreeds().then(breedsArray => setBreeds(breedsArray))
    }, []);

    useEffect(()=>{
        getDogImage(userSelectBreed).then(imgUrl => setDogImgUrl(imgUrl))
    }, [userSelectBreed])

    function handleSelect(event){
        //console.log(event.target.value);
        setUserSelectBreed(event.target.value);
    }

    return (
        <div>
            <select onChange={handleSelect}>
              {breeds.map( breed => <option value={breed} key={breed}>{breed}</option>)}
            </select>
            <div>
                <img
                    src={dogImgUrl}
                    alt=""
                />
            </div>
        </div>
    );
}

export default Dog;
