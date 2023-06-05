import { createContext, useState } from "react";

export const BasketContext = createContext({
    basket: [],
    addBasket: (id) => { },
    removeBasket: (id) => { },
    removeQuantity: (index) => {},
    addQuantity: (index) => {},
    deleteMealFromBasket: (id) => {}
})



function BasketContextProvider({ children }) {
    const [basketItem, setBasketItem] = useState([]);

    const updateBasketItem = (obj) => {
        const index = basketItem.indexOf(obj);
        
        if(index > -1){
            basketItem[index].quantity = obj.quantity;
            setBasketItem((currenItems) => [...currenItems]);
        }
    }

    function removeQuantity(index){
        basketItem[index].quantity -= 1;
        setBasketItem((currenItems) => [...currenItems]);
    }
    function addQuantity(index){
        basketItem[index].quantity += 1;
        setBasketItem((currenItems) => [...currenItems]);
    }
    
    function addBasket(obj) {
        const existDoes = basketItem.find((item) => item.id === obj.id);
        if (existDoes) {
            existDoes.quantity += 1;
            updateBasketItem(existDoes);

        } else {
            setBasketItem((currentItem) => [...currentItem, obj]);
        }
    }

    function removeBasket(id) {
        setBasketMealId((currentBasketMealId) =>
            currentBasketMealId.filter((mealId) => mealId !== id))
    }

    function deleteMealFromBasket(id){
        setBasketItem(basketItem.filter((item) => item.id !== id));
    }

    const value = {
        basket: basketItem,
        addBasket: addBasket,
        removeBasket: removeBasket,
        removeQuantity: removeQuantity,
        addQuantity: addQuantity,
        deleteMealFromBasket: deleteMealFromBasket
    }

    return <BasketContext.Provider value={value}>{children}</BasketContext.Provider>
}

export default BasketContextProvider;