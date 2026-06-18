import products from "../data/products";
import ProductCard from "../components/ProductCard";

const Shop = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-32">
      <h1 className="text-5xl font-bold mb-10">
        Shop
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};

export default Shop;