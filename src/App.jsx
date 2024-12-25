import { useState } from "react";
import { styled } from "styled-components";
import Navbar from "./components/Fixed Components/Navbar";
import Footer from "./components/Fixed Components/Footer";
import SignUp from "./components/Modal/SignUp";
import Showroom from "./components/Showroom Components/Showroom";
import Shop from "./components/Shop Components/Shop";
import Gallery from "./components/Gallery/Gallery";

const AppContainer = styled.div`
  min-height: 100vh; /* Ensures the container takes up the full viewport height */
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Distributes the space between items */
`;
const NavBarDiv = styled.div``;
const SignUpDiv = styled.div``;
const FooterDiv = styled.div``;

function App() {
  return (
    <AppContainer>
      <NavBarDiv>
        <Navbar />
      </NavBarDiv>

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
