// import { useState } from "react";
import "./App.css";
import Navbar from "./components/Fixed Components/Navbar";
import Footer from "./components/Fixed Components/Footer";
import Signup from "./components/Modal/Feedback";
import Showroom from "./components/Showroom Components/Showroom";
import Shop from "./components/Shop Components/Shop";
import Gallery from "./components/Gallery/Gallery";

function App() {
  return (
    <div className="main">
      <div className="NavBar">
        <Navbar />
      </div>
      <Gallery />
      <Showroom />
      <Shop />
      <Signup />
      <Footer />
    </div>
  );
}

export default App;
