import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import{Navbar,Sidebar, Footer} from './components'

import{Home,About,Cart,Error,Products, SingleProduct,Checkout} from './pages'

function App() {
  return (
   <BrowserRouter>
    <Navbar/>
    <Sidebar/>
    <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/cart' element={<Cart/>}/>
     <Route path='/products' element={<Products/>}/>
     <Route path='/products/:id' children={SingleProduct} element={<SingleProduct/>}/>
     <Route path='/checkout' element={<Checkout/>}/>
     <Route path='*' element={<Error/>}/>
    </Routes>
    <Footer/>
   </BrowserRouter>
  )
}

export default App
