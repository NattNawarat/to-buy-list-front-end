import axios from 'axios'
import {GetToken } from '../utils/func'
const baseUrl = '/api/projects'


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
    const response = axios.post(`${baseUrl}`, newObject, config)
    return response.then(response => {
        return response.data
    })
}

const getAll = () =>{
    const token = GetToken()
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }
    const response = axios.get(`${baseUrl}`, config)
    return response.then(response => {
        return response.data
    })
}

const getById = (id) =>{
    const token = GetToken()
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }
    const response = axios.get(`${baseUrl}/${id}`, config)
    return response.then(response => {
        return response.data
    })
}

const updateItems = (id,newItems) =>{
    const token = GetToken()
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }
    const response = axios.put(`${baseUrl}/${id}/items`, newItems, config)
    return response.then(response => {
        return response.data
    })
}

const deleteProject = (id) =>{
    const token = GetToken()
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }
    const response = axios.delete(`${baseUrl}/${id}`, config)
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