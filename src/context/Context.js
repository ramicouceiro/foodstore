import { createContext, useReducer } from "react";

export const CartContext = createContext();
export const Context = (props) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        const tempsate = state.filter((item) => item.id === action.payload.id);
        if (tempsate.length > 0) {
          return state;
        } else {
          console.log(...state, action.payload);
          return [...state, action.payload];
        }
      case "REMOVE_FROM_CART":
        break;

      case "CLEAR_CART":
        return [];
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, []);
  const info = { state, dispatch };
  return (
    <CartContext.Provider value={info}>{props.children}</CartContext.Provider>
  );
};
