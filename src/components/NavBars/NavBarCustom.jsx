import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../../assets/logo_terminales_servicios.png";
import Letters from "../../assets/TyS_Letters.png";
import { LinkContainer } from "react-router-bootstrap";
import { useAuth } from "../AuthContext";
import { logoutRequest } from "../../api/userAPI";
import { useNavigate } from "react-router-dom";

export default function NavBarCustom() {
  const { setAuth, routes, userName } = useAuth();
  const navigate = useNavigate();
  async function handleLogout() {
    logoutRequest().then(setAuth(false));
  }
  const capitalize = (str) => {
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
    return capitalized;
  };
  const renderUserRoutes = () => {
    let content = [];
    for (var key in routes[0]) {
      content.push(
        <NavDropdown
          key={key}
          title={capitalize(key)}
          id="basic-nav-dropdown"
          active
        >
          {routes[0][key].map((ruta) => {
            if (ruta.display) {
              return (
                <NavDropdown.Item
                  onClick={() => navigate(ruta.path)}
                  key={ruta.path}
                >
                  {ruta.descrip}
                </NavDropdown.Item>
              );
            }
          })}
        </NavDropdown>
      );
    }
    return content;
  };
  return (
    <Navbar bg="light" expand="md" variant="light">
      <Container fluid className="custom-container">
        <LinkContainer to="/">
          <Navbar.Brand className="py-0">
            <img src={Logo} alt="logo" width={50} height={50} />
            <img
              src={Letters}
              alt="letters"
              width={120}
              height={50}
              className="ms-2"
            />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto arrow-none">
            {/*Func como la de abajo, pero que retorne un item por cada row en 
            la navbar del usuario WHERE category = NULL AND display = 0 OR false*/}
            {renderUserRoutes()}
          </Nav>
          <Nav className="ms-auto">
            <NavDropdown
              title={
                <>
                  {userName}
                  <i className="bi bi-gear ms-2" />
                </>
              }
              id="basic-nav-dropdown"
              align="end"
              className="arrow-none"
            >
              <NavDropdown.Item href="/" onClick={handleLogout}>
                Cerrar sesión
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
 