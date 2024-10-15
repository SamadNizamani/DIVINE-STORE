"use client"
import { useEffect, useState } from 'react';
import { client } from '../../sanity/lib/client'; // Sanity client import
import { Product } from '../products/index'; // Assuming you have a Product type defined

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]); // State to hold products

  // Fetch products from Sanity on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      const query = '*[_type == "product"]'; // Sanity GROQ query to fetch products
      const productsData = await client.fetch(query);
      setProducts(productsData);
    };

    fetchProducts();
  }, []);

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">All Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product._id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{product.title}</h3>
                <p className="mt-2 text-lg font-bold">${product.price}</p>
                <a href={`/products/${product.slug.current}`} className="inline-block mt-4 bg-yellow-500 text-black font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-yellow-400 transition duration-300">
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

export default ProductsPage;
