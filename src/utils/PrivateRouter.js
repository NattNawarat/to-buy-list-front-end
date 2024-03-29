import React from 'react'
import { Outlet, Navigate} from 'react-router-dom'
import Cookies from 'universal-cookie'
import userService from '../services/users'

const cookies = new Cookies()

const PrivateRoutes = () => {
    const token = cookies.get('TOKEN')
    if (!token) {
        return (<Navigate to="/"></Navigate>)
    }
    if (!userService.exist()) {
        //username base on token not exists
        return (<Navigate to="/"></Navigate>)
    }

    return (<Outlet />)
}

export default PrivateRoutes