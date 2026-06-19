import products from "../data/products";
import ProductCard from "./ProductCard";

const NewArrivals = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-5xl font-bold text-center mb-12">
        New Arrivals
      </h2>

      <div className="grid md:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;