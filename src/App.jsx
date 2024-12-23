import { useState } from "react";
import { styled } from "styled-components";
import Navbar from "./components/Fixed Components/Navbar";
import Footer from "./components/Fixed Components/Footer";
import Signup from "./components/Modal/Feedback";
import Showroom from "./components/Showroom Components/Showroom";
import Shop from "./components/Shop Components/Shop";
import Gallery from "./components/Gallery/Gallery";

function App() {
  return (
    <div>
      <Navbar />

      <Footer />
    </div>
  );
}

export default App;
