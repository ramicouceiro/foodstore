import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
  --bg-color: #fafafa;
  --nav-color: #22283d;
  --card-color: #ffffff;
  --text-color: #404040;
  --white-main: #ffffff;
  --btn-color: #ec7905;
  --category-color: #ebebeb; 
  --btn-hover: rgb(255, 147, 0, 0.2);
  --page-btn-color: #6d7286;
  --thin: 100;
  --light: 300;
  --regular: 400;
  --medium: 500;
  --bold: 700;
  --font: 'Source Code Pro', monospace;
}

.dark-theme-varaibles{
  --bg-color: #181a1e;
  --white-main: #202528;
  --text-color: #edeffd;
  --category-color: #2a2c30;
  --card-color: #2a2c30;
  --color-light: rgba(0, 0, 0, 0.4);
  --box-shadow: 0 2rem 3rem var(--color-light);
}
.theme-toggler{
  position: absolute;
  top: 1rem;
  left: 1rem;
  cursor: pointer;
  :hover{
    transform: scale(1.1);
  }
}

.cart-icon{
  display: none;
}
.show-cart{
  display: block;
}
.close-cart{
  opacity: 0;
}
.show-close{
  opacity: 0;
}
.cartProduct{
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
  padding: 0 1rem;
  width: 100%;
  
}

@media screen and (max-width: 1500px) {
  .cart-icon{
  display: flex;
  position: fixed;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
  z-index: 100;
}
  .close-cart{
  opacity: 1;
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
  z-index: 100;
  }
}

::-webkit-scrollbar {
  width: 8px;
}
.link{
  width: 100%;
}
/* Track */
::-webkit-scrollbar-track {
  background: var(--page-btn-color); 
  margin: 0 1rem;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--btn-color);
  border-radius: 10px;
  
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: var(--btn-hover);
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select: none;
    color: var(--text-color);
    transition: 250ms;
}
    html{
    scroll-behavior: smooth;
  }
    body {
    margin: 0;
    padding: 0;
    background: var(--bg-color);
    color: white;
    -webkit-tap-highlight-color: transparent;
    overflow-x: hidden;
    font-family: 'Source Code Pro', monospace;
    }
    body::-webkit-scrollbar {
      width: 0px;
    }
    a {
    text-decoration: none;
    }
    a:visited {
    color: white;
    }
    li {
    list-style: none;
    }

    .remove-btn:hover{
      color: red;
    }

    .hidden{
      display: none;
    }`;
