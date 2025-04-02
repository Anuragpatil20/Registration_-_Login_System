import React from 'react'
import Signup from './Component/Signup'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Component/Login'
import Home from './Home'
import Navbar from './Component/Navbar'

function App() {
  return (
    <BrowserRouter>

    <Routes>
    <Route path='' element ={<Navbar/>}></Route>
    <Route path='/register' element ={<Signup/>}></Route>
    <Route path='/login' element ={<Login/>}></Route>
    <Route path='/home' element ={<Home/>}></Route>
    
    
    </Routes>
    
    </BrowserRouter>
  )
}

export default App