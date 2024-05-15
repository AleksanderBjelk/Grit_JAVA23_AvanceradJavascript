import { useState } from "react";

function Form() {

    
    const [textArr, setTextArr] = useState([])

    let tempText = '';

    function handleChange(event){
        tempText = event.target.value;
        //  console.log(tempText);
    }

    function handleSubmit(event){
        event.preventDefault();
        event.target.reset();

        const textArrClone = [...textArr]

        textArrClone.push(tempText);
        setTextArr(textArrClone);
        console.log(textArrClone);
  
    }


    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" />
                <button>ChangeText</button>
            </form>
            {textArr.map(text => <h1>{text}</h1>)}
            


        </div>
     );
}

export default Form;