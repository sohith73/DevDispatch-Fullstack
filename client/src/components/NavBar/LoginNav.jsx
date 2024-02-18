import React from 'react'
import { Link } from 'react-router-dom' 
const LoginNav = () => {
     return (
          <>
               <nav className="bg-[#f7dfc0] p-4 border  border-y-[#e07f00] px-[40px]">
                    <div className="container mx-auto flex justify-between items-center">
                         <Link href="/" className="text-white text-xl font-bold">YourLogo</Link>
                         <button className="text-white block lg:hidden">
                              <svg className="h-6 w-6" viewBox="0 0 24 24">
                                   <path fill="currentColor" d="M4 6h16M4 12h16M4 18h16"></path>
                              </svg>
                         </button>
                         <div className="hidden lg:flex lg:items-center lg:space-x-4 gap-4">
                              <Link to="/" className="text-[#5d5e59] font-mono font-semibold">Home</Link>
                              <Link to="/about" className="text-[#5d5e59] font-mono font-semibold">About</Link>
                              <Link to="/projects" className="text-[#5d5e59] font-mono font-semibold">Projects</Link>
                              <div className="relative mr-7">
                                   <input type="text" placeholder='Search...' className="bg-gray-700 text-white rounded-full px-4 py-1 focus:outline-none focus:ring-2 focus:ring-orange-400" />
                                   <button className="absolute right-0 top-0 mt-1 mr-2 lg:hidden">
                                        <svg className="h-6 w-6" viewBox="0 0 24 24">
                                             <path fill="currentColor" d="M6 18L18 6M6 6l12 12"></path>
                                        </svg>
                                   </button>
                              </div>
                         </div>
                         <div className="hidden lg:flex lg:items-center lg:space-x-4 ">
                              {/* <Link to='/signin'><button className="bg-[#ffa45d] text-[#5d5e59] font-mono font-semibold rounded-full px-4 py-2 hover:bg-[#fd9c52]">Sign In</button></Link>*/}
                              <Link to='/signup'><button className="bg-[#ffa45d] text-[#5d5e59] font-mono font-semibold rounded-full px-4 py-2 border border-black hover:bg-[#fd9c52]">Log Out</button></Link> 
                         </div>
                    </div>
                    <div className="lg:hidden mt-4 items-center text-center">
                         <Link href="#" className="block text-[#5d5e59] font-mono font-semibold">Home</Link>
                         <Link href="#" className="block text-[#5d5e59] font-mono font-semibold">About</Link>
                         <Link href="#" className="block text-[#5d5e59] font-mono font-semibold">Projects</Link>
                         <div className="relative mt-4">
                              <input type="text" placeholder='Search...' className="bg-gray-700 text-white rounded-full px-4 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                              <button className="absolute right-0 top-0 mt-1 mr-2">
                                   <svg className="h-6 w-6" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M6 18L18 6M6 6l12 12"></path>
                                   </svg>
                              </button>
                         </div>
                         {/* <button className="bg-[#ffa45d] text-white rounded-full px-4 py-2 mt-4 block w-full ">Sign In</button>
                         <button className="bg-[#ffa45d] text-white rounded-full px-4 py-2 mt-2 block w-full">Sign Up</button> */}
                    </div>
               </nav>
          </>
     )
}

export default LoginNav