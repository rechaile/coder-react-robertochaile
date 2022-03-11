
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import "./navBar.css" 
function NavBar() {
  return (    
    <Navbar className='menu' expand="lg">
    <Container>
      <Navbar.Brand href="#home">
        MercaditoFree
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Inicio</Nav.Link>
          <Nav.Link href="#link">Ofertas</Nav.Link>
          <Nav.Link href="#link">Full</Nav.Link>
          <Nav.Link href="#link">Precios más bajos</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBar