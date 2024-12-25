import { styled } from "styled-components";

const Header = styled.header`
  width: 100%;
  display: flex; //Makes list horizontal
  flex-direction: column;
  align-items: center;
`;
const NavContainer = styled.div`
  display: flex;

  ul {
    display: flex;
    list-style: none; /* Remove bullets */
  }
  li {
    padding: 25px;
  }
`;
const Nav = styled.nav`
  display: flex;
  /* border: 1px solid black; */
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
              <li>Basket</li>
            </ul>
          </Nav>
        </NavContainer>
      </Header>
    </div>
  );
};

export default Navbar;
