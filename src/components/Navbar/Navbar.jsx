import React from 'react';
import NavbarBootstrap from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'
import Addition2 from '../Addition2';

const Navbar = ({children})=> {

  return (
    <>
    <NavbarBootstrap bg="dark" variant="dark">
    <Container>
    <NavbarBootstrap.Brand href="#home" className="text-primary border border-primary p-1 rounded">List test work</NavbarBootstrap.Brand>
    <Nav className="me-center">

      <Addition2 /> 
    </Nav>
    </Container>
  </NavbarBootstrap>

    </>
  )
}

export default Navbar;

