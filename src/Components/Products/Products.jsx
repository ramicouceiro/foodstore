import React, { useEffect } from "react";
import { useState } from "react";
import {
  CategoryBtn,
  CategoryContainer,
  MenuSection,
  Productscontainer,
  CategoryTitle,
} from "./ProductsStyles";
import axios from "axios";
import ProductCard from "./ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("Pizzas");
  const getProducts = async () => {
    await axios.get(`./food/${category}.json`).then((res) => {
      setProducts(res.data);
    });
  };

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  return (
    <MenuSection>
      <CategoryContainer>
        <CategoryBtn onClick={() => setCategory("Pizzas")}>
          <img src='./img/porcion-de-pizza.png' alt='' />
          Pizza
        </CategoryBtn>
        <CategoryBtn onClick={() => setCategory("Breads")}>
          <img src='./img/panes.png' alt='' />
          Breads
        </CategoryBtn>
        <CategoryBtn onClick={() => setCategory("Chocolates")}>
          <img src='./img/chocolate.png' alt='' />
          Chocolates
        </CategoryBtn>
        <CategoryBtn onClick={() => setCategory("Drinks")}>
          <img src='./img/martini.png' alt='' />
          Drinks
        </CategoryBtn>
        <CategoryBtn onClick={() => setCategory("Burgers")}>
          <img src='./img/burguer.png' alt='' />
          Burgers
        </CategoryBtn>
      </CategoryContainer>
      <CategoryTitle>Choose {category}</CategoryTitle>
      <Productscontainer>
        {products.map((product) => {
          return <ProductCard key={product.id} {...product} />;
        })}
      </Productscontainer>
    </MenuSection>
  );
};

export default Products;
