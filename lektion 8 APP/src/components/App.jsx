import SearchForm from "./SearchForm";
import LastSearches from "./LastSearches";
import Error from "./Error";
import Loading from "./Loading";
import CountryCard from "./CountryCard";
import { useEffect, useState } from "react";
import getCountries from "../utils/restCountries";

export function App() {
    const [searchHistory, setSearchHistory] = useState(["english"]);
    const [countries, setCountries] = useState([]);
    const [status, setStatus] = useState("");

    useEffect(() => {
        const language = searchHistory[searchHistory.length - 1];

        setStatus("loading");
        getCountries(language).then((countries) => {
            setCountries(countries);
            setStatus("success");
        })
        .catch(()=>{
            setStatus('error')
        })
    }, [searchHistory]);

    return (
        <>
            <SearchForm setSearchHistory={setSearchHistory} />
            <LastSearches searchHistory={searchHistory} setSearchHistory={setSearchHistory}/>
            {status === "error" && <Error />}
            {status === "loading" && <Loading />}
            {status === "success" &&
                countries.map((country) => (
                    <CountryCard key={country.name.common} country={country} />
                ))}
        </>
    );
}
