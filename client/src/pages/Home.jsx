import React from 'react'
import NavBar from '../components/NavBar/NaveBar'
import { useSelector } from 'react-redux'
import store from '../redux/store'
import LoginNav from '../components/NavBar/LoginNav'

const Home = () => {
     const {signup} = useSelector((store) => store.auth)
     return (
          <>
          {signup ? (<LoginNav />):<NavBar />}
          
          <div className='bg-[#fff3e3] w-full h-screen px-[40px]'>Home</div>
          </>
     )
}

export default Home