import { useState } from "react";
import { FaHome, FaUser, FaBox, FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function AdminSidebar({ setActiveComponent }) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-30 p-2 bg-blue-950 text-white rounded-lg md:hidden"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      <div
        className={`h-screen bg-blue-950 w-64 p-9 fixed z-20 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <div className="text-white">
          <button
            onClick={() => setActiveComponent("dashboard")}
            className="flex items-center gap-2 p-2 hover:bg-blue-900 rounded-full w-full text-left"
          >
            <FaHome /> Dashboard
          </button>
          <button
            onClick={() => setActiveComponent("adminuser")}
            className="flex items-center gap-2 p-2 hover:bg-blue-900 rounded w-full text-left"
          >
            <FaUser /> User
          </button>
          <button
            onClick={() => setActiveComponent("addproduct")}
            className="flex items-center gap-2 p-2 hover:bg-blue-900 rounded w-full text-left"
          >
            <FaBox /> Products
          </button>
          <button
            onClick={() => setActiveComponent("orders")}
            className="flex items-center gap-2 p-2 hover:bg-blue-900 rounded w-full text-left"
          >
            Orders
          </button>
          <button
            onClick={() => navigate("/login")}
            className="flex items-center gap-2 p-2 hover:bg-blue-900 rounded w-full text-left"
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
}

export default AdminSidebar;