import React from 'react'
import { useSelector } from 'react-redux'
import store from '../redux/store'
import { Navigate, Outlet } from 'react-router-dom'


const PrivateRoute = () => {
     const {signup} = useSelector((store) => store.auth)
     const { name } = useSelector((store) => store.auth)
     return signup&&name ? <Outlet /> : <Navigate to='/signup' />
}

export default PrivateRoute