async function getCountries(language) {
    const url = `https://restcountries.com/v3.1/lang/${language}?fields=name,region,flags`;
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error(res.statusText);
    }

    const countries = await res.json();
    return countries;
}

export default getCountries;
