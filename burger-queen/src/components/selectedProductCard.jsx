import React from "react"
import { ListGroup } from "react-bootstrap"
import '../styles/selectedProductCard.css'
import Button from "react-bootstrap/Button"

function SelectedProductCard(props) {

  function handleDecrease() {

    if (props.item.qty === 1) {
      props.setSelectedItem([...props.selectedItem.slice(0, props.index), ...props.selectedItem.slice(props.index + 1)])
    }

    else {
      const decreaseResult = props.selectedItem.map((element) => {
        if (element.product.id === props.item.product.id) {
          element.qty--
        }
        return element
      })
      props.setSelectedItem(decreaseResult)
    }
  }

  function handleIncrease() {

    const increaseResult = props.selectedItem.map((element) => {
      if (element.product.id === props.item.product.id) {
        element.qty++
      }
      return element
    })

    props.setSelectedItem(increaseResult)
  }

  function handleDelete() {
    console.log('item', props.index)
    props.setSelectedItem([...props.selectedItem.slice(0, props.index), ...props.selectedItem.slice(props.index + 1)])
  }

  return (
    <ListGroup horizontal>
      <ListGroup.Item className="name">{props.item.product.name}</ListGroup.Item>
      <ListGroup.Item className='price'>${props.item.product.price * props.item.qty}</ListGroup.Item>
      <ListGroup.Item><Button className='select-btn' onClick={handleDecrease}>-</Button>{props.item.qty}<Button onClick={handleIncrease} className='select-btn'>+</Button></ListGroup.Item>
      <ListGroup.Item><Button className='select-btn' onClick={handleDelete}>E</Button></ListGroup.Item>
    </ListGroup>
  )
}

export { SelectedProductCard }