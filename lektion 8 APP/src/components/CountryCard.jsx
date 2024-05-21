function CountryCard({country}) {
  

    const {name, flags, region} = country;

    return ( 
        <div>

            <h1>{name.common}</h1>
            <h4>{region}</h4>
            <img src={flags.png} alt="" />

        </div>
     );
}

export default CountryCard;