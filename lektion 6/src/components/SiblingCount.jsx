function SiblingCount({setCounter, counter}) {

    function handleClick(){
        setCounter(counter+1)

    }
    return ( <button onClick={handleClick}>+</button> );
}

export default SiblingCount;