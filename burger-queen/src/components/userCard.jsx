import React from "react"
import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup"


function UserCard(props) {
  return (
    <Card style={{ width: '20rem' }}>
      <Card.Body>
        <Card.Title>{props.user.email}</Card.Title>
        <ListGroup variant="flush">
          <ListGroup.Item><strong>Rol: </strong>{props.user.role}</ListGroup.Item>
          <ListGroup.Item><strong>Contraseña: </strong>{props.user.password}</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  )
}

export { UserCard }