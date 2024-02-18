import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {createUser} from "../Api/user/UserApi"

const Signin = () => {
     const [name, setName] = useState("")
     const [email, setEmail] = useState("")
     const [password, setPassword] = useState("")
     const dispatch = useDispatch()
     const navigate = useNavigate()
     const handelLogin = (e) =>{
          e.preventDefault()
          dispatch(createUser(name , email, password, navigate))
          // navigate("/signup")
     }
     return (
          <div className="container mx-auto px-4 py-8">
               <div className="text-center mb-8">
                    <h1 className="text-5xl font-bold">Create an account</h1>
                    <p className="text-gray-500">Create your account, it takes less than a minute.</p>
               </div>
               <div className='flex w-full'>
                    <form className="space-y-4 pt-28 w-full ">
                         <div className="flex flex-col">
                              <label htmlFor="name" className="text-sm font-medium text-gray-700">Full name</label>
                              <input type="text" id="name" onChange={(e) => setName(e.target.value.trim())} className="border rounded-md p-2 text-gray-700 w-[450px] focus:outline-blue-500" />
                         </div>
                         <div className="flex flex-col">
                              <label htmlFor="email" className="text-sm font-medium text-gray-700">Email address</label>
                              <input type="email" id="email" onChange={(e) => setEmail(e.target.value.trim())} className="border rounded-md p-2 text-gray-700 w-[450px] focus:outline-blue-500" />
                         </div>
                         <div className="flex flex-col">
                              <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
                              <input type="password" id="password" onChange={(e) => setPassword(e.target.value.trim())} className="border rounded-md p-2 text-gray-700 w-[450px] focus:outline-blue-500" />
                         </div>
                         <div className="flex items-center">
                              <button className="inline-flex items-center px-3 py-2 bg-[#ffa45d] text-white rounded-md hover:bg-[#fd9c52] focus:outline-none" onClick={handelLogin}>
                                   <span className="font-medium">Create account</span>
                              </button>
                         </div>
                    </form>
                    <div className="text-center mb-8  pt-28 px-[150px]">
                         <h1 className="text-4xl font-bold">WellCome to  </h1>
                         <p className="text-gray-500">Create your account, and enjoy amazing BLogs every day</p>
                    </div>
               </div>
               <div className="flex items-center mt-6">
                    <div className="mr-2">
                         <p className="text-sm text-gray-500">Already have an account?</p>
                    </div>
                    <Link to="/signup" className="inline-flex items-center px-3 py-2 text-sm font-medium text-blue-500 hover:underline">
                         <span>Login</span>
                    </Link>
               </div>
          </div>
     )
}

export default Signin