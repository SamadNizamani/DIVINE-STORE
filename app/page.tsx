"use client"

import FeaturedProducts from "@/components/FeaturedProducts";
import Fragrances from "@/components/Fragrances";
import Hero from "@/components/Hero";


const Home = () => {
  return (
    <main>

      <Hero />
      {/* Other sections will go here */}
      <Fragrances />

      <FeaturedProducts />


    </main>
  );
}

export default Home;
