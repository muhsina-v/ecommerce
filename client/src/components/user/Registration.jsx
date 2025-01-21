import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserProvider";

function Registration() {
  const navigate = useNavigate();
  const { registerUser } = useContext(UserContext);
  const [input, setInput] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    cpassword: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!input.name.trim()) newErrors.name = "Name is required.";
    if (!input.email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(input.email)) newErrors.email = "Invalid email format.";
    if (!input.phone.trim()) newErrors.phone = "Phone number is required.";
    else if (!/^\d{10}$/.test(input.phone)) newErrors.phone = "Phone number must be 10 digits.";
    if (!input.password) newErrors.password = "Password is required.";
    else if (input.password.length < 8 || !/[A-Z]/.test(input.password) || !/[0-9]/.test(input.password) || !/[!@#$%^&*]/.test(input.password)) {
      newErrors.password = "Password must be at least 8 characters with an uppercase, a number, and a special character.";
    }
    if (!input.cpassword) newErrors.cpassword = "Confirm Password is required.";
    else if (input.cpassword !== input.password) newErrors.cpassword = "Passwords do not match.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      setLoading(true);
      await registerUser(input.name, input.phone, input.email, input.password);
      alert("Registration Successful!");
      navigate("/login");
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-md bg-gray-50 shadow-md rounded-md border border-gray-300">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <h2 className="text-2xl font-semibold text-center text-gray-700">Register</h2>

        {["name", "phone", "email", "password", "cpassword"].map((field, index) => (
          <div key={index}>
            <input
              type={field.includes("password") ? "password" : "text"}
              name={field}
              value={input[field]}
              onChange={handleChange}
              placeholder={`Enter ${field}`}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
            />
            {errors[field] && <p className="text-red-500 text-sm">{errors[field]}</p>}
          </div>
        ))}

        <button type="submit" className="w-full py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition" disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
}

export default Registration;
