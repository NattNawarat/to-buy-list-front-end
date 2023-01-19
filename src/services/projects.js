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
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }
    const response = axios.post(`${baseUrl}/api/projects/`, newObject, config)
    return response.then(response => {
        return response.data
    })
}

const getAll = () =>{
    const token = GetToken()
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }
    const response = axios.get(`${baseUrl}/api/projects/`, config)
    return response.then(response => {
        return response.data
    })
}

const getById = (id) =>{
    const token = GetToken()
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }
    const response = axios.get(`${baseUrl}/api/projects/${id}`, config)
    return response.then(response => {
        return response.data
    })
}

const updateItems = (id,newItems) =>{
    const token = GetToken()
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }
    const response = axios.put(`${baseUrl}/api/projects/${id}/items`, newItems, config)
    return response.then(response => {
        return response.data
    })
}

const deleteProject = (id) =>{
    const token = GetToken()
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }
    const response = axios.delete(`${baseUrl}/api/projects/${id}`, config)
    return response.then(response => {
        return response.data
    })
}

export default{
    create,
    getAll,
    getById,
    updateItems,
    deleteProject
}