import React from "react";
import Registration from "./components/user/Registration";
import Login from "./components/user/login";
import Navbar from "./components/user/hero/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import Homedecor from "./pages/Homedecor";
import Bedroom from "./pages/Bedroom";
import Kitchendining from "./pages/Kitchendining";
import Collections from "./pages/Collections";
import Footer from "./components/user/hero/Footer";
import Home from "./pages/Home";
import Cart from "./pages/cart";
import Wishlist from "./pages/wishlist";
import Details from "./pages/Details";
//admin
// import Admindashboard from "./components/admin/Admindashboard";
// import Addproduct from "./components/admin/Addproduct";
// import Orders from "./components/admin/Oders";
import Adminlayout from "./components/admin/Adminlayout";
import AdminSidebar from "./components/admin/AdminSidebar";

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");
  return (
    <>
      {!isAdminRoute && <Navbar />  }
      {isAdminRoute && <AdminSidebar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Collections" element={<Collections />} />
        <Route path="/Bedroom" element={<Bedroom />} />
        <Route path="/Homedecor" element={<Homedecor />} />
        <Route path="/kitchendining" element={<Kitchendining />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/product/details/:id" element={<Details />} />
        {/* //admin */}
        <Route path="/admin" element={<Adminlayout />} />
        {/* <Route path="/admin/addproduct" element={<Addproduct />} /> */}
        {/* <Route path="/admin/orders" element={<Orders />} /> */}
        {/* <Route path="*" element={<NotFound />} />  Handles 404 */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
