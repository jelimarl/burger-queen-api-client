import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import '../styles/header.css'

function HeaderChef() {

  return (
    <section className="header">
      <Navbar>
        <Container>
          <Nav className="me-auto">
            <Link to="/" className="navLink logout">Salir</Link>
          </Nav>
        </Container>
      </Navbar>
    </section>
  )
}

export { HeaderChef }