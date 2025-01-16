import React from 'react'
import Registration from './components/user/Registration'
import Login from './components/user/login'
import Navnar from './components/user/hero/navnar'
import { BrowserRouter,Router,Route } from 'react-router-dom'
import ShopCatagory from './pages/ShopCatagory'


function App() {

  return (
    <>
      
       <BrowserRouter>
       <Navnar />
       <Router>
             <Route path='/' element={<collections />}/>
             <Route path='/' element={<ShopCatagory />}/>
             <Route path='/' element={<ShopCatagory />}/>
             <Route path='/' element={<ShopCatagory />}/>

        </Router>
       
       </BrowserRouter>

        <Registration />
        <Login />
      
      </>
    
  )
}

export default App