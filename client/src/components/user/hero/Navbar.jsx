 
import logo from "../../../assets/logo.jpg";
import { FaShoppingCart , FaRegHeart} from "react-icons/fa";
import { useNavigate, Link } from 'react-router-dom';


function Navbar() {
  //const [cartCount, setCartCount] = useState(0);
  const navigate = useNavigate()

 let cartCount=0;

  return (
    <div>

    <div className="navbar flex items-center justify-between bg-red-200
     px-6 py-4 shadow-md">

      <div className='logo '>
        <img src={logo} alt='logo' className='h-12 w-auto' />
        
      </div>
      <ul className="links flex gap-6 font-medium ">
        <li className="hover:text-red-500 cursor-pointer ">Collection</li>
        <li className="hover:text-red-500 cursor-pointer ">Bed Room</li>
        <li className="hover:text-red-500 cursor-pointer ">Home Decor</li>
        <li className="hover:text-red-500 cursor-pointer ">Kitchen/Dining</li>
      </ul >

      <div className="relative flex items-center gap-4">
        
        <div className="relative group">
          <FaShoppingCart className="text-black text-2xl cursor-pointer group-hover:text-red-400 group-hover:scale-110 transition-all" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs font-bold rounded-full px-2">
              {cartCount}
            </span>
          )}
        </div>

        <FaRegHeart className="text-black text-2xl cursor-pointer hover:text-red-400 hover:scale-110 transition-all" />

        <button onClick={() => navigate('/login')} 
        className="bg-white text-red-400 px-4 py-2 rounded hover:bg-gray-100">
          Login
        </button> 
        
    </div>
    </div>
    </div>
  )}
     
     
export default Navbar;
  




