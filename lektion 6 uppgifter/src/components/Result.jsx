function Result({number, isCorrect}) {

    const message = isCorrect ? ' är rätt! :D' : ' är fel...';


    return ( <div>

        <h3>{number + message}</h3>

    </div> );
}

export default Result;