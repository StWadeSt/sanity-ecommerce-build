import React, {createContext, useContext, useState, useEffect} from "react";
import { Toast } from "react-hot-toast";

const Context = createContext();

export const StateContext = ({children}) =>{
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState();
    const [totalPrice, setTotalPrice] = useState();
    const [totalQuantity, setTotalQuantity] = useState();
    const [qty, setQty] = useState(1);

    const increaseQty = () =>{
        setQty((prevQty) => prevQty + 1);
    }
    const decreaseQty = () =>{
        setQty((prevQty) => {
            if(prevQty -1 < 1) return 1;
            else {return prevQty - 1}
        });
    }
    return (
        <Context.Provider
            value={{
                showCart,
                cartItems,
                totalPrice,
                totalQuantity,
                qty, 
                increaseQty,
                decreaseQty
            }}
        >
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);