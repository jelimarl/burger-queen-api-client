import { Nav, Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../styles/header.css'

function HeaderChef() {
  return (
    <section className="header">
      <Navbar>
        <Container>
          <Nav>
          </Nav>
          <Nav>
            <Link to="/" className="navLink">Salir</Link>
          </Nav>
        </Container>
      </Navbar>
    </section>
  )
}

export { HeaderChef }