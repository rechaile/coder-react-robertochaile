
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import "./navBar.css" 
import { NavLink } from 'react-router-dom'

import CartWidget from '../cart/CartWidget'
import logo from './logo/logo-MF.png'


function NavBar() {
  return (    
    <Navbar className='menu' expand="lg">
    <Container>
      <NavLink to={`/`}>
        <Navbar.Brand>
          <img className='logo' src={logo} alt="logo mercadito free"/>
        </Navbar.Brand>
      </NavLink>
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavLink className={'links'} to={'/categoria/Oferta'}>Ofertas</NavLink>
          <NavLink className={'links'} to={'/categoria/Full'}>Full</NavLink>
          <NavLink className={'links'} to={'/categoria/Precios+mas+bajos'}>Precios más bajos</NavLink>
          <NavLink className={'links'} to={`/cart`}>
            <CartWidget/>  
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBar