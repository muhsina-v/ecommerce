import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { UserProvider } from "./context/UserProvider.jsx";
import { BrowserRouter } from "react-router-dom";
import DataContext from "./context/DataContext.jsx";
import { CartProvider } from "./context/CartCondext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <UserProvider>
          <DataContext>
            <App />
          </DataContext>
        </UserProvider>
      </CartProvider>
    </BrowserRouter>
  </StrictMode>
);
