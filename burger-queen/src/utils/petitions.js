import axios from 'axios'

const urlAPI = 'http://localhost:8080/'

function postUserPetition(userEmail, userPassword) {
  let token = sessionStorage.getItem("accessToken")

  return axios({
    method: 'post',
    url: urlAPI + 'login',
    headers: {
      'content-type': 'application/json',
      'authorization': `Bearer ${token}`
    },
    data: { email: userEmail, password: userPassword }
  })
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

function deleteUser(props) {
  let token = sessionStorage.getItem("accessToken")

  return axios({
    method: 'delete',
    url: `${urlAPI}users/${props.user.id}`,
    headers: {
      'content-type': 'application/json',
      'authorization': `Bearer ${token}`
    }
  })
}

function editUser(dataEditModal) {
  let token = sessionStorage.getItem("accessToken")

  return axios({
    method: 'patch',
    url: `${urlAPI}users/${dataEditModal.id}`,
    headers: {
      'content-type': 'application/json',
      'authorization': `Bearer ${token}`
    },
    data: dataEditModal
  })
}

function newOrder(customerName, selectedItem) {
  let token = sessionStorage.getItem("accessToken")
  let userID = sessionStorage.getItem("userID")

  return axios({
    method: 'post',
    url: urlAPI + 'orders',
    headers: {
      'content-type': 'application/json',
      'authorization': `Bearer ${token}`
    },
    data: {
      userId: userID,
      client: customerName,
      products: selectedItem,
      status: "pending",
      dataEntry: new Date().toLocaleString('sv-SE')
    }
  })
}

function getOrders() {
  let token = sessionStorage.getItem("accessToken")

  return axios({
    method: 'get',
    url: urlAPI + 'orders',
    headers: {
      'content-type': 'application/json',
      'authorization': `Bearer ${token}`
    }
  })
}

function editOrder(orderID) {
  let token = sessionStorage.getItem("accessToken")

  return axios({
    method: 'patch',
    url: `${urlAPI}orders/${orderID}`,
    headers: {
      'content-type': 'application/json',
      'authorization': `Bearer ${token}`
    },
    data: {
      status: "ready",
      dataEntry: new Date().toLocaleString('sv-SE')
    }
  })
}

export { postUserPetition, getProducts, saveProduct, deleteProduct, editProduct, getUsers, saveUser, deleteUser, editUser, newOrder, getOrders, editOrder }