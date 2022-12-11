import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import '../styles/addProductForm.css'
import { saveProduct } from '../utils/petitions';
import Swal from 'sweetalert2';

function AddProductForm(props) {

  const [dataProduct, setDataProduct] = useState({ name: '', price: '', image: '', type: '' })

  function handleChange(event) {
    setDataProduct({
      ...dataProduct,
      [event.target.name]: event.target.value
    })
  }

  function handleSubmit(event) {

    event.preventDefault()

    saveProduct(dataProduct)
      .then((response) => {
        console.log(response)

        Swal.fire(
          '¡Guardado!',
          'El Producto se ha creado exitosamente.',
          'success'
        )
        props.handleCloseAdd()
        props.setUpdateList(!props.updateList)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (

    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="">
        <Form.Control
          type="text"
          name='name'
          placeholder="Nombre del Producto"
          value={dataProduct.name}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="">
        <Form.Control
          type="number"
          name='price'
          placeholder="Precio"
          value={dataProduct.price}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="">
        <Form.Control
          type="text"
          name='image'
          placeholder="URL de la Imagen"
          value={dataProduct.image}
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
      <div className="d-grid">
        <Button bsPrefix="add-product-btn" type="submit">
          Guardar
        </Button>
      </div>
    </Form>
  )
}

export { AddProductForm }

