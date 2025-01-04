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
                    <li>
                      <a>The Real Shaker Kitchen</a>
                      <ul>
                        <li>
                          <a>Shaker Projects</a>
                        </li>
                        <li>
                          <a>Shaker Catalogue & Prices</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a>The Classic English Kitchen</a>
                      <ul>
                        <li>
                          <a>Classic Projects</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a>The Heirloom Collection</a>
                      <ul>
                        <li>
                          <a>Heirloom Furniture</a>
                        </li>
                        <li>
                          <a>Heirloom Accessories</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a>The Sebastian Cox Kitchen</a>
                      <ul>
                        <li>
                          <a>Sebastian Cox Projects</a>
                        </li>
                        <li>
                          <a>Sebastian Cox Catologue</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a>The Haberdasher&apos;s Kitchen</a>
                      <ul>
                        <li>
                          <a>Haberdasher&apos;s Projects</a>
                        </li>
                        <li>
                          <a>Haberdasher&apos;s Catalogue</a>
                        </li>
                      </ul>
                    </li>
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
                <SubMenu>
                  <ul>
                    <li>
                      <a>New Arrivals</a>
                      <ul>
                        <li>
                          <a>Mid-Centure Pendants</a>
                        </li>
                        <li>
                          <a>Milk Glass Task Light</a>
                        </li>
                        <li>
                          <a>deVOL Cupboard Catch</a>
                        </li>
                        <li>
                          <a>Antique Silver Hardware</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a>Taps & Sinks</a>
                      <ul>
                        <li>
                          <a>Aged Brass Taps</a>
                        </li>
                        <li>
                          <a>Antique Silver Taps</a>
                        </li>
                        <li>
                          <a>Chrome & Nickel Taps</a>
                        </li>
                        <li>
                          <a>deVOL Sinks</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a>Knobs & Handles</a>
                      <ul>
                        <li>
                          <a>Handcrafted Fittings</a>
                        </li>
                        <li>
                          <a>Standard Fittings</a>
                        </li>
                        <li>
                          <a>Vent Covers</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a>Lighting & Electrical</a>
                      <ul>
                        <li>
                          <a>Pendant Lights</a>
                        </li>
                        <li>
                          <a>Wall Lights</a>
                        </li>
                        <li>
                          <a>Lamps</a>
                        </li>
                        <li>
                          <a>Switches & Sockets</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a>Hangers & Brackets</a>
                      <ul>
                        <li>
                          <a>Hanging Rails</a>
                        </li>
                        <li>
                          <a>Curtain Rails</a>
                        </li>
                        <li>
                          <a>The Pot Hanger</a>
                        </li>
                        <li>
                          <a>Shelf Brackets</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a>Furniture</a>
                      <ul>
                        <li>
                          <a>Stools & Chairs</a>
                        </li>
                        <li>
                          <a>Tables</a>
                        </li>
                        <li>
                          <a>Laundry Airers</a>
                        </li>
                        <li>
                          <a>Decorated Cupboards</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a>Bathrooms</a>
                      <ul>
                        <li>
                          <a>The Victorian Washstand</a>
                        </li>
                        <li>
                          <a>Bathroom Taps</a>
                        </li>
                        <li>
                          <a>The Clothes Horse</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a>Homeware</a>
                      <ul>
                        <li>
                          <a>Scented candles</a>
                        </li>
                        <li>
                          <a>Heirloom Platters</a>
                        </li>
                        <li>
                          <a>The Amber Glaze Teapot</a>
                        </li>
                        <li>
                          <a>deVOL Jigsaw Puzzles</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a>Handmade Tiles</a>
                      <ul>
                        <li>
                          <a>Emerald Green Tiles</a>
                        </li>
                        <li>
                          <a>Crackle Metro Tiles</a>
                        </li>
                        <li>
                          <a>Cream Subway Tiles</a>
                        </li>
                        <li>
                          <a>Lace Market Tiles</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a>Collections</a>
                      <ul>
                        <li>
                          <a>For The Love of Kitchens</a>
                        </li>
                        <li>
                          <a>The Heirloom Collection</a>
                        </li>
                        <li>
                          <a>the Grand Tour Collection</a>
                        </li>
                        <li>
                          <a>Porcelain Pendant Lights</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </SubMenu>
              </li>
              <li>
                <a>About Us</a>
                <ul>
                  <li>
                    <a>Our Story</a>
                  </li>
                  <li>
                    <a>Meet the Staff</a>
                  </li>
                  <li>
                    <a>deVOL's TV Show</a>
                  </li>
                  <li>
                    <a>Our Journal</a>
                  </li>
                  <li>
                    <a>Press</a>
                  </li>
                  <li>
                    <a>Careers</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Contact</a>
                <ul>
                  <li>
                    <a>Kitchen Enquiries</a>
                  </li>
                  <li>
                    <a>Online Accesory Sales</a>
                  </li>
                  <li>
                    <a>Our Showrooms</a>
                  </li>
                </ul>
              </li>
            </ul>
            <div>
              <a>Basket</a>
            </div>
          </Nav>
        </NavContainer>
      </Header>
    </div>
  );
};

export default Navbar;
