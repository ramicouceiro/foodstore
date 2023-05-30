import React from "react";
import Products from "../../Components/Products/Products";
import styled from "styled-components";
import Cart from "../../Components/Cart/Cart";
import { BsFillCartCheckFill } from "react-icons/bs";
const MenuWrapper = styled.div`
  display: flex;
  margin-left: 15%;
`;

const Menu = () => {
  const toggleCart = () => {
    document.querySelector(".cart").classList.toggle("show-cart");
  };
  return (
    <MenuWrapper>
      <BsFillCartCheckFill className='cart-icon' onClick={toggleCart} />
      <Products />
      <Cart toggleCart={toggleCart} />
    </MenuWrapper>
  );
};

export default Menu;
