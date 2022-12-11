import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { saveUser } from '../utils/petitions';
import Swal from 'sweetalert2';

function AddUserForm(props) {

  const [dataUser, setDataUser] = useState({ email: '', password: '', role: '' })

  function handleChange(event) {

    setDataUser({
      ...dataUser,
      [event.target.name]: event.target.value
    })
  }

  function handleSubmit(event) {

    event.preventDefault()

    saveUser(dataUser)
      .then((response) => {
        console.log(response)

        Swal.fire(
          '¡Guardado!',
          'El Usuario se ha creado exitosamente.',
          'success'
        )

        props.handleCloseAdd()
        props.setUpdateList(!props.updateList)
      })
      .catch((error) => {
        console.log(error)

        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: '¡No se pudo crear el usuario!',
        })
      })
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="">
        <Form.Control
          type="email"
          name='email'
          placeholder="Email del Usuario"
          value={dataUser.email}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="">
        <Form.Control
          type="password"
          name='password'
          placeholder="Contraseña del Usuario"
          value={dataUser.password}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="">
        <Form.Control
          type="text"
          name='role'
          placeholder="Rol del Usuario"
          value={dataUser.role}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <div className="d-grid">
        <Button bsPrefix="add-product-btn" type="submit">
          Guardar
        </Button>
      </div>
    </Form>
  )
}

export { AddUserForm }