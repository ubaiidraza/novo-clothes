import Hero3D from "../components/Hero3D";
import ProductCard from "../components/ProductCard";
import CategorySection from "../components/CategorySection";
import PromoBanner from "../components/PromoBanner";
import InstagramGallery from "../components/InstagramGallery";
import Newsletter from "../components/Newsletter";
import ContactSection from "../components/ContactSection";
import products from "../data/products";

const Home = () => {
  return (
    <div className="bg-[#f8fbff] text-[#0B1E3A]">
      {/* Hero */}
      <Hero3D />

      {/* Featured Collection */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="uppercase tracking-[5px] text-sm text-slate-500 mb-3">
            Best Sellers
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured Collection
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Why Choose */}
      <section className="bg-[#0B1E3A] text-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[5px] text-sm text-slate-300 mb-3">
              Why NOVO
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Tailored For A Luxury Lifestyle
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white/5 rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-3">Premium Fabric</h3>
              <p className="text-slate-300">
                High quality materials selected for elegance and comfort.
              </p>
            </div>

            <div className="text-center bg-white/5 rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-3">Modern Tailoring</h3>
              <p className="text-slate-300">
                Sharp cuts and refined fitting for a confident look.
              </p>
            </div>

            <div className="text-center bg-white/5 rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-3">Luxury Experience</h3>
              <p className="text-slate-300">
                Fashion designed to feel premium from the first wear.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <CategorySection />

      {/* Promo Banner */}
      <PromoBanner />

      {/* More Products */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="uppercase tracking-[5px] text-sm text-slate-500 mb-3">
            New Collection
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Fresh Luxury Arrivals
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.slice(3, 6).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Instagram Style Gallery */}
      <InstagramGallery />

      {/* Newsletter */}
      <Newsletter />

      {/* Contact */}
      <ContactSection />
    </div>
  );
};

export default Home;