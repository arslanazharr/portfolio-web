import React from "react";
import Header from "./Header";
import Intro from "./Intro";
import Work from "./Work";
import Contact from "./Contact";
import Footer from "./Footer";
import Navbar from "./Navbar";

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Intro />
      <Work />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
