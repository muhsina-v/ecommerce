import { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "../../context/UserProvider";

const Register = () => {
  const {registerUser} = useContext(UserContext)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    cPassword: "",
  });




  const [passwordError,setPasswordError] =useState(""); // Stores password error message

  const [message,setMessage]=useState(""); // Stores success or failure messages

  // Handle input changes
  const handleChange=(e) => {
    const {name,value} = e.target;
    setFormData((prevData) => (
      { ...prevData, [name]: value }));

    // Clear password error when user types
    if (name === "password" || name === "cPassword") {
      setPasswordError("");
    }
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage("");

    // Password validation
    if (formData.password !== formData.cPassword) {
      setPasswordError("Passwords do not match!");
      return;
    }

    try {
      await registerUser(formData.name,formData.email,formData.password)
      // Store data in JSON Server
      setMessage("Registration successful!");
      setFormData({name:"", email: "", password: "", cPassword: ""}); // Clear form
    } catch (error) {
      setMessage("Registration failed. Try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-80">
        <h2 className="text-xl font-bold text-center mb-4">Register</h2>

        {message && <p className="text-center mb-2">{message}</p>}

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="password"
            name="cPassword"
            value={formData.cPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            className="w-full p-2 border rounded"
            required
          />
          {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>} 
          
          <button type="submit" className="w-full bg-blue-950 text-white p-2 rounded hover:bg-blue-800">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
