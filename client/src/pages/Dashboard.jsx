import React from 'react'
import { useSelector } from 'react-redux'
import LoginNav from '../components/NavBar/LoginNav'
import AddPostButton from '../components/AddPostButton'

const Dashboard = () => {
     const {signup} = useSelector((store) => store.auth)
     return (
          <>
          <LoginNav /> 
          <div className='bg-[#fff3e3] w-full h-screen px-[40px]'>         
          <div className=''>dash baby</div>
          <AddPostButton /> 
          </div>
          </>
     )
     }
export default Dashboard