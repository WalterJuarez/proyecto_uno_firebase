import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BarraNavegacion() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" style={{ background: "linear-gradient(#06438a, #0466d6)" }}>
      <Container>
        <Navbar.Brand href="#home">MUNDIAL QATAR 2022</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <NavDropdown title="Horarios" id="basic-nav-dropdown">
              <NavDropdown.Item href="#Horarios">Fase grupos</NavDropdown.Item>
              <NavDropdown.Item href="#octavos">Octavos de Final</NavDropdown.Item>
              <NavDropdown.Item href="#cuartos">Cuartos de Final</NavDropdown.Item>
              <NavDropdown.Item href="#tercer">Tercer y cuarto lugar</NavDropdown.Item>
              <NavDropdown.Item href="#final">Gran final</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BarraNavegacion;