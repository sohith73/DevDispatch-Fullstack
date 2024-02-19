import React from 'react'
import NavBar from '../components/NavBar/NaveBar'
import { useSelector } from 'react-redux'
import store from '../redux/store'
import LoginNav from '../components/NavBar/LoginNav'
import { TestOP } from '../components/TestOP'
import GetPosts from '../components/GetPosts'
import EachPost from '../components/EachPost'

const Home = () => {
     const {signup} = useSelector((store) => store.auth)
     return (
          <>
          {signup ? (<LoginNav />):<NavBar />}
          <TestOP />
          <GetPosts />
          <EachPost />
          <div className='bg-[#fff3e3] w-full h-screen px-[40px]'>Home</div>
          </>
     )
}

export default Home