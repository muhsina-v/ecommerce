import React from 'react'
import Registration from './components/user/Registration'
import Login from './components/user/login'
import Navbar from './components/user/hero/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Homedecor from './pages/Homedecor'
import Bedroom from './pages/Bedroom'
import Kitchendining from './pages/Kitchendining'
import Collections from './pages/Collections'
import Footer from './components/user/hero/Footer'
import Home from './pages/Home'

function App() {

  return (
    <>
      
       <BrowserRouter>
       <Navbar />
       <Routes>
             <Route path='/' element={<Home />}/>
             <Route path='/Collections' element={<Collections />}/>
             <Route path='/Bedroom' element={<Bedroom />}/>
             <Route path='/ Homedecor' element={<Homedecor />}/>
             <Route path='/kitchendining' element={<Kitchendining />}/>
             <Route path= "/login" element={<Login/>}/>
             <Route path= "/register" element={<Registration/>}/>

        </Routes>
      
        <Footer />
        </BrowserRouter>
      </>
    
  )
}

export default App