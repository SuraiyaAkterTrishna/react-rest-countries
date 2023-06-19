import React from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';

const Cosmetics = () => {
    const cosmetics = [
        {id: 1, name: 'Alta', price: 100},
        {id: 2, name: 'Churi', price: 200},
        {id: 3, name: 'Nailpolis', price: 300},
        {id: 4, name: 'Lipstick', price: 400},
        {id: 5, name: 'Ring', price: 500},
    ];
    return (
        <div>
            {
                cosmetics.map(cosmetic => <Cosmetic cosmetic = {cosmetic}></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;