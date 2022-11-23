import React, { useState } from "react";
import { useModal } from "../hooks/useModal.js";
import { AddProductModal } from "./addProductModal.jsx"
import '../styles/adminView.css'
import { Header } from "./header.jsx"
import { ProductList } from "./productList.jsx"
import Button from "react-bootstrap/Button";

function AdminView() {

    const [isOpenAddProductModal, openAddProductModal, closeAddProductModal] = useModal()

    //const [isOpenEditProductModal, openEditProductModal, closeEditProductModal] = useModal()

    return (
        <div className="adminView">
            <Header />
            <ProductList />
            {/* 
            <section className="productsList"> */}

            <button onClick={openAddProductModal} className="addProducts">
                Agregar Productos
            </button>

            {/* <Button
                onClick={openAddProductModal}
            >
                Agregar Productos
            </Button> */}

            <AddProductModal
                isOpen={isOpenAddProductModal}
                closeModal={closeAddProductModal}
            >
            </AddProductModal>
            {/* </section> */}
        </div>
    );

    < section  >

        <section className="addProdModal">
            {/* form para crear productos  */}
        </section>

        <section className="editProdModal">
            {/* form para crear productos  */}
        </section>

    </section >
}

export { AdminView }