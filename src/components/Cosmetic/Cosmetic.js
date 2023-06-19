import React from 'react';
import './Cosmetic.css';

const Cosmetic = (props) => {
    const {name, price, _id} = props.cosmetic;
    const addToCart = (id) => {
        console.log("item added", id);
    }
    // const addToCartWithParams = () => addToCart(_id);
    return (
        <div className='cosmetic'>
            <h1>Name: {name}</h1>
            <p>Price: {price}</p>
            <small>Id: {_id}</small>
            <br />
            {/* <button onClick={addToCartWithParams}>Add to card</button> */}
            <button onClick={() => addToCart(_id)}>Add to card</button>
        </div>
    );
};

export default Cosmetic;