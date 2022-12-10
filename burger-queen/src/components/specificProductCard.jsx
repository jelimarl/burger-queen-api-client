import React from "react"
import { Card, ListGroup } from "react-bootstrap"
import '../styles/specificProductCard.css'
import Button from "react-bootstrap/Button"

function SpecificProductCard(props) {

  function handleClick() {
    console.log('Producto elegido', props.product.id)
    const repeatedItem = props.selectedItem.map((item) => item.product).includes(props.product)

    if (repeatedItem) {
      const increaseResult = props.selectedItem.map((element) => {
        if (element.product.id === props.product.id) {
          element.qty++
        }
        return element
      })

      props.setSelectedItem(increaseResult)
    }

    else {
      props.setSelectedItem([...props.selectedItem, { qty: 1, product: props.product }])
    }
  }

  return (
    <Card style={{ width: '15rem' }}>
      <Card.Img variant='top' src={props.product.image} className='cardImg' />
      <Card.Body>
        <Card.Title>{props.product.name}</Card.Title>
        <ListGroup variant='flush'>
          <ListGroup.Item>${props.product.price}</ListGroup.Item>
        </ListGroup>
        <Button variant="outline-secondary" className="add-item" onClick={handleClick}><strong>Agregar</strong></Button>
      </Card.Body>
    </Card>
  )
}

export { SpecificProductCard }