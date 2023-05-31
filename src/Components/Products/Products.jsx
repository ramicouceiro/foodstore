import { useState } from "react";
import {
  CategoryBtn,
  CategoryContainer,
  MenuSection,
  Productscontainer,
  CategoryTitle,
} from "./ProductsStyles";
import ProductCard from "./ProductCard";
import pizzas from "../../food/pizzas.json";
import breads from "../../food/breads.json";
import chocolates from "../../food/chocolates.json";
import drinks from "../../food/drinks.json";
import burgers from "../../food/burgers.json";

const Products = () => {
  const [products, setProducts] = useState(pizzas);
  const [category, setCategory] = useState("Pizzas");
  return (
    <MenuSection>
      <CategoryContainer>
        <CategoryBtn
          onClick={() => {
            setProducts(pizzas);
            setCategory("Pizzas");
          }}
        >
          <img src='./img/porcion-de-pizza.png' alt='' />
          Pizza
        </CategoryBtn>
        <CategoryBtn
          onClick={() => {
            setProducts(breads);
            setCategory("Breads");
          }}
        >
          <img src='./img/panes.png' alt='' />
          Breads
        </CategoryBtn>
        <CategoryBtn
          onClick={() => {
            setProducts(chocolates);
            setCategory("Chocolates");
          }}
        >
          <img src='./img/chocolate.png' alt='' />
          Chocolates
        </CategoryBtn>
        <CategoryBtn
          onClick={() => {
            setProducts(drinks);
            setCategory("Drinks");
          }}
        >
          <img src='./img/martini.png' alt='' />
          Drinks
        </CategoryBtn>
        <CategoryBtn
          onClick={() => {
            setProducts(burgers);
            setCategory("Burgers");
          }}
        >
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
