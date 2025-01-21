import React from 'react'
import {FaFacebook,
    FaTwitter,
    FaInstagram} from "react-icons/fa";

function Footer() {

  return (
    <div>
    <footer className="bg-gray-800 text-white mt-10">
    <div className="container mx-auto px-6 py-8">
      <div className="flex flex-wrap justify-between">
        
        <div className="w-full md:w-1/5 mb-">
          <h2 className="text-lg font-semibold mb-1">About Us</h2>
          <p>
            We provide high-quality furniture to make your house a home.
            Discover our collections designed for comfort and style.
          </p>
        </div>

       
        <div className="w-full md:w-1/3 mb-6">
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-red-400">
                Collection
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-red-400">
                Bed Room
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-red-400">
                Home Decor
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-red-400">
                Kitchen/Dining
              </a>
            </li>
          </ul>
        </div>

      
        <div className="w-full md:w-1/3 mb-6">
          <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex gap-4">
            <a href=""></a>
            <FaFacebook className="text-2xl cursor-pointer hover:text-blue-500 transition-all"/>
            <FaTwitter className="text-2xl cursor-pointer hover:text-blue-400 transition-all" />
            <FaInstagram className="text-2xl cursor-pointer hover:text-pink-500 transition-all" />
          </div>
        </div>
      </div>
    </div>

   
    <div className="bg-gray-700 text-center py-4">
      <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
    </div>
  </footer>
</div>
);
}

    
  


export default Footer