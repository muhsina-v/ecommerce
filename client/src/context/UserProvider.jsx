import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const registerUser = async (name, phone, email, password) => {
    try {
      await axios.post("http://localhost:5000/user/", {
        name: name,
        email: email,
        phone: phone,
        password: password,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const loginUser = async (email, password) => {
    try {
    } catch (error) {
      console.log(err);
    }
  };

  return (
    <UserContext.Provider value={{ registerUser }}>
      {children}
    </UserContext.Provider>
  );
};
