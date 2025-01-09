 import React from 'react'
 import { useState } from 'react'

function Registration() {
  const [input,setinput]=useState(
    {
      name:"",
      email:"",
      password:"",
      cpassword:"",
      phone:"",
      address:"",
       
    }
  ) 
  function change(e){
      const {name,value}=e.traget;
      setinput({...input,[name]:value})
  }



  return (
    <div>registration</div>

    
    
  )
}

export default Registration