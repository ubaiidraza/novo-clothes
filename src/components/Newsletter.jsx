const Newsletter = () => {
  return (
    <section className="bg-[#0B1E3A] text-white py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Join NOVO
        </h2>

        <p className="text-slate-300 mb-8">
          Get updates about new arrivals, exclusive offers and premium drops.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-6 py-4 rounded-lg text-[#0B1E3A] w-full md:w-96 outline-none"
          />

          <button className="bg-white text-[#0B1E3A] px-8 py-4 rounded-lg font-semibold hover:scale-105 transition">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;