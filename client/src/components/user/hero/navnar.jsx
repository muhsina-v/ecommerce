import React from 'react'
import logo from "../../../assets/logo.webp";
import { FaShoppingCart , FaRegHeart} from "react-icons/fa";


function Navnar() {
  return (
    <div className='navbar'>
      <div className='logo' >
        <img src={logo} alt='logo' />
        
      </div>
      <ul className="links">
        <li>Collection</li>
        <li>Bed Room</li>
        <li>Home Decor</li>
        <li>Kitchen/Dining</li>
      </ul>
      <FaShoppingCart />
      <FaRegHeart />
      <button>login</button>
    </div>
  )
}

export default Navnar

