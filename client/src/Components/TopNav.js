import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap'

const TopNav = () => {
  return(
    <Navbar sticky="top" collapseOnSelect expand="md" bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href = "/">HomePage</Navbar.Brand>
      <Navbar.Toggle aria-controls="response-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href = "/">Home</Nav.Link>
          <Nav.Link href = "/things">Things</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  )
};

export default TopNav;