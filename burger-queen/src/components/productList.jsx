import React, { useEffect, useState } from "react"
import { getProducts } from "../utils/petitions"
import { ProductCard } from "./productCard"
import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup"
import "../styles/productList.css"
import Button from "react-bootstrap/Button"

function ProductList() {

  const [list, setList] = useState([])

  useEffect(() => {

    getProducts()
      .then((response) => {
        setList(response.data)
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <div>
      {
        list.map((product, index) => (
          // console.log(product.name)

          <div className="productCard" key={index}>
            <Card border="secondary" style={{ width: '20rem' }}>
              <Card.Img variant='top' src={product.image} className="cardImg" />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item>${product.price}</ListGroup.Item>
                  <ListGroup.Item>{product.type}</ListGroup.Item>
                </ListGroup>
                <Button className="btn edit" variant="outline-warning">Editar</Button>
                <Button className="btn delete " variant="outline-danger">Eliminar</Button>
              </Card.Body>
            </Card>
          </div>

          // <ProductCard
          //   key={index}
          //   props={product}
          // />

        ))
      }
    </div>
  )
}

export { ProductList }