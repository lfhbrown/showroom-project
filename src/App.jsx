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
`;
const NavBarDiv = styled.div`
  position: sticky; /* Required for z-index to take effect */
  z-index: 9999; /* Ensure it appears above everything */
  width: 100%;
`;
const GalleryDiv = styled.div`
  overflow: hidden;
`;
const SignUpDiv = styled.div`
  overflow: hidden;
`;
const FooterDiv = styled.div`
  margin-top: auto; /* Pushes the footer to the bottom of the page */
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
      <div>
        <h1>Simple Furniture, Beautifully Made</h1>
      </div>
      <div>
        <h2>Our Kitchens</h2>
      </div>
      <Showroom></Showroom>
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
