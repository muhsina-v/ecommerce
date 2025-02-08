import { useState } from "react";
import Addproduct from "./Addproduct";
import Adminuser from "./Adminuser";
import Orders from "./Orders";
import AdminSidebar from "./AdminSidebar";
import Admindashboard from "./Admindashboard";

function Adminlayout() {
  const [activeComponent, setActiveComponent] = useState("dashboard");

  const renderComponent = () => {
    switch (activeComponent) {
      case "dashboard":
        return <Admindashboard />;
      case "addproduct":
        return <Addproduct />;
      case "adminuser":
        return <Adminuser />;
      case "orders":
        return <Orders />;
      default:
        return <Admindashboard />;
    }
  };

  return (
    <div className="flex w-full">
      <AdminSidebar setActiveComponent={setActiveComponent} />
      <div className="w-full">{renderComponent()}</div>
    </div>
  );
}

export default Adminlayout;
