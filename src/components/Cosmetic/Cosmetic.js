import React from 'react';

const Cosmetic = (props) => {
    const {name, price, _id} = props.cosmetic;
    return (
        <div>
            <h1>Name: {name}</h1>
            <p>Price: {price}</p>
            <small>Id: {_id}</small>

        </div>
    );
};

export default Cosmetic;