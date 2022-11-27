import React from "react"
import { Card, ListGroup } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import "../styles/productCard.css"
import { deleteProduct } from "../utils/petitions"
import Swal from 'sweetalert2';

function ProductCard(props) {
  console.log('props', props)

  function handleDelete() {
    console.log(props.product.id)

    Swal.fire({
      title: '¿Estás seguro?',
      text: "¡No podrás deshacer esta acción!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Sí, elimínalo!',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {

        deleteProduct(props)
          .then((response) => {
            console.log(response)

            Swal.fire(
              '¡Eliminado!',
              'El Producto ha sido eliminado exitosamente.',
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

  return (

    <Card style={{ width: '20rem' }}>
      <Card.Img variant='top' src={props.product.image} className="cardImg" />
      <Card.Body>
        <Card.Title>{props.product.name}</Card.Title>
        <ListGroup variant="flush">
          <ListGroup.Item>{props.product.price}</ListGroup.Item>
          <ListGroup.Item>{props.product.type}</ListGroup.Item>
        </ListGroup>
        <Button className="btn edit" variant="outline-warning">Editar</Button>
        <Button className="btn delete" variant="outline-danger" onClick={handleDelete}>Eliminar</Button>
      </Card.Body>
    </Card>

  )
}

export { ProductCard }