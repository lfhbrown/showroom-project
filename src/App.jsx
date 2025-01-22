import { useState } from "react";
import { styled } from "styled-components";
import Navbar from "./components/Fixed Components/Navbar";
import Footer from "./components/Fixed Components/Footer";
import SignUp from "./components/Modal/Signup";
import Showroom from "./components/Showroom Components/Showroom";
import Shop from "./components/Shop Components/Shop";
import Gallery from "./components/Gallery/Gallery";

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
const SignUpDiv = styled.div``;
const FooterDiv = styled.div`
  flex: 1; /* Pushes the footer to the bottom */
`;
const GalleryDiv = styled.div``;

function App() {
  return (
    <AppContainer>
      <NavBarDiv>
        <Navbar />
      </NavBarDiv>

      <GalleryDiv>
        <Gallery />
      </GalleryDiv>

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
