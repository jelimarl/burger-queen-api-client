import React from "react"
import { Button, Card, ListGroup } from "react-bootstrap"
import '../styles/orderCard.css'
import { editOrder } from "../utils/petitions"
import Swal from 'sweetalert2';

function OrderCard(props) {

  function handleClick() {
    console.log('Cambiando Estatus ordenID', props.order.id)

    editOrder(props.order.id)
      .then((response) => {
        console.log(response)

        Swal.fire(
          '¡Estatus Cambiado!',
          'El Estatus se cambió exitosamente.',
          'success'
        )
        props.setUpdateOrders(!props.updateOrders)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <Card style={{ width: '16rem' }}>
      <Card.Body>
        <Card.Title>{props.order.client}</Card.Title>
        <ListGroup>
          <ListGroup.Item>Mesero {props.order.userId}</ListGroup.Item>
          {
            props.order.products.map((element, id) => {
              return (
                <ListGroup horizontal key={id}>
                  <ListGroup.Item className='product-name'>{element.product.name}</ListGroup.Item>
                  <ListGroup.Item>{element.qty}</ListGroup.Item>
                </ListGroup>
              )
            })
          }
          <ListGroup.Item>Estatus: {props.status}</ListGroup.Item>
          <ListGroup.Item>{props.order.dataEntry}</ListGroup.Item>
        </ListGroup>
        <Button className="status-chef" onClick={handleClick}>Cambiar Estatus</Button>
      </Card.Body>
    </Card>
  )
}

export { OrderCard }