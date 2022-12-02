import React from "react"
import { ListGroup } from "react-bootstrap"
import '../styles/selectedProductCard.css'
import Button from "react-bootstrap/Button"

function SelectedProductCard(props) {

  function handleDelete() {
    console.log('item', props.index)
  }

  return (
    <ListGroup horizontal>
      <ListGroup.Item className="name">{props.item.name}</ListGroup.Item>
      <ListGroup.Item className='price'>${props.item.price}</ListGroup.Item>
      <ListGroup.Item><Button onClick={handleDelete}>E</Button></ListGroup.Item>
    </ListGroup>
  )
}

export { SelectedProductCard }