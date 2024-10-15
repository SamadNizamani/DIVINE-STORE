"use client"
import Hero from '../components/Hero';
import Fragrances from '@/components/Fragrances';
import FeaturedProducts from '@/components/FeaturedProducts';
import Header from '@/components/Header';

const Home = () => {
  return (
    <main>
            <Header /> {/* Add Header here */}

      <Hero />
      {/* Other sections will go here */}
      <Fragrances />

      <FeaturedProducts />


    </main>
  );
}

export default Home;
