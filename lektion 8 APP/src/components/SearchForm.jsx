function SearchForm({ setSearchHistory }) {
    let tempLanguage = "";

    function handleChange(event) {
        tempLanguage = event.target.value;
        //console.log(tempLanguage);
    }

    function handleSubmit(event) {
        event.preventDefault();
        event.target.reset();
       // console.log(tempLanguage);

        setSearchHistory((current) => {
            const newState = [...current]; //klona arrayen
            newState.push(tempLanguage);
            if (newState.length > 3) newState.shift();

            //console.log(newState);
            return newState;
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="English" onChange={handleChange} />
            <button>Get countries</button>
        </form>
    );
}

export default SearchForm;
