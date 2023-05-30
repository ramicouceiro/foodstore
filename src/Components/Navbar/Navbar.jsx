import { Link } from "react-router-dom";
import {
  AiFillBell,
  AiFillHome,
  AiFillClockCircle,
  AiFillPieChart,
  AiFillBook,
} from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { MdModeNight } from "react-icons/md";

import {
  LinkContainerStyled,
  LinksContainerStyled,
  NavbarContainerStyled,
} from "./NavbarStyles";
const Navbar = () => {
  const themeToggler = () => {
    document.body.classList.toggle("dark-theme-varaibles");
  };
  return (
    <>
      <NavbarContainerStyled>
        <LinksContainerStyled>
          <Link to='/home' className='link'>
            <LinkContainerStyled>
              <AiFillHome />
              Home
            </LinkContainerStyled>
          </Link>
          <Link to='/menu' className='link'>
            <LinkContainerStyled>
              <AiFillBook />
              Menu
            </LinkContainerStyled>
          </Link>
          <Link to='/menu' className='link'>
            <LinkContainerStyled>
              <BsFillCartFill />
              Order
            </LinkContainerStyled>
          </Link>
          <Link to='/menu' className='link'>
            <LinkContainerStyled>
              <AiFillClockCircle />
              History
            </LinkContainerStyled>
          </Link>
          <Link to='/menu' className='link'>
            <LinkContainerStyled>
              <AiFillPieChart />
              Report
            </LinkContainerStyled>
          </Link>
          <Link to='/menu' className='link'>
            <LinkContainerStyled>
              <AiFillBell />
              Alert
            </LinkContainerStyled>
          </Link>
          <MdModeNight onClick={themeToggler} className='theme-toggler' />
        </LinksContainerStyled>
      </NavbarContainerStyled>
    </>
  );
};

export default Navbar;
