import React, { useEffect, useState } from "react"
import { getProducts } from "../utils/petitions"
import { ProductCard } from "./productCard"
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

          <div className="productCard" key={index}>

            <ProductCard props={product} />

          </div>

        ))
      }
    </div>
  )
}

export { ProductList }