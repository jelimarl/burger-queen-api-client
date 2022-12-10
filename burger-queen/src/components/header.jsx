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
            <Link to="/admin-products" className="navLink">Productos</Link>
            <Link to="/admin-users" className="navLink">Usuarios</Link>
          </Nav>
          <Nav>
            <Link to="/" className="navLink">Salir</Link>
          </Nav>
        </Container>
      </Navbar>
    </section>
  )
}

export { Header }

