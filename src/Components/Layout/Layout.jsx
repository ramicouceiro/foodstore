import React from "react";
import styled from "styled-components";

const LayoutStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

export const Layout = ({ children }) => {
  return <LayoutStyled>{children}</LayoutStyled>;
};
