import React, { useEffect, useState } from "react"
import { editProduct, getProducts } from "../utils/petitions"
import { ProductCard } from "./productCard"
import "../styles/productList.css"
import Modal from "react-bootstrap/Modal"
import { EditProductForm } from "./editProductForm"
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";
import Swal from 'sweetalert2';
import { AddProductForm } from "./addProductForm"

function ProductList() {

  const [list, setList] = useState([])

  const [updateList, setUpdateList] = useState(false)

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showAdd, setShowAdd] = useState(false);

  const handleCloseAdd = () => setShowAdd(false);
  const handleShowAdd = () => setShowAdd(true);

  const [dataEditModal, setDataEditModal] = useState({})

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

  // console.log(dataEditModal)

  function handleChangeEditModal(event) {
    setDataEditModal({
      ...dataEditModal,
      [event.target.name]: event.target.value
    })
  }

  function handleSubmitEditModal(event) {

    event.preventDefault()

    editProduct(dataEditModal)
      .then((response) => {
        console.log(response)

        Swal.fire(
          '¡Guardado!',
          'El Producto se ha editado exitosamente.',
          'success'
        )
        handleClose()
        setUpdateList(!updateList)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className="productList">

      <Button variant="secondary" onClick={handleShowAdd}>
        Agregar Producto
      </Button>

      <Modal show={showAdd} onHide={handleCloseAdd}>
        <Modal.Header closeButton>
          <Modal.Title>Crear Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <AddProductForm
            handleCloseAdd={handleCloseAdd}
            setUpdateList={setUpdateList}
            updateList={updateList}
          />

        </Modal.Body>
      </Modal>

      <div>
        {
          list.map((product, index) => (

            <div className="productCard" key={index}>

              <ProductCard
                product={product}
                setUpdateList={setUpdateList}
                updateList={updateList}
                handleShow={handleShow}
                handleClose={handleClose}
                setDataEditModal={setDataEditModal}
              />

            </div>

          ))
        }
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmitEditModal}>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Nombre del Producto</Form.Label>
              <Form.Control
                type="text"
                name='name'
                placeholder="Nombre del Producto"
                value={dataEditModal.name}
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
                value={dataEditModal.price}
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
                value={dataEditModal.image}
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
                <option value={dataEditModal.type}>{dataEditModal.type}</option>
                <option value='Desayuno'>Desayuno</option>
                <option value='Almuerzo'>Almuerzo</option>
              </Form.Select>
            </Form.Group>
            <div className="d-grid">
              <Button className='btn add' variant="outline-warning" type="submit">
                Guardar
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export { ProductList }