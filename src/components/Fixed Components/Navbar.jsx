import { styled } from "styled-components";

const Header = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;

  h1 {
    border: 1px solid black;
  }
`;
const NavContainer = styled.div`
  display: flex;
  ul {
    display: flex;
    list-style: none; /* Remove bullets */
  }
  li {
    padding: 15px;
  }
`;
const Cart = styled.div`
  display: flex;
  align-items: center;
  padding-left: 50px;

  a {
    text-decoration: none;
  }
`;
const Nav = styled.nav`
  display: flex; //Makes list horizontal
  border: 1px solid black;
`;

const Navbar = () => {
  return (
    <div>
      <Header>
        <h1>Logo</h1>
        <NavContainer>
          <Nav>
            <ul>
              <li>Kitchens</li>
              <li>Design Services</li>
              <li>Brochure & Book</li>
              <li>Shop</li>
              <li>About Us</li>
              <li>Contact</li>
            </ul>
            <Cart>
              <a href="">Basket (0)</a>
            </Cart>
          </Nav>
        </NavContainer>
      </Header>
    </div>
  );
};

export default Navbar;
