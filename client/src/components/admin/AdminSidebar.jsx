import { FaHome, FaUser, FaBox } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function AdminSidebar({ setActiveComponent }) {
   const navigate=useNavigate()

  return (
    <div className="h-screen bg-blue-950 w-64 p-9 fixed z-20">
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
        onClick={()=>navigate("/login")}
          className="flex items-center gap-2 p-2 hover:bg-blue-900 rounded w-full text-left"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default AdminSidebar;
