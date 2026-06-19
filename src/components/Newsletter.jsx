const Newsletter = () => {
  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <h2 className="text-5xl font-bold mb-6">
          Join NOVO
        </h2>

        <p className="text-gray-400 mb-8">
          Get updates about new collections and offers.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">

          <input
            type="email"
            placeholder="Enter Email"
            className="px-6 py-4 rounded-lg text-black w-full md:w-96"
          />

          <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold">
            Subscribe
          </button>

        </div>

      </div>
    </section>
  );
};

export default Newsletter;