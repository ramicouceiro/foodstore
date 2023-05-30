import React from "react";
import { Product, ProductP } from "./ProductsStyles";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { ProductCartIcon } from "./ProductsStyles";
import { useContext } from "react";
import { CartContext } from "../../context/Context";

const ProductCard = (product) => {
  const GlobalState = useContext(CartContext);
  const dispatch = GlobalState.dispatch;
  // console.log(GlobalState);
  return (
    <Product>
      <img src={product.img} alt={product.name} />
      <h2>{product.name}</h2>
      <ProductP price>${product.price}</ProductP>
      <ProductCartIcon
        onClick={() => {
          dispatch({ type: "ADD_TO_CART", payload: product });
        }}
      >
        <AiOutlineShoppingCart className='cartIcon' />
      </ProductCartIcon>
    </Product>
  );
};

export default ProductCard;
