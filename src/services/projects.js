import axios from 'axios'
import { DecodeToken, GetToken } from '../utils/func'
const baseUrl = process.env.REACT_APP_BACKEND_URL


const create = (name,describtion,items) => {
    const newObject = {
        name : name,
        describtion : describtion,
        items : items
    }
    const token = GetToken()
    const user = DecodeToken()
    const userName = user.userName
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }
    const response = axios.post(`${baseUrl}api/projects/${userName}`, newObject, config)
    return response.then(response => {
        console.log(response.data)
        return response.data
    })
}


export default{
    create
}