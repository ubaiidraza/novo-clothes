import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="max-w-7xl mx-auto px-6 py-32">
      <h1 className="text-5xl font-bold mb-10">
        Shopping Cart
      </h1>

      {cart.length === 0 ? (
        <h2>Cart Empty</h2>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="border p-4 rounded-lg flex justify-between items-center"
            >
              <div>
                <h3>{item.name}</h3>
                <p>Rs. {item.price}</p>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;