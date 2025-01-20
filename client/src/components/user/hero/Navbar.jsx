import logo from "../../../assets/logo.jpg";
import { FaShoppingCart, FaRegHeart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  let cartCount = 0;

  return (
    <div className="navbar flex items-center justify-between bg-white px-6 py-4 shadow-md">
      
      {/* Logo */}
      <div className='logo cursor-pointer' onClick={() => navigate('/')}>
        <img src={logo} alt='logo' className='h-12 w-auto' />
      </div>

      {/* Navigation Links */}
      <ul className="links flex gap-6 font-medium text-black">
        <li onClick={() => navigate('/collections')} className="hover:text-red-500 cursor-pointer">Collections</li>
        <li onClick={() => navigate('/bedroom')} className="hover:text-red-500 cursor-pointer">Bed Room</li>
        <li onClick={() => navigate('/Homedecor')} className="hover:text-red-500 cursor-pointer">Home Decor</li>
        <li onClick={() => navigate('/kitchendining')} className="hover:text-red-500 cursor-pointer">Kitchen/Dining</li>
      </ul>

      {/* Icons & Login */}
      <div className="relative flex items-center gap-4">
        
        {/* Shopping Cart */}
        <div className="relative group">
          <FaShoppingCart onClick={()=> navigate('/Cart')}className="text-black text-2xl cursor-pointer group-hover:text-red-400 group-hover:scale-110 transition-all" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full px-2">
              {cartCount}
            </span>
          )}
        </div>

        {/* Wishlist */}
        <FaRegHeart onClick={()=> navigate('/Wishlist')} className="text-black text-2xl cursor-pointer hover:text-red-400 hover:scale-110 transition-all" />
        <button 
          onClick={() => navigate('/')} 
          className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400">
          Home
        </button>

        {/* Login Button */}
        <button 
          onClick={() => navigate('/login')} 
          className="bg-white text-blue-900 px-4 py-2 rounded hover:bg-gray-100">
          Login
        </button> 
        
      </div>
    </div>
  );
}

export default Navbar;
