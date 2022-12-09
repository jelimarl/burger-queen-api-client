import React from "react"
import { Card, ListGroup } from "react-bootstrap"

function OrderDeliveredCard(props) {
  return (
    <Card style={{ width: '16rem' }} border="warning">
      <Card.Body>
        <Card.Title>{props.order.client}</Card.Title>
        <ListGroup>
          <ListGroup.Item>Mesero: {props.order.userId}</ListGroup.Item>
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
          <ListGroup.Item>{props.order.dateProcessed}</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  )
}

export { OrderDeliveredCard }