import React from "react";
import HeroSection from "./components/HeroSection";
import { useProductContext } from "./contex/productContext";
import { useEffect } from 'react';
const About = () => {
  // const { myName } = useProductContext();
  // console.log(myName);
  const { updateAboutPage } = useProductContext();
  useEffect(() => {
    updateAboutPage()
  }, [])
  return (
    <>
      <HeroSection />
    </>
  );
};

export default About;