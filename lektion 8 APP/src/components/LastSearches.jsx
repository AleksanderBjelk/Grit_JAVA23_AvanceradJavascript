function LastSearches({searchHistory, setSearchHistory}) {
//const searchHistory = ['spanish', 'turkish', 'arabic']

function handleClick(event) {
   
   // console.log(tempLanguage);

    setSearchHistory((current) => {
        const newState = [...current]; //klona arrayen
        newState.push(event.target.innerText.trim());
        if (newState.length > 3) newState.shift();

        //console.log(newState);
        return newState;
    });
}

    return ( <div>
        {searchHistory.map((language, i) => <span onClick={handleClick} key={i}> {language}</span>)}
    </div> );
}

export default LastSearches;