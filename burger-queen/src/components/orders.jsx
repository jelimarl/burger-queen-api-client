import React from "react";
import Form from "react-bootstrap/Form";
import '../styles/orders.css'

function Order() {

  function handleChange(event) {
    if (event.target.value === 'Desayuno') {
      console.log('Desayunos')
    }
    else {
      console.log('Almuerzos')
    }
  }

  return (

    <Form className="select-menu">
      <Form.Select onChange={handleChange}>
        <option>Escoge un Menú</option>
        <option value='Desayuno'>Desayuno</option>
        <option value='Almuerzo'>Almuerzo</option>
      </Form.Select>
    </Form>
  )
}

export { Order }