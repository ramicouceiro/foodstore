import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
  --bg-color: #181a1e;
  --nav-color: #22283d;
  --card-color: #2a2c30;
  --text-color: #edeffd;
  --white-main: #202528;
  --btn-color: #ec7905;
  --category-color: #2a2c30;
  --btn-hover: rgb(255, 147, 0, 0.2);
  --page-btn-color: #6d7286;
  --thin: 100;
  --light: 300;
  --regular: 400;
  --medium: 500;
  --bold: 700;
  --font: 'Source Code Pro', monospace;
}

.light-theme-varaibles{
  --bg-color: #fafafa;
  --white-main: #ffffff;
  --text-color: #404040;
  --category-color: #ebebeb; 
  --card-color: #ffffff;
  --color-light: rgba(0, 0, 0, 0.4);
  --box-shadow: 0 2rem 3rem var(--color-light);
}
.theme-toggler{
  position: absolute;
  top: 1rem;
  right: 46%;
  cursor: pointer;
  :hover{
    transform: scale(1.1);
  }
}
.logo{
  width: 5rem;
  position: absolute;
  top: 1rem;
  left: 35%;
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
    }
    
    .switch {
  position: relative;
  width: 130px;
  height: 50px;
  margin: 0px;
  appearance: none;
  -webkit-appearance: none;
  background-color: rgb(4,52,73);
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 25px;
  transition: background-image .7s ease-in-out;
  outline: none;
  cursor: pointer;
  overflow: hidden;
  scale: 0.6;
  position: absolute;
  bottom: 1rem;
  right: 4rem;
}

.switch:checked {
  background-color: rgb(0, 195, 255);
  background-size: cover;
  transition: background-image 1s ease-in-out;
}

.switch:after {
  content: '';
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background-color: #fff;
  position: absolute;
  left: 2px;
  top: 2px;
  transform: translateX(0px);
  animation: off .7s forwards cubic-bezier(.8, .5, .2, 1.4);
  box-shadow: inset 5px -5px 4px rgba(53, 53, 53, 0.3);
}

@keyframes off {
  0% {
    transform: translateX(80px);
    width: 46px;
  }

  50% {
    width: 75px;
    border-radius: 25px;
  }

  100% {
    transform: translateX(0px);
    width: 46px;
  }
}

.switch:checked:after {
  animation: on .7s forwards cubic-bezier(.8, .5, .2, 1.4);
  box-shadow: inset -5px -5px 4px rgba(53, 53, 53, 0.3);
}

@keyframes on {
  0% {
    transform: translateX(0px);
    width: 46px;
  }

  50% {
    width: 75px;
    border-radius: 25px;
  }

  100% {
    transform: translateX(80px);
    width: 46px;
  }
}

.switch:checked:before {
  content: '';
  width: 15px;
  height: 15px;
  border-radius: 50%;
  position: absolute;
  left: 15px;
  top: 5px;
  transform-origin: 53px 10px;
  background-color: transparent;
  box-shadow: 5px -1px 0px #fff;
  filter: blur(0px);
  animation: sun .7s forwards ease;
}

@keyframes sun {
  0% {
    transform: rotate(170deg);
    background-color: transparent;
    box-shadow: 5px -1px 0px #fff;
    filter: blur(0px);
  }

  50% {
    background-color: transparent;
    box-shadow: 5px -1px 0px #fff;
    filter: blur(0px);
  }

  90% {
    background-color: #f5daaa;
    box-shadow: 0px 0px 10px #f5deb4,
    0px 0px 20px #f5deb4,
    0px 0px 30px #f5deb4,
     inset 0px 0px 2px #efd3a3;
    filter: blur(1px);
  }

  100% {
    transform: rotate(0deg);
    background-color: #f5daaa;
    box-shadow: 0px 0px 10px #f5deb4,
    0px 0px 20px #f5deb4,
    0px 0px 30px #f5deb4,
     inset 0px 0px 2px #efd3a3;
    filter: blur(1px);
  }
}

.switch:before {
  content: '';
  width: 15px;
  height: 15px;
  border-radius: 50%;
  position: absolute;
  left: 15px;
  top: 5px;
  filter: blur(1px);
  background-color: #f5daaa;
  box-shadow: 0px 0px 10px #f5deb4,
0px 0px 20px #f5deb4,
0px 0px 30px #f5deb4,
 inset 0px 0px 2px #efd3a3;
  transform-origin: 53px 10px;
  animation: moon .7s forwards ease;
}

@keyframes moon {
  0% {
    transform: rotate(0deg);
    filter: blur(1px);
  }

  50% {
    filter: blur(1px);
  }

  90% {
    background-color: transparent;
    box-shadow: 5px -1px 0px #fff;
    filter: blur(0px);
  }

  100% {
    transform: rotate(170deg);
    background-color: transparent;
    box-shadow: 5px -1px 0px #fff;
    filter: blur(0px);
  }
}
`;
