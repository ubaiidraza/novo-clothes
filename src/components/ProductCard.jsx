import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProductCard = ({ product }) => {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg"
    >
      <img
        src={product.image}
        alt={product.name}
        className="h-72 w-full object-cover"
      />

      <div className="p-4">
        <h3 className="font-semibold text-lg">
          {product.name}
        </h3>

        <p className="text-gray-600 mt-2">
          Rs. {product.price}
        </p>

        <Link to={`/product/${product.id}`}>
          <button className="bg-black text-white px-4 py-2 rounded-lg mt-4 w-full hover:bg-gray-800 transition">
            View Product
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default ProductCard;