import axios from 'axios'

const baseUrl = 'http://localhost:4000'

function registerUser(data) {
  return axios.post(`${baseUrl}/register`, data).then(getData)
}

function login(data) {
  return axios.post(`${baseUrl}/login`, data).then(getData)
}

function fetchUser(email, token) {
  return axios
    .get(`${baseUrl}/users?email=${email}`, header(token))
    .then(getData)
    .then(getFirst)
}

function header(token) {
  return {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }
}

function getData(response) {
  return response.data
}

function getFirst(arr) {
  return arr[0]
}

export default {
  registerUser,
  login,
  fetchUser,
}
