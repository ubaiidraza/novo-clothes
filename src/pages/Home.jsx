import Hero3D from "../components/Hero3D";
import ProductCard from "../components/ProductCard";
import NewArrivals from "../components/NewArrivals";
import Newsletter from "../components/Newsletter";

import products from "../data/products";

const Home = () => {
  return (
    <>
      <Hero3D />

      {/* Featured Collection */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-5xl font-bold text-center mb-12">
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

      {/* Why Choose NOVO */}
      <section className="bg-black text-white py-24">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-16">
            Why Choose NOVO?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="text-center">
              <h3 className="text-2xl font-bold mb-3">
                Premium Quality
              </h3>

              <p className="text-gray-400">
                Finest fabrics and materials.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold mb-3">
                Modern Design
              </h3>

              <p className="text-gray-400">
                Fashion that matches today's trends.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold mb-3">
                Fast Delivery
              </h3>

              <p className="text-gray-400">
                Delivered quickly to your doorstep.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* New Arrivals */}
      <NewArrivals />

      {/* Newsletter */}
      <Newsletter />
    </>
  );
};

export default Home;