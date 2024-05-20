

function Number({ number }) {
    
    const randomNumber = number !== undefined ? number : Math.floor(Math.random()*100) + 1;
    const isEven = randomNumber % 2 === 0;

    console.log(randomNumber);

    let text = '';

    if(randomNumber<10){
        text = 'mindre än 10';
    } else if (randomNumber > 50 && randomNumber < 60){
        text = 'mellan 50 och 60';
    } else if (randomNumber > 100){
        text='mer än 100';
    }

    return (
        <>
            {isEven ? <h1>Jämt</h1> : <h1>ojämnt</h1>}
            <p>{text}</p>
        </>
    );
}

export default Number;
