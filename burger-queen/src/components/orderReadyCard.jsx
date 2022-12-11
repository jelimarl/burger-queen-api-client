import React from "react"
import { Card, ListGroup } from "react-bootstrap"
import '../styles/orderCard.css'

function OrderReadyCard(props) {

  function orderTime() {
    const date1 = new Date(props.order.dataEntry)
    const date2 = new Date(props.order.dateProcessed)
    let minutes = (date2.getTime() - date1.getTime()) / 1000 / 60

    return Math.round(minutes)
  }

  return (
    <Card style={{ width: '16rem' }} border="warning">
      <Card.Body>
        <Card.Title>{props.order.client}</Card.Title>
        <ListGroup>
          <ListGroup.Item>Mesero {props.order.userId}</ListGroup.Item>
        </ListGroup>
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
        <ListGroup>
          <ListGroup.Item>Estatus: {props.status}</ListGroup.Item>
          <ListGroup.Item>Tardó {orderTime()} min</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  )
}

export { OrderReadyCard }