import React from "react";
import Navbar from "./components/Navbar";
import {Products} from './components/Products'
import {Footer} from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
        <Products></Products>
        <Footer/>
    </>
  );
}

export default App;
