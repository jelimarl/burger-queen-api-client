import React from 'react'
import { Form, Button } from 'react-bootstrap'
import Swal from 'sweetalert2';
import { editUser } from '../utils/petitions';

function EditUserForm(props) {

  function handleChangeEditModal(event) {
    props.setDataEditModal({
      ...props.dataEditModal,
      [event.target.name]: event.target.value
    })
  }

  function handleSubmitEditModal(event) {
    event.preventDefault()

    editUser(props.dataEditModal)
      .then((response) => {
        console.log(response)

        Swal.fire(
          '¡Guardado!',
          'El Usuario se ha editado exitosamente.',
          'success'
        )

        props.handleClose()
        props.setUpdateList(!props.updateList)
      })
      .catch((error) => {
        console.log(error)

        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: '¡No se pudo editar el usuario!',
        })
      })
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
        <Button bsPrefix="add-product-btn" type='submit'>
          Guardar
        </Button>
      </div>
    </Form>
  )
}

export { EditUserForm }