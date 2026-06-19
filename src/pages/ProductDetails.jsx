import { useParams } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();

  const { addToCart } = useCart();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <div className="py-32 text-center">
        <h1 className="text-4xl font-bold">
          Product Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-32">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        
        <img
          src={product.image}
          alt={product.name}
          className="w-full rounded-xl shadow-lg"
        />

        <div>
          <h1 className="text-5xl font-bold">
            {product.name}
          </h1>

          <p className="text-2xl mt-5 font-semibold">
            Rs. {product.price}
          </p>

          <p className="text-gray-600 mt-6">
            Premium quality clothing designed for
            comfort, style and everyday wear.
          </p>

          <button
            onClick={() => addToCart(product)}
            className="bg-black text-white px-8 py-4 rounded-lg mt-8 hover:bg-gray-800 transition"
          >
            Add To Cart
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProductDetails;