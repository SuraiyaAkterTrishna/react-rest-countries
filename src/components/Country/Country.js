import React from 'react';
import './Country.css';

const Country = (props) => {
    
    return (
        <div className='country'>
            <h1>Name: {props.country.name.common}</h1>
            <h4>Population: {props.country.population}</h4>
            <p>Area: {props.country.area}</p>
        </div>
    );
};

export default Country;