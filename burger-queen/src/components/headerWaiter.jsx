import { Nav, Container, Navbar } from "react-bootstrap";
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