import React, { useState } from "react";
import { useModal } from "../hooks/useModal.js";
import { AddProductModal } from "./addProductModal.jsx"
import '../styles/adminView.css'
import { Header } from "./header.jsx"
import { ProductList } from "./productList.jsx"
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';


function AdminView() {

    // const [isOpenAddProductModal, openAddProductModal, closeAddProductModal] = useModal()

    //const [isOpenEditProductModal, openEditProductModal, closeEditProductModal] = useModal()

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Header />

            <div className="adminView">

                <>
                    <Button variant="secondary" onClick={handleShow}>
                        Agregar Producto
                    </Button>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleClose}>
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </>

                <ProductList />
                {/* 
    <section className="productsList"> */}

                {/* <button onClick={openAddProductModal} className="addProducts">
        Agregar Productos
    </button> */}

                {/* <AddProductModal
        isOpen={isOpenAddProductModal}
        closeModal={closeAddProductModal}
    >
    </AddProductModal> */}
                {/* </section> */}
            </div>
        </div>
    );
}

export { AdminView }