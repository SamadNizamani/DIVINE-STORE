import Header from '@/components/Header';
import Hero from '../components/Hero';
import Footer from '@/components/Footer';
import Fragrances from '@/components/Fragrances';
import FeaturedProducts from '@/components/FeaturedProducts';

const Home = () => {
  return (
    <main>
      <Hero />
      {/* Other sections will go here */}
      <Fragrances />

      <FeaturedProducts />

      <Footer /> {/* Include Footer */}

    </main>
  );
}

export default Home;
