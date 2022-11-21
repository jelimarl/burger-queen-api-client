import React, { useEffect } from "react"
import { getProducts } from "../utils/petitions.js"

function ProductList() {

  return (

    useEffect(() => {

      getProducts()
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
    }, [])

  )
}

export { ProductList }