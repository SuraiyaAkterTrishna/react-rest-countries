import React from 'react';
import { addToDb, removeFromDb } from '../../utilities/fakeDb';
import './Cosmetic.css';

const Cosmetic = (props) => {
    const {name, price, _id} = props.cosmetic;
    const addToCart = (id) => {
        addToDb(id);
    }
    const removeFromCart = (id) => {
        removeFromDb(id);
    }
   
    // const addToCartWithParams = () => addToCart(_id);
    return (
        <div className='cosmetic'>
            <h1>Name: {name}</h1>
            <p>Price: {price}</p>
            <small>Id: {_id}</small>
            
            <br />
            {/* <button onClick={addToCartWithParams}>Add to card</button> */}
            <button onClick={() => addToCart(_id)}>Add to cart</button>
            <button onClick={() => removeFromCart(_id)}>Remove From Cart</button>
        </div>
    );
};

export default Cosmetic;