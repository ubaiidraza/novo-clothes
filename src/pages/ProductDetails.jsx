import { useParams } from "react-router-dom";
import products from "../data/products";

const ProductDetails = () => {

  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h1>Product Not Found</h1>;
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-32">

      <div className="grid md:grid-cols-2 gap-10">

        <img
          src={product.image}
          alt={product.name}
          className="w-full rounded-xl"
        />

        <div>

          <h1 className="text-5xl font-bold">
            {product.name}
          </h1>

          <p className="text-2xl mt-5">
            Rs. {product.price}
          </p>

          <button className="bg-black text-white px-8 py-4 rounded-lg mt-8">
            Add To Cart
          </button>

        </div>

      </div>

    </div>
  );
};

export default ProductDetails;