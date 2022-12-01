import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import '../styles/order.css'
import { getProducts } from "../utils/petitions";
import { SpecificProductCard } from "./specificProductCard";

function Order() {

  const [completeList, setCompleteList] = useState([])

  const [specificList, setSpecificList] = useState([])

  useEffect(() => {

    getProducts()
      .then((response) => {
        console.log(response.data)
        setCompleteList(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  function handleChange(event) {

    const result = completeList.filter((product) => {
      if (event.target.value === product.type) {
        return true
      }
      return false
    })

    setSpecificList(result)
    console.log(result)
  }

  return (

    <div className="orderView">

      <Form className="select-menu">
        <Form.Select onChange={handleChange}>
          <option>Escoge un Menú</option>
          <option value='Desayuno'>Desayuno</option>
          <option value='Almuerzo'>Almuerzo</option>
        </Form.Select>
      </Form>

      {
        specificList.map((product, index) => {

          return (
            <div key={index}>
              <SpecificProductCard
                product={product}
              />
            </div>
          )
        })
      }

    </div>
  )
}

export { Order }