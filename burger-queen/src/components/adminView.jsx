import React, { useState } from "react";
import { useModal } from "../hooks/useModal.js";
import { AddProductModal } from "./addProductModal.jsx"
import '../styles/adminView.css'
import { Header } from "./header.jsx"
import { ProductList } from "./productList.jsx"

function AdminView() {

    const [isOpenAddProductModal, openAddProductModal, closeAddProductModal] = useModal()

    //const [isOpenEditProductModal, openEditProductModal, closeEditProductModal] = useModal()

    return (
        <div className="adminView">
            <Header />

            <ProductList />

            <section className="productsList">
                {/* componente de productos */}

                <button onClick={openAddProductModal} className="addProducts">
                    Agregar Productos
                </button>

                <AddProductModal
                    isOpen={isOpenAddProductModal}
                    closeModal={closeAddProductModal}
                >
                </AddProductModal>
            </section>
        </div>
    );

    < section  >

        <section className="header">
            <div className="headerImg">
                <img src="/burger-queen-logo.png" className="headerLogo" alt="Burger logo" />
                <img src="/burger-queen-header.png" className="headerLogoBig" alt="Burger logo" />
            </div>

            <nav className="navMenu"></nav>
            {/* Menú de navegació en react */}
        </section>

        <section className="productsList">
            {/* componente de productos */}
        </section>

        <section className="addProdModal">
            {/* form para crear productos  */}
        </section>

        <section className="editProdModal">
            {/* form para crear productos  */}
        </section>

    </section >
}

export { AdminView }