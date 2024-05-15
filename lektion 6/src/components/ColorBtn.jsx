function ColorBtn({color, setCssClass}) {

function handleClick(event){
    console.log(event.target.innerText);
    setCssClass(color)
}

    return ( 
        <button onClick={handleClick}>{color}</button>
     );
}

export default ColorBtn;