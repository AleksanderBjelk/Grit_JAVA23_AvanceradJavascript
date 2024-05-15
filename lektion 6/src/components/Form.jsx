import { useState } from "react";

function Form() {

    const [text, setText] = useState('Första texten')

    let tempText = '';

    function handleChange(event){
        tempText = event.target.value;
        // console.log(tempText);
    }

    function handleSubmit(event){
        event.preventDefault();
        setText(tempText);
    }


    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" />
                <button>ChangeText</button>
            </form>
            <h1>{text}</h1>


        </div>
     );
}

export default Form;