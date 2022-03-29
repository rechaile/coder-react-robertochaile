
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import "./navBar.css" 
import { NavLink } from 'react-router-dom'
import { MdAddShoppingCart } from "react-icons/md";


function NavBar() {
  return (    
    <Navbar className='menu' expand="lg">
    <Container>
      <NavLink to={`/`}>
        <Navbar.Brand>
          MercaditoFree
        </Navbar.Brand>
      </NavLink>
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavLink to={`/`}>
            <Nav.Link>Inicio</Nav.Link>
          </NavLink>
          <Nav.Link href="#link">Ofertas</Nav.Link>
          <Nav.Link href="#link">Full</Nav.Link>
          <Nav.Link href="#link">Precios más bajos</Nav.Link>
          <NavLink to={`/cart`}>
            <MdAddShoppingCart className="carrito"/>
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBar