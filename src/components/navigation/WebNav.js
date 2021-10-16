import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Switch, Route, Link } from "react-router-dom";
import Home from "../views/home/Home";
import Vehiculos from "../views/vehiculos/Vehiculos";
import Login from "../views/login/Login";
import Signup from "../views/signup/Signup";

const WebNav = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{ backgroundColor: "#1E2430" }}
        variant="dark"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              alt=""
              src="https://react-bootstrap.github.io/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            React-Cars
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-end"
            id="responsive-navbar-nav"
          >
            <Nav>
              <Nav.Link as={Link} to="/">
                Inicio
              </Nav.Link>
              <Nav.Link as={Link} to="/Autos">
                Autos
              </Nav.Link>
              <Nav.Link as={Link} to="/Login">
                Iniciar Sesion
              </Nav.Link>
              <Nav.Link as={Link} to="/Signup">
                Registrarse
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Autos" component={Vehiculos} />
        <Route path="/Login" component={Login} />
        <Route path="/Signup" component={Signup} />
      </Switch>
    </>
  );
};

export default WebNav;
