import { client } from '../../../sanity/lib/client' // Sanity client import
import Header from '../../../components/Header' // Header component import
import Footer from '../../../components/Footer' // Footer component import

// ProductDetail component to display product details
export default async function ProductDetail({ params }: { params: { slug: string } }) {
  const query = `*[_type == "product" && slug.current == $slug][0]{
    title,
    description,
    price,
    "image": image.asset->url
  }`
  
  const product = await client.fetch(query, { slug: params.slug }) // Fetch product data

  return (
    <>
      <Header />
      <main className="p-8">
        <img src={product.image} alt={product.title} className="w-full h-96 object-cover rounded-lg" />
        <h1 className="text-4xl font-bold mt-4">{product.title}</h1>
        <p className="mt-4 text-lg">{product.description}</p>
        <p className="mt-2 text-xl font-bold">${product.price}</p>
      </main>
      <Footer />
    </>
  )
}
