import React, { useState } from "react";
import "./Register.css";

function Registration() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    phonenumber: "",
    password: "",
    cpassword: "",
  });

  const [errors, setErrors] = useState({});

  // Validation logic
  const validateField = (name, value) => {
    const newErrors = { ...errors };

    // Name validation
    if (name === "name") {
      if (!value.trim()) {
        newErrors.name = "Name is required.";
      } else {
        delete newErrors.name;
      }
    }

    // Email validation
    if (name === "email") {
      if (!value.trim()) {
        newErrors.email = "Email is required.";
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        newErrors.email = "Invalid email format.";
      } else {
        delete newErrors.email;
      }
    }

    // Phone number validation
    if (name === "phonenumber") {
      if (!value.trim()) {
        newErrors.phonenumber = "Phone number is required.";
      } else if (!/^\d{10}$/.test(value)) {
        newErrors.phonenumber = "Phone number must be 10 digits.";
      } else {
        delete newErrors.phonenumber;
      }
    }

    // Password validation
    if (name === "password") {
      if (!value) {
        newErrors.password = "Password is required.";
      } else if (
        value.length < 8 ||
        !/[A-Z]/.test(value) ||
        !/[0-9]/.test(value) ||
        !/[!@#$%^&*]/.test(value)
      ) {
        newErrors.password =
          "Password must have at least 8 characters, including an uppercase letter, a number, and a special character.";
      } else {
        delete newErrors.password;
      }
    }

    // Confirm password validation
    if (name === "cpassword") {
      if (!value) {
        newErrors.cpassword = "Confirm Password is required.";
      } else if (value !== input.password) {
        newErrors.cpassword = "Passwords do not match.";
      } else {
        delete newErrors.cpassword;
      }
    }

    setErrors(newErrors);
  };

  // Handle input changes
  const change = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
    validateField(name, value); // Validate field on change
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    const newErrors = {};
    Object.keys(input).forEach((key) => validateField(key, input[key]));

    // If there are errors, stop submission
    if (Object.keys(errors).length > 0) {
      alert("Please fix the errors before submitting.");
      return;
    }

    alert("Registration Successful!");
    console.log("Form submitted successfully:", input);

    // Reset the form
    setInput({
      name: "",
      email: "",
      phonenumber: "",
      password: "",
      cpassword: "",
    });

    // Clear errors
    setErrors({});
  };

  return (
    <div>
      <div className="container mx-auto p-6 max-w-md md:max-w-lg lg:max-w-xl bg-gray-50 shadow-md rounded-md border border-gray-300">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
          <h2 className="text-2xl font-semibold text-center text-gray-700">
            Registration
          </h2>

          {/* Name Input */}
          <label className="block text-sm font-medium text-gray-600">
            Name
            <input
              type="text"
              name="name"
              value={input.name}
              onChange={change}
              placeholder="Enter your name"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </label>

          {/* Phone Number Input */}
          <label className="block text-sm font-medium text-gray-600">
            Phone Number
            <input
              type="text"
              name="phonenumber"
              value={input.phonenumber}
              onChange={change}
              placeholder="Enter your phone number"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
            {errors.phonenumber && (
              <p className="text-red-500 text-sm">{errors.phonenumber}</p>
            )}
          </label>

          {/* Email Input */}
          <label className="block text-sm font-medium text-gray-600">
            Email
            <input
              type="email"
              name="email"
              value={input.email}
              onChange={change}
              placeholder="Enter your email"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </label>

          {/* Password Input */}
          <label className="block text-sm font-medium text-gray-600">
            Password
            <input
              type="password"
              name="password"
              value={input.password}
              onChange={change}
              placeholder="Enter your password"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </label>

          {/* Confirm Password Input */}
          <label className="block text-sm font-medium text-gray-600">
            Confirm Password
            <input
              type="password"
              name="cpassword"
              value={input.cpassword}
              onChange={change}
              placeholder="Confirm your password"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
            {errors.cpassword && (
              <p className="text-red-500 text-sm">{errors.cpassword}</p>
            )}
          </label>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Registration;
