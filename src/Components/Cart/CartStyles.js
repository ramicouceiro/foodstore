import styled from "styled-components";

export const CartContainer = styled.div`
  width: 20%;
  height: 100vh;
  background-color: var(--white-main);
  padding: 2rem;
  position: fixed;
  right: 0;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  @media screen and (max-width: 1500px) {
    display: none;
    width: 50%;
  }
  @media screen and (max-width: 1200px) {
    z-index: 50;
  }
  @media screen and (max-width: 900px) {
    width: 100%;
    z-index: 50;
  }
`;

export const CartHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CartTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: var(--bold);
`;

export const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  overflow-y: scroll;
  height: 100%;
  max-height: 70vh;
`;

export const CartProduct = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 150px;
  border-bottom: 1px solid var(--page-btn-color);
  img {
    width: 40px;
    height: 40px;
    border-radius: 10px;
  }
  h2 {
    font-size: 1rem;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    width: 50%;
    gap: 0.5rem;
  }

  span > button {
    width: 20px;
    height: 20px;
    border-radius: 5px;
    border: none;
    background-color: var(--btn-color);
    cursor: pointer;
    color: white;
  }

  span > button:nth-child(1) {
    margin-right: 0.5rem;
  }
  span > button:nth-child(3) {
    margin-left: 0.5rem;
  }

  div > p {
    font-size: 1.2rem;
    font-weight: var(--bold);
    color: var(--btn-color);
  }
`;

export const ClearCart = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  margin-top: 5px;
  height: 40px;
  button {
    color: white;
    width: 25%;
    height: 20px;
    border-radius: 10px;
    border: none;
    background-color: red;
    cursor: pointer;
    font-family: var(--font);
    font-size: 0.75rem;
  }
`;

export const PlaceOrder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 2rem;
  button {
    font-family: var(--font);
    color: white;
    width: 100%;
    height: 50px;
    border-radius: 10px;
    border: none;
    background-color: var(--btn-color);
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: var(--bold);
  }
`;
