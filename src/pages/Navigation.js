import React from "react";
import { Container, Button, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <Navbar className="bg-white shadow-sm mb-3 navigation">
      <Container className="nav-container ">
        <Navbar.Brand href="#">Polyglot</Navbar.Brand>
        <Nav>
          <Nav.Link as={NavLink} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/application">
            Application
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;
