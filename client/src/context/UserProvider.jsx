import axios from "axios";
import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllUsers = async () => {
      const { data } = await axios.get("http://localhost:3000/users/");
      setUsers(data);
    };
    fetchAllUsers();
  }, []);

  useEffect(() => {
    const user = localStorage.getItem("currentUser");
    setCurrentUser(JSON.parse(user));
  }, []);

  const registerUser = async (name, email, password) => {
    try {
      const existingUser = users.find((u) => u?.email === email);
      if (existingUser) {
        alert("User already exists");
        return;
      }
      await axios.post("http://localhost:3000/users/", {
        name: name,
        email: email,
        password: password,
        cart: [],
        isBlocked: false,
        isAdmin: false,
      });
      navigate("/login");
    } catch (error) {
      console.log(error, "Register Error");
    }
  };

  const loginUser = async (email, password) => {
    try {
      const user = users.find(
        (u) => u.email === email && u.password === password
      );
      //admin
      

      if (user) {
         if(user.isAdmin===false){
         
          setUsers(user)
          localStorage.setItem("currentUser", JSON.stringify(user));
          localStorage.setItem("cart",JSON.stringify(user?.cart))
          navigate("/");
         }else{
          setUsers(user)
          localStorage.setItem("currentUser", JSON.stringify(user));
          navigate("/Admindashboard")
          // alert("welcome to adminpage")
         }
        setCurrentUser(user);
       
      alert("logged successfully")
      } 
      else{
        alert("Invalid Credentials");
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const userLogout = () => {
    const confirm = window.confirm("Are You Sure");
    if (confirm) {
      setCurrentUser(null);
      localStorage.removeItem("currentUser");
      localStorage.removeItem("cart");
    }
  };

  const value = {
    loginUser,
    registerUser,
    currentUser,
    userLogout,
    setCurrentUser
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
