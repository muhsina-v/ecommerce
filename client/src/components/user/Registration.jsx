 import React from 'react'
 import { useState } from 'react'
 

function Registration() {
  const [input,setinput]=useState(
    {
      name:"",
      email:"",
      phonenumber:"",
      password:"",
      cpassword:"",
      
       
    }
  ) 
  function change(e){//when user types
      const {name,value}=e.target;
      setinput({...input,[name]:value})//we want to use spread opp if we use array or object in usestate
  }
  function handleSubmit(e){//to avoid refreshing in every time
     e.preventDefault()
     console.log("Form submitted:", input);

     if(input.password!==input.cpassword){
      alert("password do not match!")
      return
    }

    console.log("Registration Successful!", input);
    alert("Registration Successful!");
  }
  



  return (
    <div className="min-h-screen bg-cover bg-center bg-[url('https://www.google.com/imgres?q=background%20image%20for%20furniture%20website&imgurl=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fthumbnails%2F035%2F209%2F885%2Fsmall_2x%2Fai-generated-cozy-green-armchair-on-empty-soft-green-wall-background-in-minimalist-the-living-room-3d-render-illustration-with-copy-space-photo.jpg&imgrefurl=https%3A%2F%2Fwww.vecteezy.com%2Ffree-photos%2Fhome-furniture-background&docid=Sbx3Y4irGMKvtM&tbnid=Er4HoPuQS4-kAM&vet=12ahUKEwjP3cPD-OqKAxWBSWwGHRbjPDgQM3oECBwQAA..i&w=711&h=400&hcb=2&ved=2ahUKEwjP3cPD-OqKAxWBSWwGHRbjPDgQM3oECBwQAA')] flex items-center justify-center">
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

    <div className="container mx-auto p-6 max-w-md md:max-w-lg lg:max-w-xl bg-gray-50 shadow-md rounded-md border border-gray-300">
      <form 
        onSubmit={handleSubmit} 
        className="flex flex-col space-y-6"
      >
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
            required 
            className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </label>
  
        {/* Phone Number Input */}
        <label className="block text-sm font-medium text-gray-600">
          Phone Number
          <input 
            type="number" 
            name="phonenumber" 
            value={input.phonenumber} 
            onChange={change} 
            placeholder="Enter your phone number" 
            required 
            className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
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
            required 
            className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
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
            required 
            className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          <p className="mt-1 text-xs text-gray-500">
            Password must have at least 8 characters, including an uppercase letter and a special character.
          </p>
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
            required 
            className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
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
  