
import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Add from './pages/Add'
import { Toaster } from "react-hot-toast";
import Update from './pages/Update'
function App() {
  return (
  
  
 <>
 <Toaster position="top-center" reverseOrder={false} />
  <Routes>
    <Route  path='/' element={<Home/>}/>
     <Route path='/add' element={<Add/>}/>
      <Route path='/edit/:id' element={<Update/>}/>
  </Routes>


  </>
  )
}

export default App