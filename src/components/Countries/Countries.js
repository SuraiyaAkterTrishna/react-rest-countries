import React, { useEffect, useState } from "react";
import Country from "../Country/Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div>
      <h1>Visiting All the countries of the world..</h1>
      <p>All Countries: {countries.length}</p>
      {countries.map((country) => (
        <Country
            key={country.cca3}
          country={country}
        ></Country>
      ))}
    </div>
  );
};

export default Countries;
