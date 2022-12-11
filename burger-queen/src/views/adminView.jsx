import React, { useEffect, useState } from "react"
import { getProducts } from "../utils/petitions"
import { ProductCard } from "../components/productCard"
import "../styles/adminView.css"
import { Modal, Button } from "react-bootstrap"
import { EditProductForm } from "../components/editProductForm"
import { AddProductForm } from "../components/addProductForm"
import { Header } from "../components/header"

function AdminView() {

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
      })
      .catch((error) => {
        console.log(error)
      })
  }, [updateList])

  return (
    <div>
      <Header />

      <div className="productsList">

        <Button variant="outline-secondary" onClick={handleShowAdd}>
          <strong>Agregar Producto</strong>
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

        <div className="grid-container">
          {
            list.map((product, index) => (

              <ProductCard
                product={product}
                key={index}
                setUpdateList={setUpdateList}
                updateList={updateList}
                handleShow={handleShow}
                setDataEditModal={setDataEditModal}
              />
            ))
          }
        </div>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Editar Producto</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <EditProductForm
              dataEditModal={dataEditModal}
              setDataEditModal={setDataEditModal}
              setUpdateList={setUpdateList}
              updateList={updateList}
              handleClose={handleClose}
            />
          </Modal.Body>
        </Modal>
      </div>
    </div>
  )
}

export { AdminView }