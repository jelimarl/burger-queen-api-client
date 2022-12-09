import React from "react"
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import '../styles/header.css'

function Header() {
  return (
    <section className="header">
      <Navbar >
        <Container>
          <Nav className="me-auto">
            <Link to="/admin-products" className="navLink products-link">Productos</Link>
            <Link to="/admin-users" className="navLink">Usuarios</Link>
            <Link to="/" className="navLink logout-admin">Salir</Link>
          </Nav>
        </Container>
      </Navbar>
    </section>
  )
}

export { Header }

