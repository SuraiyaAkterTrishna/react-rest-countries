import React from 'react';
import './Country.css';

const Country = (props) => {
    return (
        <div className='country'>
            <h1>Name: {props.name}</h1>
            <h4>Population: {props.population}</h4>
            <p>Area: {props.area}</p>
        </div>
    );
};

export default Country;