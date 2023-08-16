import { createContext, useContext, useReducer } from "react";
const CartContext = createContext();
const CartDispatcher = createContext();

const initialState = {
    cart:[],
    total:0
}


const ContextProvider = ({ children }) => {

    const [value,dispatch] = useReducer(reducerHandler,initialState)

  return (
      <CartContext.Provider value={value}>
      <CartDispatcher.Provider value={dispatch}>
        {children}
      </CartDispatcher.Provider>
    </CartContext.Provider>
  );
};

export default ContextProvider;
export const useCart = ()=> useContext(CartContext);
export const useCartDispatcher =()=> useContext(CartDispatcher);
