import { createContext, useState } from "react";

export const CartContext = createContext()

export function CartProvider({children}) {
    const [counter, setCounter] = useState(0)
    return <CartContext.Provider value={{setCounter, counter}}>{children}</CartContext.Provider>
}