const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <h2 className="text-xl font-bold mb-4">Divine Fragrance</h2>
          <p className="mb-4">Explore our exquisite range of fragrances.</p>
          <div className="flex justify-center mb-4">
            <a href="#" className="mx-2 hover:text-yellow-400 transition duration-300">Facebook</a>
            <a href="#" className="mx-2 hover:text-yellow-400 transition duration-300">Instagram</a>
            <a href="#" className="mx-2 hover:text-yellow-400 transition duration-300">Twitter</a>
            <a href="#" className="mx-2 hover:text-yellow-400 transition duration-300">Pinterest</a>
          </div>
          <p className="text-sm">&copy; {new Date().getFullYear()} Divine Fragrance. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  