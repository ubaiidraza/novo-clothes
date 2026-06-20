import ProductCard from "../components/ProductCard";
import products from "../data/products";

const Shop = () => {
  return (
    <div className="min-h-screen bg-[#f8fbff] pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="uppercase tracking-[5px] text-sm text-slate-500 mb-3">
            NOVO Collection
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0B1E3A]">
            Shop Luxury Fashion
          </h1>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;