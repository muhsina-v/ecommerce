import { Outlet } from "react-router-dom";
import Adminnavbar from "./Adminnavbar";

function Adminlayout(){
    return(
        <div className="flex">
            <Adminnavbar/>
            <div className="flex-1 p-6">
                <Outlet />

            </div>
        </div>

    )
}
export default Adminlayout;