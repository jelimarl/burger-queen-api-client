import React from "react"
import { Card, ListGroup } from "react-bootstrap"
import '../styles/specificProductCard.css'
import Button from "react-bootstrap/Button"
import Swal from 'sweetalert2';

function SpecificProductCard(props) {

  function handleClick() {
    console.log('Producto elegido', props.product.id)
    const repeatedItem = props.selectedItem.map((item) => item.product).includes(props.product)
    if (repeatedItem) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: '¡El producto ya está incluido en el pedido. Puedes modificar la cantidad en la tabla!'
      })
    }
    // props.setSelectedItem([...props.selectedItem, props.product])
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
        <Button className="add-item" onClick={handleClick}>Agregar</Button>
      </Card.Body>
    </Card>
  )
}

export { SpecificProductCard }