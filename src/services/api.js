import axios from 'axios'

const api = axios.create({
  baseURL: 'https://univesp-pi-grupo10-20251-server.onrender.com/api'
})

export default api
