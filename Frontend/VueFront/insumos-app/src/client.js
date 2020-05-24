import axios from 'axios'
import server from './server.js'

export default () => {
  return axios.create({
    baseURL: 'http://' + server.host + ':' + server.port,
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
}
