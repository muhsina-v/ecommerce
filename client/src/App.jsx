import React from 'react'
import Registration from './components/user/Registration'
import Login from './components/user/login'
import Navbar from './components/user/hero/Navbar'
import {Routes,Route } from 'react-router-dom'
import Homedecor from './pages/Homedecor'
import Bedroom from './pages/Bedroom'
import Kitchendining from './pages/Kitchendining'
import Collections from './pages/Collections'
import Footer from './components/user/hero/Footer'
import Home from './pages/Home'
import Cart from './pages/cart'
import Wishlist from './pages/wishlist'
import Details from './pages/Details'
import Admindashboard from './components/admin/Admindashboard'


function App() {

  return (
    <>
      
       <Navbar />
       <Routes>
             <Route path='/' element={<Home />}/>
             <Route path='/Collections' element={<Collections />}/>
             <Route path='/Bedroom' element={<Bedroom />}/>
             <Route path='/Homedecor' element={<Homedecor />}/>
             <Route path='/kitchendining' element={<Kitchendining />}/>
             <Route path= "/login" element={<Login/>}/>
             <Route path= "/register" element={<Registration/>}/>
             <Route path='/Cart' element={<Cart />}/>
             <Route path='/wishlist' element={<Wishlist />}/>
             <Route path='/product/details/:id' element={<Details/>}/> 
              <Route path='/Admindashboard' element={<Admindashboard/>}/>
              
             {/* <Route path="*" element={<NotFound />} />  Handles 404 */}

        </Routes>
        <Footer />
        
      </>
    
  )
}

export default App