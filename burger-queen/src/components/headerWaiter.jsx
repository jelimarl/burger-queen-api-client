import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import '../styles/header.css'

function HeaderWaiter() {
  return (
    <section className="header">
      <Navbar>
        <Container>
          <Nav className="me-auto">
            <Link to="/waiter" className="navLink">Ordenar</Link>
            <Link to="/waiter-orders" className="navLink">Pedidos</Link>
          </Nav>
          <Nav>
            <Link to="/" className="navLink">Salir</Link>
          </Nav>
        </Container>
      </Navbar>
    </section>
  )
}

export { HeaderWaiter }