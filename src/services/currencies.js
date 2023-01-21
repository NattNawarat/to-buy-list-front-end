import axios from 'axios'
const baseUrl = '/api/currencies'

const get = () => {
    return axios.get(`${baseUrl}`).then(response => {
        return response.data
    })
}

export default {
    get
}