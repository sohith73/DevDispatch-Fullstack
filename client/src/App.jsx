import './App.css'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Signin from "./pages/Signin"
import SignUp from "./pages/SIgnUp"
import PrivateRoute from './components/PrivateRoute';




function App() {
     return (
          <div className='bg-[#fff3e3] w-full h-screen font-mono'>
               <BrowserRouter>
                    <Routes>
                         <Route path='/' element={<Home />} />
                         <Route path='/about' element={<About />} />
                         <Route element={<PrivateRoute />} >
                              <Route path='/dashboard' element={<Dashboard />} />
                         </Route>
                         <Route path='/projects' element={<Projects />} />
                         <Route path='/signin' element={<Signin />} />
                         <Route path='/signup' element={<SignUp />} />
                    </Routes>
               </BrowserRouter>
          </div>
     )
}



export default App
