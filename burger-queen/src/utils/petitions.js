import axios from 'axios'

const urlAPI = 'http://localhost:8080/'

function postUserPetition(userEmail, userPassword) {
  return axios.post(urlAPI + 'login', { email: userEmail, password: userPassword })
}

export { postUserPetition }