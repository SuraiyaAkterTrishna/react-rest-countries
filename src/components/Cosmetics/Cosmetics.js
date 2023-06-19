import React from 'react';
import {add, multiply} from '../../utilities/calculate';
import Shoes from '../Shoes/Shoes';

const Cosmetics = () => {
    return (
        <div>
            <h1>all the products is : {add(10, 20)}</h1>
            <p>Price: {multiply(10, 30)}</p>
            <Shoes></Shoes>
        </div>
    );
};

export default Cosmetics;