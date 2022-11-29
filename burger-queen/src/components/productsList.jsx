import React, { useEffect, useState } from "react"
import { getProducts } from "../utils/petitions"
import { ProductCard } from "./productCard"
import "../styles/productsList.css"
import Modal from "react-bootstrap/Modal"
import { EditProductForm } from "./editProductForm"
import Button from "react-bootstrap/Button";
import { AddProductForm } from "./addProductForm"

function ProductsList() {

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

  return (
    <div className="productsList">

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
  )
}

export { ProductsList }