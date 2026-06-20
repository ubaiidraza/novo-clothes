import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProductCard = ({ product }) => {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl overflow-hidden shadow-xl border border-slate-200"
    >
      <img
        src={product.image}
        alt={product.name}
        className="h-80 w-full object-cover"
      />

      <div className="p-5">
        <p className="text-sm text-slate-500 mb-1">{product.category}</p>

        <h3 className="font-semibold text-xl text-[#0B1E3A]">
          {product.name}
        </h3>

        <p className="text-slate-600 mt-2 font-medium">Rs. {product.price}</p>

        <Link to={`/product/${product.id}`}>
          <button className="bg-[#0B1E3A] text-white px-4 py-3 rounded-xl mt-4 w-full hover:bg-[#081629] transition">
            View Product
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default ProductCard;