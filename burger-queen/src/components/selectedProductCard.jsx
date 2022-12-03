import React from "react"
import { ListGroup } from "react-bootstrap"
import '../styles/selectedProductCard.css'
import Button from "react-bootstrap/Button"

function SelectedProductCard(props) {

  function handleDelete() {
    console.log('item', props.index)
    props.setSelectedItem([...props.selectedItem.slice(0, props.index), ...props.selectedItem.slice(props.index + 1)])
  }

  return (
    <ListGroup horizontal>
      <ListGroup.Item className="name">{props.item.product.name}</ListGroup.Item>
      <ListGroup.Item className='price'>${props.item.product.price}</ListGroup.Item>
      <ListGroup.Item><Button onClick={handleDelete}>E</Button></ListGroup.Item>
    </ListGroup>
  )
}

export { SelectedProductCard }