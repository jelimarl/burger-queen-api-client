import React from "react"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup"
import { deleteUser } from "../utils/petitions"
import Swal from 'sweetalert2';
import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";


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
      <Card style={{ width: '20rem' }} bg="light">
        <Card.Body>
          <Card.Title>{props.user.email}</Card.Title>
          {/* <ListGroup variant="flush"> */}
          <Card.Text><strong>Rol: </strong>{props.user.role}</Card.Text>
          {/* </ListGroup> */}
          <div className="product-buttons">
            <Button className="btn edit" variant="outline-secondary" onClick={handleEdit}><FaPencilAlt /></Button>
            <Button className="btn delete" variant="outline-danger" onClick={handleDelete}><FaTrashAlt /></Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export { UserCard }