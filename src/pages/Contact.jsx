const Contact = () => {
  return (
    <div className="min-h-screen bg-[#f8fbff] pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="uppercase tracking-[5px] text-sm text-slate-500 mb-3">
            Contact NOVO
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0B1E3A]">
            We’d Love To Hear From You
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold text-[#0B1E3A] mb-4">
              Get In Touch
            </h2>
            <p className="text-slate-600 leading-8">
              Have questions about our collection, orders or custom styling?
              Reach out and our team will assist you.
            </p>

            <div className="mt-8 space-y-4 text-slate-700">
              <p><span className="font-semibold">Email:</span> info@novoclothes.com</p>
              <p><span className="font-semibold">Phone:</span> +92 300 1234567</p>
              <p><span className="font-semibold">Address:</span> Karachi, Pakistan</p>
            </div>
          </div>

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
                rows="6"
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
      </div>
    </div>
  );
};

export default Contact;