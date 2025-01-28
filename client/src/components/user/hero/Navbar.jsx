import { useContext, useState } from "react";
import { FaShoppingCart, FaRegHeart, FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.jpg";
import { UserContext } from "../../../context/UserProvider";

function Navbar() {
  const navigate = useNavigate();
// const [isMenuOpen, setIsMenuOpen] = useState(false);
// let cartCount = 0;
const {currentUser,userLogout} = useContext(UserContext)


  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="container mx-auto flex items-center justify-between">
        
        <div className="cursor-pointer" onClick={() => navigate("/")}>
          <img src={logo} alt="logo" className="h-12 w-auto" />

        </div>

        <ul className="hidden md:flex gap-6 font-medium text-black">
          <li onClick={() => navigate("/collections")}className="hover:text-red-500 cursor-pointer">Collections</li>
          <li onClick={() => navigate("/bedroom")}className="hover:text-red-500 cursor-pointer">Bed Room</li>
          <li onClick={() => navigate("/Homedecor")}className="hover:text-red-500 cursor-pointer">Home Decor</li>
          <li onClick={() => navigate("/kitchendining")}className="hover:text-red-500 cursor-pointer">Kitchen/Dining</li>
        </ul>

        <div className="flex items-center gap-4">
          
         
          {currentUser && (
            <div className="relative">
            <FaShoppingCart onClick={() => navigate("/Cart")} className="text-black text-2xl cursor-pointer hover:text-red-400 transition-all" />
            {/* {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full px-2">
                {cartCount}
              </span>
            )} */}
          </div>
          )}

         
          <FaRegHeart onClick={() => navigate("/Wishlist")} className="text-black text-2xl cursor-pointer hover:text-red-400 transition-all" />

          {currentUser ?  <button onClick={userLogout}>logout</button>  : <button onClick={() => navigate("/login")} className="hidden md:block bg-white text-blue-900 px-4 py-2 rounded hover:bg-gray-100">
            Login
          </button>  }
           </div>
      </div>

     
    </nav>
  );
}

export default Navbar;
