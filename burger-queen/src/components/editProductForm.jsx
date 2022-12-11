import React from 'react'
import { Form, Button } from 'react-bootstrap'
import Swal from 'sweetalert2';
import { editProduct } from "../utils/petitions"

function EditProductForm(props) {

  function handleChangeEditModal(event) {

    props.setDataEditModal({
      ...props.dataEditModal,
      [event.target.name]: event.target.value
    })
  }

  function handleSubmitEditModal(event) {

    event.preventDefault()

    editProduct(props.dataEditModal)
      .then((response) => {
        console.log(response)

        Swal.fire(
          '¡Guardado!',
          'El Producto se ha editado exitosamente.',
          'success'
        )
        props.handleClose()
        props.setUpdateList(!props.updateList)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <Form onSubmit={handleSubmitEditModal}>

      <Form.Group className="mb-3" controlId="">
        <Form.Label>Nombre del Producto</Form.Label>
        <Form.Control
          type="text"
          name='name'
          placeholder="Nombre del Producto"
          value={props.dataEditModal.name}
          onChange={handleChangeEditModal}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="">
        <Form.Label>Precio</Form.Label>
        <Form.Control
          type="number"
          name='price'
          placeholder="Precio"
          value={props.dataEditModal.price}
          onChange={handleChangeEditModal}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="">
        <Form.Label>URL de la imagen</Form.Label>
        <Form.Control
          type="text"
          name='image'
          placeholder="URL de la Imagen"
          value={props.dataEditModal.image}
          onChange={handleChangeEditModal}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="">
        <Form.Label>Escoge un Menú</Form.Label>
        <Form.Select
          name='type'
          onChange={handleChangeEditModal}
          required
        >
          <option value={props.dataEditModal.type}>{props.dataEditModal.type}</option>
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

export { EditProductForm }