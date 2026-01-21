import { Link } from "react-router-dom";
import { useProduct } from "../Contexts/ProductContext";

const NavBar = () => {
  const { searchTerm, setSearchTerm, cart } = useProduct();

  return (
    <nav className="flex flex-col sm:flex-row gap-4 justify-between items-center px-6 py-4 shadow">
      <Link to="/" className="text-xl font-bold">
        ShopNow
      </Link>

      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border px-3 py-2 rounded w-64"
      />

      <Link
        to="/cart"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Cart ({cart.length})
      </Link>
    </nav>
  );
};

export default NavBar;
