import React from "react"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup"
import { deleteUser } from "../utils/petitions"
import Swal from 'sweetalert2';


function UserCard(props) {

  function handleDelete() {
    console.log('Delete id', props.user.id)

    Swal.fire({
      title: '¿Estás seguro?',
      text: "¡No podrás deshacer esta acción!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Sí, elimínalo!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {

        deleteUser(props)
          .then((response) => {
            console.log(response)

            Swal.fire(
              '¡Eliminado!',
              'El Usuario se ha eliminado exitosamente.',
              'success'
            )

            props.setUpdateList(!props.updateList)
          })
          .catch((error) => {
            console.log(error)
          })
      }
    })
  }

  function handleEdit() {

    props.handleShow()
    props.setDataEditModal(props.user)
  }

  return (
    <div className="grid-item">
      <Card style={{ width: '20rem' }}>
        <Card.Body>
          <Card.Title>{props.user.email}</Card.Title>
          <ListGroup variant="flush">
            <ListGroup.Item><strong>Rol: </strong>{props.user.role}</ListGroup.Item>
            {/* <ListGroup.Item><strong>Contraseña: </strong>{props.user.password}</ListGroup.Item> */}
          </ListGroup>
          <Button className="btn edit" variant="outline-secondary" onClick={handleEdit}>Editar</Button>
          <Button className="btn delete" variant="outline-danger" onClick={handleDelete}>Eliminar</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export { UserCard }