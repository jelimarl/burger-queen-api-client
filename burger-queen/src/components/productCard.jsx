import React from "react"
import { Card, Container, ListGroup } from "react-bootstrap"


function ProductCard(props) {
  console.log('props', props)
  console.log('props name', props.name)
  return (

    <Container>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant='top' src={product.image} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <ListGroup variant="flush">
            <ListGroup.Item>{product.price}</ListGroup.Item>
            <ListGroup.Item>{product.type}</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </Container>
  )
}

export { ProductCard }