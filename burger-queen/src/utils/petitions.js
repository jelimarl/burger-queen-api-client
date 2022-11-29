import axios from 'axios'

const urlAPI = 'http://localhost:8080/'

function postUserPetition(userEmail, userPassword) {
  return axios.post(urlAPI + 'login', { email: userEmail, password: userPassword })
}

function getProducts() {
  let token = sessionStorage.getItem("accessToken")

  return axios({
    method: 'get',
    url: urlAPI + 'products',
    headers: {
      'content-type': 'application/json',
      'authorization': `Bearer ${token}`
    }
  })
}

function saveProduct(dataProduct) {
  let token = sessionStorage.getItem("accessToken")

  return axios({
    method: 'post',
    url: urlAPI + 'products',
    headers: {
      'content-type': 'application/json',
      'authorization': `Bearer ${token}`
    },
    data: dataProduct
  })
}

function deleteProduct(props) {
  let token = sessionStorage.getItem("accessToken")

  return axios({
    method: 'delete',
    url: `${urlAPI}products/${props.product.id}`,
    headers: {
      'content-type': 'application/json',
      'authorization': `Bearer ${token}`
    }
  })
}

function editProduct(dataEditModal) {
  let token = sessionStorage.getItem("accessToken")

  return axios({
    method: 'patch',
    url: `${urlAPI}products/${dataEditModal.id}`,
    headers: {
      'content-type': 'application/json',
      'authorization': `Bearer ${token}`
    },
    data: dataEditModal
  })
}

function getUsers() {
  let token = sessionStorage.getItem("accessToken")

  return axios({
    method: 'get',
    url: urlAPI + 'users',
    headers: {
      'content-type': 'application/json',
      'authorization': `Bearer ${token}`
    }
  })
}

function saveUser(dataUser) {
  let token = sessionStorage.getItem("accessToken")

  return axios({
    method: 'post',
    url: urlAPI + 'users',
    headers: {
      'content-type': 'application/json',
      'authorization': `Bearer ${token}`
    },
    data: dataUser
  })
}

export { postUserPetition, getProducts, saveProduct, deleteProduct, editProduct, getUsers, saveUser }