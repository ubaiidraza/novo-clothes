import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useCart();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link to="/">
          <h1 className="text-white text-3xl font-bold tracking-widest">
            NOVO
          </h1>
        </Link>

        {/* Menu */}
        <div className="flex items-center gap-8 text-white font-medium">

          <Link
            to="/"
            className="hover:text-gray-300 transition"
          >
            Home
          </Link>

          <Link
            to="/shop"
            className="hover:text-gray-300 transition"
          >
            Shop
          </Link>

          <Link
            to="/contact"
            className="hover:text-gray-300 transition"
          >
            Contact
          </Link>

          <Link
            to="/cart"
            className="bg-white text-black px-4 py-2 rounded-full font-semibold hover:scale-105 transition"
          >
            Cart ({cart.length})
          </Link>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;