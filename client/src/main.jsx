import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { UserProvider } from "./context/UserProvider.jsx";
import { BrowserRouter } from "react-router-dom";
import DataContext from "./context/DataContext.jsx";
import { CartProvider } from "./context/CartCondext.jsx";
//import { ToastContainer } from "react-toastify";
import {AdminProvider} from "./components/admin/adminCondext/AddCondext.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <AdminProvider>
      <UserProvider>
        <CartProvider>
          <DataContext>
            <App />
          </DataContext>
        </CartProvider>
      </UserProvider>
      </AdminProvider>
    </BrowserRouter>
  </StrictMode>
);
