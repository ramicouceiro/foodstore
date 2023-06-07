import { Link } from "react-router-dom";
import {
  AiFillBell,
  AiFillHome,
  AiFillClockCircle,
  AiFillPieChart,
  AiFillBook,
} from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import ThemeTogglerBtn from "../ThemeToggler/ThemeTogglerBtn";
import {
  LinkContainerStyled,
  LinksContainerStyled,
  NavbarContainerStyled,
} from "./NavbarStyles";

const Navbar = () => {
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
          <ThemeTogglerBtn />
        </LinksContainerStyled>
      </NavbarContainerStyled>
    </>
  );
};

export default Navbar;
