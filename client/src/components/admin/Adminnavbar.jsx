import { Link } from "react-router-dom"
import { FaHome, FaUser, FaBox } from "react-icons/fa";
 function Adminnavbar(){


return (
    
<div className="h-screen bg-blue-950 w-64 p-9 ">
<div className="text- text-white">
  <Link to="/Admindashboard" className="flex items-center gap-2 p-2  hover:bg-blue-900 rounded-full ">  <FaHome /> Dash board</Link>
  <Link to="/Adminuser" className="flex items-center gap-2 p-2  hover:bg-blue-900 rounded"> <FaUser />User</Link>
  <Link to="/Addproduct" className="flex items-center gap-2 p-2 hover:bg-blue-900 rounded"> <FaBox />Products</Link>
  <Link to="/Oders" className="flex items-center gap-2 p-2 hover:bg-blue-900 rounded">Oders</Link>
  <Link to="/logout" className="flex items-center gap-2 p-2 hover:bg-blue-900 rounded">Logout</Link>

    </div>
</div>

)
}

export default Adminnavbar