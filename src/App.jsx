import React from "react";
import Button from "./components/Button";
import Navbar from "./components/Navbar/Navbar";
import { AutoplayExample } from "./components/Carousel/Carousel";

const App = () => {
  return (
    <section
      className="h-screen z-10 bg-Hero bg-cover
      font-[Poppins] md:bg-top bg-center"
    >
      <Navbar />
      <AutoplayExample/>
      
    </section>
  );
};

export default App;
