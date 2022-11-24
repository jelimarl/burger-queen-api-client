import React, { useState } from "react";
import '../styles/adminView.css'
import { Header } from "../components/header"
import { ProductList } from "../components/productList"
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';
import { AddProductForm } from "../components/addProductForm";


function AdminView() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Header />

            <div className="adminView">

                <Button variant="secondary" onClick={handleShow}>
                    Agregar Producto
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Crear Producto</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <AddProductForm />
                    </Modal.Body>
                    {/* <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Cerrar
                            </Button>
                            <Button variant="primary" type="submit">
                                Guardar
                            </Button>
                        </Modal.Footer> */}
                </Modal>

                <ProductList />
            </div>
        </div>
    );
}

export { AdminView }