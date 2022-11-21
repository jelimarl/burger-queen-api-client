import React from "react"
import { Link } from "react-router-dom";
import '../styles/header.css'

function Header() {
  return (
    <section className="header">
      <div className="headerImg">
        <img src="/burger-queen-header.png" className="headerLogoBig" alt="Burger logo" />
      </div>
      <nav className="navMenu">
        <ul className="navMenu">
          <Link to="/" className="navLink">Inicio</Link>
          <Link to="/admin-products" className="navLink">Productos</Link>
          <Link to="/admin-users" className="navLink">Usuarios</Link>
        </ul>
      </nav>
    </section>
  )
}

export { Header }

