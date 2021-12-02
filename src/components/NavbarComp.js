import React, { Component } from 'react';
import {Container,Navbar,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';
import CartWidget from './CartWidget';


export default class NavbarComp extends Component {
    render() {
        return (
            <div>
                <Navbar bg="white" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Tu tienda</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll>
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">Galería</Nav.Link>
        <NavDropdown title="Categorías" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Categoría 1</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Categoría 2</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Ver todas las categorías
          </NavDropdown.Item>
        </NavDropdown>
        <CartWidget/>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
            </div>
        )
    }
}
