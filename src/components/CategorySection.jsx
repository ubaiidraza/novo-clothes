import { Link } from "react-router-dom";

const categories = [
  {
    title: "Luxury Shirts",
    subtitle: "Premium formal & casual collection",
    image:
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Tailored Pants",
    subtitle: "Sharp fit with modern comfort",
    image:
      "https://images.unsplash.com/photo-1506629905607-53e82b52f0f6?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "New Arrivals",
    subtitle: "Fresh drops for the season",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop",
  },
];

const CategorySection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <p className="uppercase tracking-[5px] text-sm text-slate-500 mb-3">
          Explore
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-[#0B1E3A]">
          Shop By Category
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {categories.map((item, index) => (
          <div
            key={index}
            className="relative rounded-3xl overflow-hidden group h-[420px]"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h3 className="text-3xl font-bold">{item.title}</h3>
              <p className="text-slate-200 mt-2">{item.subtitle}</p>

              <Link to="/shop">
                <button className="mt-5 bg-white text-[#0B1E3A] px-5 py-3 rounded-full font-semibold hover:scale-105 transition">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;