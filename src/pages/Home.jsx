import Hero3D from "../components/Hero3D";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

const Home = () => {
  return (
    <>
      <Hero3D />

      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-10">
          Featured Collection
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;