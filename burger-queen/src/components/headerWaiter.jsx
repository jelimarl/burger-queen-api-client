import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import '../styles/header.css'

function HeaderWaiter() {
  return (
    <section className="header">
      {/* <div className="headerImg">
        <img src="/burger-queen-header.png" className="headerLogoBig" alt="Burger logo" />
      </div> */}
      <Navbar >
        <Container>
          <Nav className="me-auto">
            <Link to="/waiter" className="navLink">Ordenar</Link>
            <Link to="" className="navLink">Pedidos</Link>
            <Link to="/" className="navLink logout">Salir</Link>
          </Nav>
        </Container>
      </Navbar>
    </section>
  )
}

export { HeaderWaiter }