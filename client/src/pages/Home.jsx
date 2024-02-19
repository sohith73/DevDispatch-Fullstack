import React from 'react'
import NavBar from '../components/NavBar/NaveBar'
import { useSelector } from 'react-redux'
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
          </>
     )
}

export default Home