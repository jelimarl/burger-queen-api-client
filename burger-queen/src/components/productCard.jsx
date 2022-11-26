import React from "react"
import { Card, ListGroup } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import "../styles/productCard.css"
import { deleteProduct } from "../utils/petitions"


function ProductCard(props) {
  // console.log('props', props)

  function handleDelete() {
    console.log(props.props.id)

    deleteProduct(props)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (

    <Card style={{ width: '20rem' }}>
      <Card.Img variant='top' src={props.props.image} className="cardImg" />
      <Card.Body>
        <Card.Title>{props.props.name}</Card.Title>
        <ListGroup variant="flush">
          <ListGroup.Item>{props.props.price}</ListGroup.Item>
          <ListGroup.Item>{props.props.type}</ListGroup.Item>
        </ListGroup>
        <Button className="btn edit" variant="outline-warning">Editar</Button>
        <Button className="btn delete" variant="outline-danger" onClick={handleDelete}>Eliminar</Button>
      </Card.Body>
    </Card>

  )
}

export { ProductCard }