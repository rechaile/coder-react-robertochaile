
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
          <Nav.Link>
            <NavLink to={'/categoria/Oferta'}>Ofertas</NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink to={'/categoria/Full'}>Full</NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink to={'/categoria/Precios+mas+bajos'}>Precios más bajos</NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink to={`/cart`}>
              <MdAddShoppingCart className="carrito"/>
            </NavLink>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBar