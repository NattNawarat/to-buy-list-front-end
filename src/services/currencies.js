import axios from 'axios'
const baseUrl = process.env.REACT_APP_BACKEND_URL

const get = () => {
    return axios.get(`${baseUrl}/api/currencies/`).then(response => {
        return response.data
    })
}

export default {
    get
}