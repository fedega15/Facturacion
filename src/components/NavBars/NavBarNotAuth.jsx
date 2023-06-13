import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../assets/logo_terminales_servicios.png";
import Letters from "../../assets/TyS_Letters.png";
import { LinkContainer } from "react-router-bootstrap";

export default function NavBarNotAuth() {
  return (
    <Navbar bg="light" expand="md" variant="light">
      <Container fluid className="custom-container">
        <LinkContainer to="/">
          <Navbar.Brand >
        
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/signup" className="navbar-brand">
              <Nav.Link className="active">Registrarse</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login" className="navbar-brand">
              <Nav.Link className="active">Ingresar</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
