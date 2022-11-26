import React, { useState } from "react";
import '../styles/adminView.css'
import { Header } from "../components/header"
import { ProductList } from "../components/productList"
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';
import { AddProductForm } from "../components/addProductForm";
import Form from 'react-bootstrap/Form'
import Swal from 'sweetalert2';
import { saveProduct } from '../utils/petitions';


function AdminView() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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

                document.getElementById('product-name').value = ""
                document.getElementById('product-price').value = ""
                document.getElementById('product-image').value = ""

                Swal.fire(
                    '¡Guardado!',
                    'El Producto se ha creado exitosamente.',
                    'success'
                )

                setShow(false)
            })
            .catch((error) => {
                console.log(error)
            })
    }

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
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="product-name">
                                <Form.Control
                                    type="text"
                                    name='name'
                                    placeholder="Nombre del Producto"
                                    value={dataProduct.name}
                                    onChange={handleChange}
                                    required
                                    autoFocus
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="product-price">
                                <Form.Control
                                    type="number"
                                    name='price'
                                    placeholder="Precio"
                                    value={dataProduct.price}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="product-image">
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
                                <Button className='btn add' variant="outline-warning" type="submit">
                                    Guardar
                                </Button>
                            </div>
                        </Form>

                    </Modal.Body>

                </Modal>

                <ProductList />
            </div>
        </div>
    );
}

export { AdminView }