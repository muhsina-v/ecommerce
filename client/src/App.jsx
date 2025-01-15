import React from 'react'
import Registration from './components/user/Registration'
import Login from './components/user/login'
// import Navnar from './components/user/hero/Navnar'
import Navnar from './components/user/hero/navnar'


function App() {

  return (
    <>
      <h1>
        <Registration />
        <Login />
        <Navnar />

         </h1>
      </>
    
  )
}

export default App