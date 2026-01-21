import { useProduct } from "../Contexts/ProductContext";

const ProductList = () => {
  const { products, addToCart } = useProduct();

  if (products.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-10">
        No products found
      </p>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded shadow overflow-hidden"
          >
            <img
              src={product.image}
              alt=""
              className="w-full h-40 object-cover"
            />

            <div className="p-4">
              <h3 className="font-medium">{product.name}</h3>
              <p className="text-gray-600 mb-3">₹{product.price}</p>

              <button
                onClick={() => addToCart(product)}
                className="w-full bg-blue-600 hover:bg-blue-800 transition-all duration-300 cursor-pointer text-white py-2 rounded">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
