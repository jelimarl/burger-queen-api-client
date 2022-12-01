import React from "react"
import { Card, ListGroup } from "react-bootstrap"
import '../styles/specificProductCard.css'

function SpecificProductCard(props) {

  return (
    <Card style={{ width: '20rem' }}>
      <Card.Img variant='top' src={props.product.image} className='cardImg' />
      <Card.Body>
        <Card.Title>{props.product.name}</Card.Title>
        <ListGroup variant='flush'>
          <ListGroup.Item>${props.product.price}</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  )
}

export { SpecificProductCard }