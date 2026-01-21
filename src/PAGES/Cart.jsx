import { useProduct } from "../Contexts/ProductContext";

const Cart = () => {
  const { cart, removeFromCart } = useProduct();

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  if (cart.length === 0) {
    return (
      <p className="text-center mt-20 text-gray-500">Your cart is empty</p>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-semibold mb-6">Your Cart</h2>

      {cart.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center border-b py-4"
        >
            <div className="">
                <img src={item.image} alt="" className="w-18 h-10 rounded-sm" />
            </div>
          <div>
            <h3 className="font-medium">{item.name}</h3>
            <p className="text-sm text-gray-600">
              ₹{item.price} × {item.qty}
            </p>
          </div>

          <p className="font-medium">₹{item.price * item.qty}</p>
          <button
            onClick={() => removeFromCart(item.id)}
            className="text-red-500 hover:underline"
          >
            Remove
          </button>
        </div>
      ))}

      <div className="mt-6 text-right text-xl font-semibold">
        Total: ₹{totalAmount}
      </div>
    </div>
  );
};

export default Cart;
