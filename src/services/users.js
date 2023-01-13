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

const exist = (userName,token) =>{
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }
    const response = axios.get(`${baseUrl}api/users/${userName}/login`,config).then((response) => response.exists).catch(()=>false)
    return response
}

export default{
    register,
    login,
    exist
}