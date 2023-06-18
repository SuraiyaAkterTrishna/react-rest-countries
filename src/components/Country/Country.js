import React from 'react';
import './Country.css';

const Country = (props) => {
    const {area, name, population, flags} = props.country;
    console.log(props.country);
    return (
        <div className='country'>
            <h1>Name: {name.common}</h1>
            <img src={flags.png} alt="" />
            <h4>Population: {population}</h4>
            <p>Area: {area}</p>
        </div>
    );
};

export default Country;