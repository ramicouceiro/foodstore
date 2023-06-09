import styled from "styled-components";

export const Productscontainer = styled.div`
  display: grid;
  place-items: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  row-gap: 2rem;
  width: 100%;
`;

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  background: var(--card-color);
  width: 300px;
  border-radius: 30px;
  padding: 1rem;
  height: 100%;
  position: relative;
  gap: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  img {
    width: 100%;
    margin-bottom: 1rem;
    border-radius: 30px;
  }
  h2 {
    font-size: 1.3rem;
    margin: 0;
    color: var(--text-color);
    font-weight: var(--bold);
  }
`;

export const ProductP = styled.p`
  color: ${(props) => (props.price ? "var(--btn-color)" : "white")};
  font-size: ${(props) => (props.price ? "1.5rem" : "0.8rem")};
  font-weight: ${(props) => (props.price ? "var(--bold)" : "var(--light)")};
  max-width: 60%;
`;

export const MenuSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
  width: 75%;
  margin-top: 10rem;
  margin-bottom: 1rem;
  @media screen and (max-width: 1500px) {
    width: 100%;
  }
`;

export const CategoryContainer = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;

  @media screen and (max-width: 1500px) {
    overflow-x: scroll;
    width: 100%;
    ::-webkit-scrollbar {
      margin-top: 1rem;
      height: 5px;
    }
  }
`;

export const CategoryBtn = styled.div`
  background-color: ${(props) =>
    props.active ? "var(--btn-hover)" : "var(--category-color)"};
  color: var(--text-color);
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  cursor: pointer;
  border-radius: 10px;
  font-weight: var(--bold);
  img {
    width: 20px;
  }
  :hover {
    transition: 250ms;
    background: var(--btn-hover);
    color: var(--btn-color);
  }
`;

export const CategoryTitle = styled.h1`
  font-size: 2rem;
`;

export const ProductCartIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 10px;
  padding: 0.75rem 1rem;
  background: var(--btn-color);
  :hover {
    scale: 1.1;
  }
  .cartIcon {
    font-size: 1.3rem;
    margin-right: 0.1rem;
  }
`;
