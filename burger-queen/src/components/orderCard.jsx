import React from "react"
import { Card, ListGroup } from "react-bootstrap"
import '../styles/orderCard.css'

function OrderCard(props) {
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
          <ListGroup.Item>{props.order.dataEntry}</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  )
}

export { OrderCard }