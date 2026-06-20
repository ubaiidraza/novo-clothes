import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero3D = () => {
  return (
    <section className="min-h-screen bg-[#0B1E3A] relative overflow-hidden pt-24">
      {/* Background glow */}
      <div className="absolute top-24 right-10 w-72 h-72 bg-white/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 left-10 w-60 h-60 bg-blue-400/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 min-h-[calc(100vh-96px)] grid md:grid-cols-2 items-center gap-12">
        {/* LEFT CONTENT */}
        <div className="text-white relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="uppercase tracking-[6px] text-sm text-slate-300 mb-4"
          >
            Luxury Men Fashion
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-5xl sm:text-6xl md:text-7xl font-black leading-tight"
          >
            Wear The <br />
            <span className="text-slate-300">Power of Style</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-slate-300 mt-6 max-w-lg text-base md:text-lg leading-8"
          >
            Discover premium shirts and tailored pants crafted for modern men who
            value elegance, confidence and timeless style.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="flex flex-wrap gap-4 mt-8"
          >
            <Link to="/shop">
              <button className="bg-white text-[#0B1E3A] px-8 py-4 rounded-full font-semibold hover:scale-105 transition duration-300">
                Shop Collection
              </button>
            </Link>

            <Link to="/contact">
              <button className="border border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#0B1E3A] transition duration-300">
                Contact Us
              </button>
            </Link>
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center md:justify-end"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[260px] h-[260px] md:w-[360px] md:h-[360px] bg-white/10 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 rounded-[30px] overflow-hidden border border-white/10 shadow-2xl max-w-md">
            <img
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop"
              alt="Novo luxury fashion"
              className="w-full h-[500px] md:h-[620px] object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero3D;