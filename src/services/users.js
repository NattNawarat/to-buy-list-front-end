import axios from 'axios'
const baseUrl = process.env.REACT_APP_BACKEND_URL


const register = newObject => {
    const request = axios.post(`${baseUrl}api/users/register`, newObject)
    return  request.then(response =>  response.data)
}

const login = object =>{
    const request = axios.post(`${baseUrl}api/users/login`, object)
    return request
}

export default{
    register,
    login
}