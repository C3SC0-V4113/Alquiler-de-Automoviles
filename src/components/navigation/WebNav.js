import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const WebNavPublic = ({ children, typeUser }) => {
    return (
        <>
            <Navbar
                collapseOnSelect
                expand="lg"
                style={{ backgroundColor: "#1E2430" }}
                variant="dark"
            >
                <Container>
                    <Navbar.Brand to="/">
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
                        {typeUser !== 3 ? (
                            <Nav>
                                <NavLink
                                    to="/public/Home"
                                    className="nav-link"
                                    activeClassName=" nav-link active"
                                >
                                    Inicio
                                </NavLink>
                                <NavLink
                                    to="/public/Autos"
                                    className="nav-link"
                                    activeClassName="nav-link active"
                                >
                                    Autos
                                </NavLink>
                                <NavDropdown title="Configuración">
                                    <NavDropdown.Item>
                                        <NavLink
                                            style={{ color: "black" }}
                                            to="/public/Marcas"
                                            className="nav-link"
                                            activeClassName="nav-link active"
                                        >
                                            Marcas
                                        </NavLink>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <NavLink
                                            style={{ color: "black" }}
                                            to="/public/Modelos"
                                            className="nav-link"
                                            activeClassName="nav-link active"
                                        >
                                            Modelos
                                        </NavLink>
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item>
                                        <NavLink
                                            style={{ color: "black" }}
                                            to="/public/Clientes"
                                            className="nav-link"
                                            activeClassName="nav-link active"
                                        >
                                            Clientes
                                        </NavLink>
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <NavLink
                                    to="/public/Login"
                                    className="nav-link"
                                    activeClassName="nav-link active"
                                >
                                    Iniciar Sesion
                                </NavLink>
                                <NavLink
                                    to="/public/Signup"
                                    className="nav-link"
                                    activeClassName="nav-link active"
                                >
                                    Registrarse
                                </NavLink>
                                <NavDropdown title="Usuario">
                                    <NavDropdown.Item>
                                        <NavLink
                                            style={{ color: "black" }}
                                            to="/public/Perfil"
                                            className="nav-link"
                                            activeClassName="nav-link active"
                                        >
                                            Mi Perfil
                                        </NavLink>
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item>
                                        <NavLink
                                            style={{ color: "black" }}
                                            to="/public/Signup"
                                            className="nav-link"
                                            activeClassName="nav-link active"
                                        >
                                            Salir
                                        </NavLink>
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        ) : (
                            <Nav>
                                <NavLink
                                    to="/public/Home"
                                    className="nav-link"
                                    activeClassName=" nav-link active"
                                >
                                    Inicio
                                </NavLink>
                                <NavLink
                                    to="/public/Autos"
                                    className="nav-link"
                                    activeClassName="nav-link active"
                                >
                                    Autos
                                </NavLink>
                                <NavLink
                                    to="/public/Auto"
                                    className="nav-link"
                                    activeClassName="nav-link active"
                                >
                                    Perfil
                                </NavLink>
                                <NavLink
                                    to="/public/Signup"
                                    className="nav-link"
                                    activeClassName="nav-link active"
                                >
                                    Salir
                                </NavLink>
                            </Nav>
                        )}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {children}
        </>
    );
};

export const WebNavPriv = ({ children }) => {
    return (
        <>
            <Navbar
                collapseOnSelect
                expand="lg"
                style={{ backgroundColor: "#1E2430" }}
                variant="dark"
            >
                <Container>
                    <Navbar.Brand to="/">
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
                            <NavLink
                                to="/dash/home"
                                className="nav-link"
                                activeClassName=" nav-link active"
                            >
                                Inicio
                            </NavLink>
                            <NavLink
                                to="/dash/vehiculos"
                                className="nav-link"
                                activeClassName=" nav-link active"
                            >
                                Autos
                            </NavLink>
                            <NavLink
                                to="/dash/marcas"
                                className="nav-link"
                                activeClassName=" nav-link active"
                            >
                                Marcas
                            </NavLink>
                            <NavLink
                                to="/dash/modelos"
                                className="nav-link"
                                activeClassName=" nav-link active"
                            >
                                Modelos
                            </NavLink>
                            <NavLink
                                to="/dash/alquileres"
                                className="nav-link"
                                activeClassName=" nav-link active"
                            >
                                Alquileres
                            </NavLink>
                            <NavLink
                                to="/dash/clientes"
                                className="nav-link"
                                activeClassName=" nav-link active"
                            >
                                Clientes
                            </NavLink>

                            <NavLink
                                to="/dash/perfil"
                                className="nav-link"
                                activeClassName=" nav-link active"
                            >
                                Perfil
                            </NavLink>
                            <NavLink
                                to="/dash/home"
                                className="nav-link"
                                activeClassName=" nav-link active"
                            >
                                Salir
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {children}
        </>
    );
};
