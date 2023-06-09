import React from "react";

import "../../App.css";

// Sections
import HeroSection from "../../components/HeroSection";

function Home() {
  console.log('Home component rendered');
  return (
    <>
      <HeroSection />
    </>
  );
}

export default Home;