import React from 'react';
import { Modal } from './modal.jsx';

function AddProductModal(props) {

  return (
    <Modal {...props} title='' >

      <section className="addProductModal">
        <h2 className="addProductTitle">
          Crear Producto
        </h2>

        <form className='addProductForm' >
          <input
            className="addProductInput"
            type='text'
            placeholder="Nombre del producto"
            name="productName"
          />

          <input
            className="addProductInput"
            type='text'
            placeholder="Precio del Producto"
            name="productPrice"
          />

          <input
            className="addProductInput"
            type='text'
            placeholder="Tipo de Menú"
            name="menuType"
          />
          <input
            className="addProductInput"
            type='text'
            placeholder="Imagen del producto"
            name="productImg"
          />
          <button type="submit" className="addProductBtn">
            Agregar Producto
          </button>

        </form>
      </section>

    </Modal>
  )
}

export { AddProductModal }