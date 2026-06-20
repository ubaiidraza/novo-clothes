const ContactSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Left */}
        <div>
          <p className="uppercase tracking-[5px] text-sm text-slate-500 mb-3">
            Contact NOVO
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1E3A] leading-tight">
            Let’s Build Your Signature Style
          </h2>

          <p className="text-slate-600 mt-6 leading-8 max-w-lg">
            Have a question about our shirts, pants or upcoming collection?
            Reach out to NOVO and we’ll help you find the perfect fit.
          </p>

          <div className="mt-8 space-y-3 text-slate-700">
            <p><span className="font-semibold">Email:</span> info@novoclothes.com</p>
            <p><span className="font-semibold">Phone:</span> +92 300 1234567</p>
            <p><span className="font-semibold">Location:</span> Karachi, Pakistan</p>
          </div>
        </div>

        {/* Right Form */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8">
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-slate-300 rounded-xl px-5 py-4 outline-none focus:border-[#0B1E3A]"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-slate-300 rounded-xl px-5 py-4 outline-none focus:border-[#0B1E3A]"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full border border-slate-300 rounded-xl px-5 py-4 outline-none focus:border-[#0B1E3A]"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-[#0B1E3A] text-white py-4 rounded-xl font-semibold hover:bg-[#081629] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;