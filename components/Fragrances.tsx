const fragrances = [
    {
      title: 'Eau de Parfum',
      image: 'https://buyazaib.com/cdn/shop/files/WhatsAppImage2024-10-06at04.16.28_a49bdd46_d94d4a9f-d8e4-4f03-9896-67d211a1afce.jpg?v=1728215877&width=360',
      description: 'A sophisticated and long-lasting fragrance.',
    },
    {
      title: 'Eau de Toilette',
      image: 'https://buyazaib.com/cdn/shop/files/Rouge1_1.25x.jpg?v=1728127108&width=360',
      description: 'A lighter scent perfect for everyday wear.',
    },
    {
      title: 'Cologne',
      image: 'https://buyazaib.com/cdn/shop/files/david3.jpg?v=1728128051&width=360',
      description: 'A refreshing and invigorating fragrance.',
    },
  ];
  
  const Fragrances = () => {
    return (
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Our Fragrances</h2>
          <p className="mb-12 text-lg text-gray-600">Explore our exquisite range of fragrances.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {fragrances.map((fragrance, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={fragrance.image} alt={fragrance.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{fragrance.title}</h3>
                  <p className="mt-2 text-gray-600">{fragrance.description}</p>
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
  
  export default Fragrances;
  