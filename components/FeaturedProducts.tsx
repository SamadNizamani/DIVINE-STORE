const featuredProducts = [
    {
      title: 'Luxury Perfume',
      image: 'https://buyazaib.com/cdn/shop/files/DAVID_POST.jpg?v=1728129029&width=750',
      price: 120,
    },
    {
      title: 'Classic Scent',
      image: 'https://buyazaib.com/cdn/shop/files/blue_de_chanel.jpg?v=1728129141&width=750',
      price: 80,
    },
    {
      title: 'Fresh Citrus',
      image: 'https://buyazaib.com/cdn/shop/files/sauvage4.jpg?v=1728128125&width=360',
      price: 60,
    },
  ];
  
  const FeaturedProducts = () => {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Featured Products</h2>
          <p className="mb-12 text-lg text-gray-600">Discover our top picks for you.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <div key={index} className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
                <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{product.title}</h3>
                  <p className="mt-2 text-lg font-bold">${product.price}</p>
                  <a href="/products" className="inline-block mt-4 bg-yellow-500 text-black font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-yellow-400 transition duration-300">
                    View Details
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default FeaturedProducts;
  