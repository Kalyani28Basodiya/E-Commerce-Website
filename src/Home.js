import React from 'react'
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Trusted from './components/Trusted';
import FeatureProduct from './components/FeatureProduct';
import { useProductContext } from './contex/productContext';
import { useEffect } from 'react';
const Home = () => {
  const { updateHomePage } = useProductContext();

  useEffect(() => {
    updateHomePage()
  }, [])
  return (
    <>
      <HeroSection  />
      <FeatureProduct />
      <Services />
      <Trusted />
    </>
  )
}



export default Home;