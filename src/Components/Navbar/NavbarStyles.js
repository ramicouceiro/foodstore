import styled from "styled-components";

export const NavbarContainerStyled = styled.aside`
  width: 14%;
  height: 100vh;
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 30;
  background-color: var(--white-main);
  color: var(--text-color);
`;

export const LinksContainerStyled = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const LinkContainerStyled = styled.div`
  height: 90px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  font-weight: var(--bold);
  :hover {
    transition: 500ms;
    background: var(--btn-hover);
    color: var(--btn-color);
  }
`;
