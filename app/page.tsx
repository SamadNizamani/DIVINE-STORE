import Hero from '../components/Hero';
import Fragrances from '@/components/Fragrances';
import FeaturedProducts from '@/components/FeaturedProducts';

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
