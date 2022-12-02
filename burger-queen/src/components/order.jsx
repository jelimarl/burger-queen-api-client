import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import '../styles/order.css'
import { getProducts } from "../utils/petitions";
import { SpecificProductCard } from "./specificProductCard";
import { SelectedProductCard } from "./selectedProductCard";
import Button from "react-bootstrap/Button";
import Swal from 'sweetalert2';

function Order() {

  const [completeList, setCompleteList] = useState([])

  const [specificList, setSpecificList] = useState([])

  const [selectedItem, setSelectedItem] = useState([])

  const [dataOrder, setDataOrder] = useState()

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

  function handleChangeSelector(event) {

    const result = completeList.filter((product) => {
      if (event.target.value === product.type) {
        return true
      }
      return false
    })

    setSpecificList(result)
    console.log(result)
  }

  console.log('Producto Seleccionado', selectedItem)

  function purchaseTotal() {

    if (selectedItem.length !== 0) {
      const pricesArray = selectedItem.map((item) => Number(item.price))
      const total = pricesArray.reduce(function (a, b) { return a + b; })
      return `Total: $${total}`
    }
  }

  function handleChange(event) {
    console.log(event.target.value)
  }

  function handleSubmit(event) {

    event.preventDefault()
    if (selectedItem.length !== 0) {
      console.log('Enviando Pedido')
      setSelectedItem([])
    }

    else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: '¡Agrega un producto al pedido!'
      })
    }

  }

  return (
    <div>

      <Form className="select-menu">
        <Form.Select onChange={handleChangeSelector}>
          <option>Escoge un Menú</option>
          <option value='Desayuno'>Desayuno</option>
          <option value='Almuerzo'>Almuerzo</option>
        </Form.Select>
      </Form>

      <section className="orderSection">
        <section className="products">
          {
            specificList.map((product, index) => {

              return (
                <div key={index}>
                  <SpecificProductCard
                    product={product}
                    setSelectedItem={setSelectedItem}
                    selectedItem={selectedItem}
                  />
                </div>
              )
            })
          }
        </section>

        <section className="order">

          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Control
                type='text'
                name='name'
                placeholder="Nombre del Cliente"
                // value={dataOrder.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group>
              {
                selectedItem.map((item, index) => {

                  return (
                    <div key={index}>
                      <SelectedProductCard
                        item={item}
                        index={index}
                        setSelectedItem={setSelectedItem}
                        selectedItem={selectedItem}
                      />
                    </div>
                  )
                })
              }
            </Form.Group>
            <Form.Group className="total">
              <p>{purchaseTotal()}</p>
            </Form.Group>
            <Button type='submit'>
              Enviar a Cocina
            </Button>
          </Form>
        </section>

      </section>
    </div>
  )
}

export { Order }