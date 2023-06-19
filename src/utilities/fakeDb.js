const addToDb = (id) => {
    if(localStorage.getItem(id)){
        const quantity = localStorage.getItem(id);
        const newQuantity = parseInt(quantity) + 1;
        localStorage.setItem(id, newQuantity);
    }
    else{
        localStorage.setItem(id, 1);
    }
};
export {addToDb};