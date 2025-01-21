import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate=useNavigate()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Both username and password are required!");
      return;
    }

    setError("");
    alert("Login successful!");
  
  };

  



  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>

        {error && (
          <p className="text-red-500 text-center text-sm mt-2">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="mt-6">
        
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          <button onClick={()=>navigate("/")}
            type="submit"
            className="w-full py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>
          
        </form>
        <h1>don't have an account <a href="/register"className="text-blue-500   hover:text-blue-800" >Register</a>here! </h1>
      </div>
    </div>
  );
}

export default Login;
