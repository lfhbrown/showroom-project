import { styled } from "styled-components";
import logo from "../assets/deVOL-logo.svg";

const Header = styled.header`
  width: 100%;
  display: flex; //Makes list horizontal
  flex-direction: column;
  align-items: center;
`;
const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: sticky;
  background-color: #f2f2f2;

  ul {
    display: flex;
    list-style: none; /* Remove bullets */
    margin: 0;
    cursor: pointer;
  }
  li {
    position: relative; /* Enables submenu positioning */
    padding: 15px 20px;
    &:hover {
      background-color: #27333f;
      color: #ffffff;
    }
  }
`;
const Nav = styled.nav`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  display: flex;
  /* border: 1px solid black; */
`;

const Logo = styled.img`
  width: 245px; /* Adjust this value to make the logo smaller */
  height: auto; /* Maintains aspect ratio */
  padding-bottom: 10px;
  cursor: pointer;
`;

const SubMenu = styled.div`
  opacity: 0;
  pointer-events: none;
  position: absolute;
  max-width: 1100px !important;
  width: 100%;
  left: 0;
  right: 0;
  margin: 0.8em auto;
  background-color: #dedede;
  padding: 1em 2em 1em 3em;
  z-index: 9999;
  box-sizing: border-box;
`;

const Navbar = () => {
  return (
    <div>
      <Header>
        <a href="">
          <Logo src={logo} alt="" />
        </a>

        <NavContainer>
          <Nav>
            <ul>
              <li>
                <a>Kitchens</a>
                <SubMenu>
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </SubMenu>
              </li>
              <li>
                <a>Design Service</a>
              </li>
              <li>
                <a>Brochure & Book</a>
              </li>
              <li>
                <a>Shop</a>
              </li>
              <li>
                <a>About Us</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
              <li>
                <a>Basket</a>
              </li>
            </ul>
          </Nav>
        </NavContainer>
      </Header>
    </div>
  );
};

export default Navbar;
