import { createContext, useReducer } from "react";

export const CartContext = createContext();
export const Context = (props) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        const isInCart = state.find((item) => item.id === action.payload.id);
        if (isInCart) {
          return state.map((item) => {
            if (item.id === action.payload.id) {
              return { ...item, quantity: item.quantity + 1 };
            }
            return item;
          });
        } else {
          return [...state, { ...action.payload, quantity: 1 }];
        }
      case "REMOVE_FROM_CART":
        if (action.payload.quantity > 1) {
          return state.map((item) => {
            if (item.id === action.payload.id) {
              return { ...item, quantity: item.quantity - 1 };
            }
            return item;
          });
        } else {
          return state.filter((item) => item.id !== action.payload.id);
        }
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
