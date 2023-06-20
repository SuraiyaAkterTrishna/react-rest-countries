/* const numbers = [10, 20, 30, 40, 50];
const reducer = (previous, current) => previous + current;
const total = numbers.reduce(reducer, 0); */
/* 
const reduceSum = (previous , current) => previous + current.price;
const total = items.reduce(reduceSum, 0)
console.log(total); */

const getTotalPrice = products => {
    const reducer = (previous, current) => previous + current.price;
    const total = products.reduce(reducer, 0);
    return total;
}
export {getTotalPrice as getTotal};