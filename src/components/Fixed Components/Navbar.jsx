import { styled } from "styled-components";
import logo from "../assets/deVOL-logo.png";

const Header = styled.header`
  width: 100%;
  display: flex; //Makes list horizontal
  flex-direction: column;
  align-items: center;
  position: sticky;
`;
const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #27333f;
  position: sticky;
  top: 0; /* Ensure it sticks to the top */
  z-index: 1000; /* Ensure it stays above other elements */
  ul {
    display: flex;
    flex-direction: row;
    list-style: none; /* Remove bullets */
    margin: 0;
    cursor: pointer;
  }
  li {
    position: relative; /* Enables submenu positioning */
    padding: 15px 20px;
  }
`;
const Nav = styled.nav`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  display: flex;
  flex-direction: row;
`;

const Logo = styled.img`
  width: 245px; /* Adjust this value to make the logo smaller */
  height: auto; /* Maintains aspect ratio */
  padding-bottom: 10px;
  cursor: pointer;
`;

const LongSubMenu = styled.div`
  opacity: 0;
  pointer-events: none;
  position: absolute;
  top: 100%; /* Position submenu directly below parent */
  left: 50%;
  transform: translateX(-50%); /* Center it horizontally */
  width: min-content;
  background-color: #c8baba;
  padding: 1em;
  z-index: 9999;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: opacity 0.3s ease-in-out;
  gap: 2em;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`;
const ShortSubMenu = styled.div`
  opacity: 0;
  pointer-events: none;
  position: absolute;
  top: 100%; /* Position submenu directly below parent */
  left: 50%;
  transform: translateX(-50%); /* Ensure horizontal centering */
  background-color: #c8baba;
  /* padding: 1em; */
  z-index: 9999;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: opacity 0.3s ease-in-out;
  display: flex;
  flex-direction: column;

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 1em;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li {
    color: black;
  }
`;
const SubMenuList = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute; /* Required for z-index to take effect */
  z-index: 9999; /* Ensure it appears above everything */

  ul {
    margin-top: 0.5em;
    padding-left: 1em;
    padding-right: 1em;
    list-style: none;
    color: #27333f;
    border-left: 2px solid #eceaea94; /* Optional styling for nested lists */
    flex-direction: column;
  }
  li {
    padding: 0.5em 0;
    display: flex;
    flex-direction: column;
    font-size: 14px;
    white-space: nowrap;
  }
  a {
    color: #27333f;
    text-decoration: none;

    &:hover {
      color: white;
    }
  }
`;

const SubMenuListHeading = styled.a`
  font-weight: bold;
  font-size: 16px;
  white-space: nowrap;
`;

const NavListItem = styled.li`
  align-items: center;
  color: white;
  font-size: 16px;
  position: relative; /* Enables submenu positioning */

  /* Show LongSubMenu when NavListItemLink is hovered */
  &:hover > div,
  a:hover + div {
    opacity: 1;
    pointer-events: auto; /* Makes submenu clickable */
  }
`;
const LongSubMenuList1 = styled.div`
  display: flex;
  flex-direction: row;
`;
const LongSubMenuList2 = styled.div`
  display: flex;
  flex-direction: row;
`;
const ShortSubMenuItem = styled.li`
  white-space: nowrap;
  &:hover {
    color: white;
  }
`;
const NavListItemLink = styled.a`
  &:hover {
    border-bottom: solid 1px white;
  }
`;

