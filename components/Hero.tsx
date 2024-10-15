import Image from 'next/image';
import heroImage from '../public/perfume.png'; // Make sure image path is correct

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center h-screen bg-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white p-6 sm:p-8">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
          {/* Discover Your Fragrance */}
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8">
          {/* Find the perfect scent for every occasion. */}
        </p>
        <a
          href="/products"
          className="inline-block bg-yellow-500 text-black font-semibold py-2 px-4 sm:px-6 md:py-3 md:px-8 rounded-lg shadow-lg hover:bg-yellow-400 transition duration-300"
        >
          Shop Now
        </a>
      </div>
    </section>
  );
};

export default Hero;

