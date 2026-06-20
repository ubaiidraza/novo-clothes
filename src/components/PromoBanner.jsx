import { Link } from "react-router-dom";

const PromoBanner = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto bg-[#0B1E3A] rounded-[32px] overflow-hidden">
        <div className="grid md:grid-cols-2 items-center">
          <div className="p-10 md:p-16 text-white">
            <p className="uppercase tracking-[5px] text-sm text-slate-300 mb-4">
              Limited Offer
            </p>

            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              Upgrade Your Wardrobe <br /> With NOVO
            </h2>

            <p className="text-slate-300 mt-6 max-w-lg leading-8">
              Discover refined shirts and premium tailored pants designed to
              elevate your daily style with comfort and confidence.
            </p>

            <Link to="/shop">
              <button className="mt-8 bg-white text-[#0B1E3A] px-8 py-4 rounded-full font-semibold hover:scale-105 transition">
                Explore Collection
              </button>
            </Link>
          </div>

          <div className="h-full">
            <img
              src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop"
              alt="Novo promo"
              className="w-full h-[400px] md:h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;