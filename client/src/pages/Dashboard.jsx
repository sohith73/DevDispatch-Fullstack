import React from 'react'
import { useSelector } from 'react-redux'
import LoginNav from '../components/NavBar/LoginNav'

const Dashboard = () => {
     const {signup} = useSelector((store) => store.auth)
     return (
          <>
          <LoginNav />          
          <div className='bg-[#fff3e3] w-full h-screen px-[40px]'>dash baby</div>
          </>
     )
     }
export default Dashboard