import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const { cart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#081629]/85 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" onClick={() => setMenuOpen(false)}>
          <h1 className="text-white text-3xl font-black tracking-widest">
            NOVO
          </h1>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8 text-white font-medium">
          <Link to="/" className="hover:text-slate-300 transition">
            Home
          </Link>
          <Link to="/shop" className="hover:text-slate-300 transition">
            Shop
          </Link>
          <Link to="/contact" className="hover:text-slate-300 transition">
            Contact
          </Link>
          <Link
            to="/cart"
            className="bg-white text-[#0B1E3A] px-4 py-2 rounded-full font-semibold hover:scale-105 transition"
          >
            Cart ({cart.length})
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#081629] border-t border-white/10 px-6 py-5 flex flex-col gap-4 text-white">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/shop" onClick={() => setMenuOpen(false)}>
            Shop
          </Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
          <Link
            to="/cart"
            onClick={() => setMenuOpen(false)}
            className="bg-white text-[#0B1E3A] px-4 py-2 rounded-full font-semibold w-fit"
          >
            Cart ({cart.length})
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;