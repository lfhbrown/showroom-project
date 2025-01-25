import { styled } from "styled-components";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SignUp from "./components/Signup";
import Showroom from "./components/Showroom";
// import Shop from "./Shop";
import Gallery from "./components/Gallery";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Full viewport height */
  overflow: hidden;
`;
const NavBarDiv = styled.div`
  position: sticky; /* Required for z-index to take effect */
  z-index: 9999; /* Ensure it appears above everything */
  width: 100%;
`;
const GalleryDiv = styled.div`
  overflow: hidden;
`;
const CenteredDiv = styled.div`
  display: flex;
  justify-content: center; /* Horizontally center the content */
  align-items: center; /* Vertically center the content */
  height: 200px; /* Adjust as needed for spacing */
  text-align: center; /* Center-align text inside */
  position: relative; /* Required for pseudo-element positioning */

  &::after {
    content: ""; /* Creates a pseudo-element */
    position: absolute;
    bottom: 0; /* Aligns the border at the bottom */
    left: 50%; /* Centers the border */
    transform: translateX(-50%); /* Centers the border horizontally */
    width: 1620px; /* Adjust this value for the custom border length */
    height: 2px; /* Sets the thickness of the border */
    background-color: #27333f; /* Border color */
  }
`;
const CategoryDiv = styled.div`
  display: flex;
  justify-content: space-between; /* Place elements on opposite sides */
  align-items: center; /* Vertically align content */
  width: 1620px; /* Fixed width for the container */
  height: 100px; /* Adjust height as needed */
  margin: 0 auto; /* Center the container horizontally */
  text-align: center; /* Center-align text inside (if applicable) */
  overflow: hidden; /* Prevent content overflow */
  position: relative; /* Maintain positioning context */
  /* border: 1px solid black; Optional: Border for visualization */
`;
const SignUpDiv = styled.div`
  overflow: hidden;
  padding: 48px 0;
  position: relative; /* Required for pseudo-element positioning */

  &::after {
    content: ""; /* Creates a pseudo-element */
    position: absolute;
    bottom: 0; /* Aligns the border at the bottom */
    left: 50%; /* Centers the border */
    transform: translateX(-50%); /* Centers the border horizontally */
    width: 1620px; /* Adjust this value for the custom border length */
    height: 1px; /* Sets the thickness of the border */
    background-color: #27333f; /* Border color */
  }
`;
const FooterDiv = styled.div`
  margin-top: auto; /* Pushes the footer to the bottom of the page */
  overflow: hidden;
  padding-top: 24px;
`;

function App() {
  return (
    <AppContainer>
      <NavBarDiv>
        <Navbar />
      </NavBarDiv>

      <GalleryDiv>
        <Gallery />
      </GalleryDiv>
      <CenteredDiv>
        <h1>Simple Furniture, Beautifully Made</h1>
      </CenteredDiv>
      <CategoryDiv>
        <h2>Our Kitchens</h2>
        <a>
          <p>View All</p>
        </a>
      </CategoryDiv>
      <Showroom></Showroom>
      <CategoryDiv>
        <h2>Shop</h2>
        <a>
          <p>View All</p>
        </a>
      </CategoryDiv>
      <SignUpDiv>
        <SignUp />
      </SignUpDiv>

      <FooterDiv>
        <Footer />
      </FooterDiv>
    </AppContainer>
  );
}

export default App;
