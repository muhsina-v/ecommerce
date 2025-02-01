import { useContext, useState } from "react";
import { FaShoppingCart, FaRegHeart, FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.jpg";
import { UserContext } from "../../../context/UserProvider";
import { CartContext } from "../../../context/CartCondext";

function Navbar() {
  const navigate = useNavigate();
  const { currentUser, userLogout } = useContext(UserContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart } = useContext(CartContext);

  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="container mx-auto flex items-center justify-between ">
        <div className="cursor-pointer" onClick={() => navigate("/")}>
          <img src={logo} alt="logo" className="h-12 w-auto" />
        </div>

        <ul className="hidden md:flex gap-6 font-medium text-black">
          <li
            onClick={() => navigate("/collections")}
            className="hover:text-red-500 cursor-pointer"
          >
            Collections
          </li>
          <li
            onClick={() => navigate("/bedroom")}
            className="hover:text-red-500 cursor-pointer"
          >
            Bed Room
          </li>
          <li
            onClick={() => navigate("/Homedecor")}
            className="hover:text-red-500 cursor-pointer"
          >
            Home Decor
          </li>
          <li
            onClick={() => navigate("/kitchendining")}
            className="hover:text-red-500 cursor-pointer"
          >
            Kitchen/Dining
          </li>
        </ul>
             
        <div className="flex items-center gap-4">
        <div className="flex items-center gap-6 order-1 md:order-none">
          {currentUser && (
            <div className="relative  ">
              <FaShoppingCart
                onClick={() => navigate("/Cart")}
                className="text-black text-2xl cursor-pointer hover:text-red-400 transition-all"
              />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full px-2">
                  {cart.length}
                </span>
              )}
            </div>
          )}
        </div>

        <FaRegHeart
          onClick={() => navigate("/Wishlist")}
          className="text-black text-2xl cursor-pointer hover:text-red-400 transition-all"
        />

        {currentUser ? (
          <button
            onClick={userLogout}
            className="hidden md:block bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="hidden md:block bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800 transition"
          >
            Login
          </button>
        )}
 </div>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-black text-2xl"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white w-full flex flex-col items-center gap-4 py-4 absolute top-16 left-0 shadow-md z-50">
          <ul className="flex flex-col gap-4 font-medium text-black">
            <li
              onClick={() => {
                navigate("/collections");
                setIsMenuOpen(false);
              }}
              className="hover:text-red-500 cursor-pointer"
            >
              Collections
            </li>
            <li
              onClick={() => {
                navigate("/bedroom");
                setIsMenuOpen(false);
              }}
              className="hover:text-red-500 cursor-pointer"
            >
              Bed Room
            </li>
            <li
              onClick={() => {
                navigate("/Homedecor");
                setIsMenuOpen(false);
              }}
              className="hover:text-red-500 cursor-pointer"
            >
              Home Decor
            </li>
            <li
              onClick={() => {
                navigate("/kitchendining");
                setIsMenuOpen(false);
              }}
              className="hover:text-red-500 cursor-pointer"
            >
              Kitchen/Dining
            </li>
          </ul>

          {currentUser ? (
            <button
              onClick={userLogout}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => {
                navigate("/login");
                setIsMenuOpen(false);
              }}
              className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800 transition"
            >
              Login
            </button>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;






