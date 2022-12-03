import React from "react"
import { Card, ListGroup } from "react-bootstrap"
import '../styles/specificProductCard.css'
import Button from "react-bootstrap/Button"

function SpecificProductCard(props) {

  function handleClick() {
    console.log('Producto elegido', props.product.id)
    if (props.selectedItem.map((element) => element.product).includes(props.product)) {
      console.log('producto repetido')
    }
    // props.setSelectedItem([...props.selectedItem, props.product])
    props.setSelectedItem([...props.selectedItem, { qty: 1, product: props.product }])
  }

  return (
    <Card style={{ width: '15rem' }}>
      <Card.Img variant='top' src={props.product.image} className='cardImg' />
      <Card.Body>
        <Card.Title>{props.product.name}</Card.Title>
        <ListGroup variant='flush'>
          <ListGroup.Item>${props.product.price}</ListGroup.Item>
        </ListGroup>
        <Button onClick={handleClick}>Agregar</Button>
      </Card.Body>
    </Card>
  )
}

export { SpecificProductCard }