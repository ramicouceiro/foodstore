import React from "react";
import {
  CartContainer,
  CartHeader,
  CartItems,
  CartProduct,
  CartTitle,
  ClearCart,
  PlaceOrder,
} from "./CartStyles";
import { useContext } from "react";
import { CartContext } from "../../context/Context";
import { AiOutlineEdit } from "react-icons/ai";

const Cart = () => {
  const GlobalState = useContext(CartContext);
  const state = GlobalState.state;
  const dispatch = GlobalState.dispatch;
  return (
    <CartContainer className='cart'>
      <CartHeader>
        <CartTitle>Cart</CartTitle>
      </CartHeader>
      <CartItems>
        {state.map((product, quantity) => {
          return (
            <CartProduct key={product.id}>
              <img src={product.img} alt={product.name} />
              <div>
                <h2>{product.name}</h2>
                <p>${product.price}</p>
                <span>
                  <button>-</button>
                  <span>1</span>
                  <button>+</button>
                </span>
              </div>
              <AiOutlineEdit />
            </CartProduct>
          );
        })}
      </CartItems>
      <h2>Total: ${state.reduce((acc, product) => acc + product.price, 0)}</h2>
      <PlaceOrder>
        <button
          onClick={() => {
            dispatch({ type: "CLEAR_CART" });
          }}
        >
          Place order
        </button>
      </PlaceOrder>
      <ClearCart>
        <button
          onClick={() => {
            dispatch({ type: "CLEAR_CART" });
          }}
        >
          Clear cart
        </button>
      </ClearCart>
    </CartContainer>
  );
};

export default Cart;
