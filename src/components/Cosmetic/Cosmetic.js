import React from 'react';

const Cosmetic = (props) => {
    const {name, price, id} = props.cosmetic;
    return (
        <div>
            <h1>Name: {name}</h1>
            <p>Price: {price}</p>
            <small>Id: {id}</small>

        </div>
    );
};

export default Cosmetic;