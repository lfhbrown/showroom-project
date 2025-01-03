import { styled } from "styled-components";
import abc from "../assets/small abc logo.png";

const Header = styled.header`
  width: 100%;
  display: flex; //Makes list horizontal
  flex-direction: column;
  align-items: center;
`;
const NavContainer = styled.div`
  display: flex;
  position: sticky;

  ul {
    display: flex;
    list-style: none; /* Remove bullets */
    padding: 25px;
    margin: 0;
    gap: 50px; /* Add space between navigation items */
    cursor: pointer;
  }
  li {
    position: relative; /* Enables submenu positioning */
    padding: 15px 20px;
    &:hover {
      background-color: #aba9a9;
    }
  }
`;
const Nav = styled.nav`
  display: flex;
  /* border: 1px solid black; */
`;

// const DropDown = styled.h3`
//   position: relative;
//   display: flex;
//   align-items: center;
//   &:hover {
//     background-color: #aba9a9;
//   }

//   ul {
//     display: none; /* Hidden by default */
//     align-content: center;
//     align-items: center;
//     flex-direction: column; /* Arrange submenu items vertically */
//     position: absolute;
//     top: 100%; /* Position below parent */
//     left: 0;
//     list-style: none;
//     background-color: white;
//     margin: 0;
//     padding: 0;
//     box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Optional shadow */
//     z-index: 1000;
//     min-width: fit-content; /* Ensures consistent width for the dropdown */
//   }

//   ul li {
//     padding: 10px 10px;
//     white-space: nowrap; /*Prevent wrapping*/
//     justify-content: flex-start; /* Align text to the left */

//     &:hover {
//       background-color: #aba9a9;
//     }
//   }

//   &:hover ul {
//     display: flex; /* Show submenu on hover */
//   }
// `;
const DropDown = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start; /* Align text to the left */
  cursor: pointer;
  padding: 15px 20px;

  img {
    width: 100px;
    object-fit: cover;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  &:hover {
    background-color: #aba9a9; /* Independent hover for dropdown */
  }

  ul {
    display: none; /* Hidden by default */
    flex-direction: column; /* Arrange submenu items vertically */
    position: absolute;
    top: 100%; /* Position below parent. The extra % creates space between navbar and submenu  */
    left: 0;
    list-style: none;
    background-color: white;
    margin: 0;
    padding: 5px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Optional shadow */
    z-index: 1000;
    min-width: 200px; /* Set a fixed width for alignment consistency */
  }

  ul li {
    padding: 10px 15px; /*Add padding for spacing */
    white-space: nowrap; /* Prevent wrapping */
    text-align: left; /* Ensure text aligns left */
    cursor: pointer;

    &:hover {
      background-color: #d1d1d1; /* Independent hover for submenu items */
    }
  }

  &:hover ul {
    display: flex; /* Show submenu on hover */
  }
`;
const Logo = styled.img``;
const Navbar = () => {
  return (
    <div>
      <Header>
        <Logo src={abc} alt="" />

        <NavContainer>
          <Nav>
            <ul>
              <DropDown>
                <div>Kitchens</div>
                <ul>
                  <li>Product 1</li>
                  <li>Product 2</li>
                  <li>Product 3</li>
                  <li>Product 4</li>
                </ul>
              </DropDown>
              <DropDown>
                Design Services
                <ul>
                  <li>Product 1</li>
                  <li>Product 2</li>
                  <li>Product 3</li>
                  <li>Product 4</li>
                </ul>
              </DropDown>
              <DropDown>
                Brochure & Book
                <ul>
                  <li>Product 1</li>
                  <li>Product 2</li>
                  <li>Product 3</li>
                  <li>Product 4</li>
                </ul>
              </DropDown>
              <DropDown>
                Shop
                <ul>
                  <li>Product 1</li>
                  <li>Product 2</li>
                  <li>Product 3</li>
                  <li>Product 4</li>
                </ul>
              </DropDown>
              <DropDown>
                About Us
                <ul>
                  <li>Product 1</li>
                  <li>Product 2</li>
                  <li>Product 3</li>
                  <li>Product 4</li>
                </ul>
              </DropDown>
              <DropDown>
                Contact
                <ul>
                  <li>Product 1</li>
                  <li>Product 2</li>
                  <li>Product 3</li>
                  <li>Product 4</li>
                </ul>
              </DropDown>
              <DropDown>
                Basket
                <ul>
                  <li>Product 1</li>
                  <li>Product 2</li>
                  <li>Product 3</li>
                  <li>Product 4</li>
                </ul>
              </DropDown>
            </ul>
          </Nav>
        </NavContainer>
      </Header>
    </div>
  );
};

export default Navbar;
