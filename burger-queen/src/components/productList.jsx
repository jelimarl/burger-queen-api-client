import React, { useEffect, useState } from "react"
import { getProducts } from "../utils/petitions.js"
import { ProductCard } from "./productCard.jsx"
import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup"
import "../styles/productList.css"

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

          <div className="cards" key={index}>
            <Card border="secondary" style={{ width: '20rem' }}>
              <Card.Img variant='top' src={product.image} className="cardImg" />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item>${product.price}</ListGroup.Item>
                  <ListGroup.Item>{product.type}</ListGroup.Item>
                </ListGroup>
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