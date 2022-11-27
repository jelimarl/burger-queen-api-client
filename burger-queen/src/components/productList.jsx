import React, { useEffect, useState } from "react"
import { getProducts } from "../utils/petitions"
import { ProductCard } from "./productCard"
import "../styles/productList.css"

function ProductList() {

  const [list, setList] = useState([])

  const [updateList, setUpdateList] = useState(false)

  useEffect(() => {

    getProducts()
      .then((response) => {
        setList(response.data)
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [updateList])

  return (
    <div>
      {
        list.map((product, index) => (

          <div className="productCard" key={index}>

            <ProductCard
              product={product}
              setUpdateList={setUpdateList}
              updateList={updateList}
            />

          </div>

        ))
      }
    </div>
  )
}

export { ProductList }