import axios from 'axios'
//const baseUrl = 'http://localhost:8080/api/currencies'
const baseUrl = '/api/currencies'

const get = () => {
    return axios.get(`${baseUrl}`).then(response => {
        return response.data
    })
}

export default {
    get
}