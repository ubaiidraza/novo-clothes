import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg">
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
          <button className="bg-black text-white px-4 py-2 rounded-lg mt-4 w-full">
            View Product
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;