const Navbar = () => {
  return (
    <Header>
      <a href="">
        <Logo src={logo} alt="" />
      </a>

      <NavContainer>
        <Nav>
          <ul>
            <NavListItem>
              <NavListItemLink>Kitchens</NavListItemLink>
              <LongSubMenu>
                <ul>
                  <SubMenuList>
                    <SubMenuListHeading>
                      The Real Shaker Kitchen
                    </SubMenuListHeading>
                    <ul>
                      <li>
                        <a>Shaker Projects</a>
                      </li>
                      <li>
                        <a>Shaker Catalogue & Prices</a>
                      </li>
                    </ul>
                  </SubMenuList>
                  <SubMenuList>
                    <SubMenuListHeading>
                      The Classic English Kitchen
                    </SubMenuListHeading>
                    <ul>
                      <li>
                        <a>Classic Projects</a>
                      </li>
                    </ul>
                  </SubMenuList>
                  <SubMenuList>
                    <SubMenuListHeading>
                      The Heirloom Collection
                    </SubMenuListHeading>
                    <ul>
                      <li>
                        <a>Heirloom Furniture</a>
                      </li>
                      <li>
                        <a>Heirloom Accessories</a>
                      </li>
                    </ul>
                  </SubMenuList>
                  <SubMenuList>
                    <SubMenuListHeading>
                      The Sebastian Cox Kitchen
                    </SubMenuListHeading>
                    <ul>
                      <li>
                        <a>Sebastian Cox Projects</a>
                      </li>
                      <li>
                        <a>Sebastian Cox Catologue</a>
                      </li>
                    </ul>
                  </SubMenuList>
                  <SubMenuList>
                    <SubMenuListHeading>
                      The Haberdasher&apos;s Kitchen
                    </SubMenuListHeading>
                    <ul>
                      <li>
                        <a>Haberdasher&apos;s Projects</a>
                      </li>
                      <li>
                        <a>Haberdasher&apos;s Catalogue</a>
                      </li>
                    </ul>
                  </SubMenuList>
                </ul>
              </LongSubMenu>
            </NavListItem>
            <NavListItem>
              <NavListItemLink>Design Service</NavListItemLink>
            </NavListItem>
            <NavListItem>
              <NavListItemLink>Brochure & Book</NavListItemLink>
            </NavListItem>
            <NavListItem>
              <NavListItemLink>Shop</NavListItemLink>
              <LongSubMenu>
                <LongSubMenuList1>
                  <ul>
                    <SubMenuList>
                      <SubMenuListHeading>New Arrivals</SubMenuListHeading>
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
                    </SubMenuList>
                    <SubMenuList>
                      <SubMenuListHeading>Taps & Sinks</SubMenuListHeading>
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
                    </SubMenuList>
                    <SubMenuList>
                      <SubMenuListHeading>Knobs & Handles</SubMenuListHeading>
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
                    </SubMenuList>
                    <SubMenuList>
                      <SubMenuListHeading>
                        Lighting & Electrical
                      </SubMenuListHeading>
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
                    </SubMenuList>
                    <SubMenuList>
                      <SubMenuListHeading>
                        Hangers & Brackets
                      </SubMenuListHeading>
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
                    </SubMenuList>
                  </ul>
                </LongSubMenuList1>
                <LongSubMenuList2>
                  <ul>
                    <SubMenuList>
                      <SubMenuListHeading>Furniture</SubMenuListHeading>
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
                    </SubMenuList>
                    <SubMenuList>
                      <SubMenuListHeading>Bathrooms</SubMenuListHeading>
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
                    </SubMenuList>
                    <SubMenuList>
                      <SubMenuListHeading>Homeware</SubMenuListHeading>
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
                    </SubMenuList>
                    <SubMenuList>
                      <SubMenuListHeading>Handmade Tiles</SubMenuListHeading>
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
                    </SubMenuList>
                    <SubMenuList>
                      <SubMenuListHeading>Collections</SubMenuListHeading>
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
                    </SubMenuList>
                  </ul>
                </LongSubMenuList2>
              </LongSubMenu>
            </NavListItem>
            <NavListItem>
              <NavListItemLink>About Us</NavListItemLink>
              <ShortSubMenu>
                <ul>
                  <ShortSubMenuItem>
                    <a>Our Story</a>
                  </ShortSubMenuItem>
                  <ShortSubMenuItem>
                    <a>Meet the Staff</a>
                  </ShortSubMenuItem>
                  <ShortSubMenuItem>
                    <a>deVOL&apos;s TV Show</a>
                  </ShortSubMenuItem>
                  <ShortSubMenuItem>
                    <a>Our Journal</a>
                  </ShortSubMenuItem>
                  <ShortSubMenuItem>
                    <a>Press</a>
                  </ShortSubMenuItem>
                  <ShortSubMenuItem>
                    <a>Careers</a>
                  </ShortSubMenuItem>
                </ul>
              </ShortSubMenu>
            </NavListItem>
            <NavListItem>
              <NavListItemLink>Contact</NavListItemLink>
              <ShortSubMenu>
                <ul>
                  <ShortSubMenuItem>
                    <a>Kitchen Enquiries</a>
                  </ShortSubMenuItem>
                  <ShortSubMenuItem>
                    <a>Online Accesory Sales</a>
                  </ShortSubMenuItem>
                  <ShortSubMenuItem>
                    <a>Our Showrooms</a>
                  </ShortSubMenuItem>
                </ul>
              </ShortSubMenu>
            </NavListItem>
          </ul>
        </Nav>
      </NavContainer>
    </Header>
  );
};

export default Navbar;
