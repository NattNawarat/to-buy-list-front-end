import axios from 'axios'
import {GetToken } from '../utils/func'
const baseUrl = '/api/users'


const register = newObject => {
    const request = axios.post(`${baseUrl}/register`, newObject)
    return  request.then(response =>  response.data)
}

const login = object =>{
    const request = axios.post(`${baseUrl}/login`, object)
    return request
}

const exist = () =>{
    const token = GetToken()
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }
    const response = axios.get(`${baseUrl}/exists`,config).then((response) => response.exists).catch(()=>false)
    return response
}

export default{
    register,
    login,
    exist
}