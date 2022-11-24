import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";
import '../styles/addProductForm.css'

function AddProductForm() {

  const [data, setData] = useState({ name: '', price: '', image: '', type: '' })

  function handleChange(event) {
    setData({
      ...data,
      [event.target.name]: event.target.value
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log('Envié el form')
    alert('Se creó el producto')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="">
        <Form.Control
          type="text"
          name='name'
          placeholder="Nombre del Producto"
          value={data.name}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="">
        <Form.Control
          type="number"
          name='price'
          placeholder="Precio"
          value={data.price}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="">
        <Form.Control
          type="text"
          name='image'
          placeholder="URL de la Imagen"
          value={data.image}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="">
        <Form.Select
          name='type'
          onChange={handleChange}
          required
        >
          <option value=''>Escoge un Menú</option>
          <option value='Desayuno'>Desayuno</option>
          <option value='Almuerzo'>Almuerzo</option>
        </Form.Select>
      </Form.Group>
      <Button className='btn add' variant="outline-warning" type="submit">
        Guardar
      </Button>
    </Form>
  )
}

export { AddProductForm }

