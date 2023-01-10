import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import Cookies from 'universal-cookie'
const cookies = new Cookies()
const PrivateRoutes = () => {
    const token = cookies.get('TOKEN')
    console.log(token)
    return(
        token ? <Outlet/> : <Navigate to="/"/>
    )
}

export default PrivateRoutes