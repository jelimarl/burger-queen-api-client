import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";
import Swal from 'sweetalert2';

function EditUserForm(props) {

  function handleChangeEditModal(event) { }

  function handleSubmitEditModal(event) {
    event.preventDefault()
    console.log('Editando')
    props.handleClose()
  }

  return (
    <Form onSubmit={handleSubmitEditModal}>

      <Form.Group className="mb-3" controlId="">
        <Form.Label>Email del Usuario</Form.Label>
        <Form.Control
          type="email"
          name='email'
          placeholder="Email del Usuario"
          value={props.dataEditModal.email}
          onChange={handleChangeEditModal}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="">
        <Form.Label>Rol del Usuario</Form.Label>
        <Form.Control
          type="text"
          name='role'
          placeholder="Rol del Usuario"
          value={props.dataEditModal.role}
          onChange={handleChangeEditModal}
          required
        />
      </Form.Group>
      <div className='d-grid'>
        <Button variant='outline-warning' type='submit'>
          Guardar
        </Button>
      </div>
    </Form>
  )
}

export { EditUserForm }