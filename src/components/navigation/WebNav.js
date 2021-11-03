import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
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
                        { typeUser !== 3 ? (
                            <Nav>
                                <NavLink to="/public/Home" className = 'nav-link' activeClassName = ' nav-link active'>
                                    Inicio
                                </NavLink>
                                <NavLink to="/public/Autos" className = 'nav-link' activeClassName = 'nav-link active'>
                                    Autos
                                </NavLink>
                                <NavLink to="/public/Login" className = 'nav-link' activeClassName = 'nav-link active'>
                                    Iniciar Sesion
                                </NavLink>
                                <NavLink to="/public/Signup" className = 'nav-link' activeClassName = 'nav-link active'>
                                    Registrarse
                                </NavLink>
                            </Nav>
                        ): (
                            <Nav>
                                <NavLink to="/public/Home" className = 'nav-link' activeClassName = ' nav-link active'>
                                    Inicio
                                </NavLink>
                                <NavLink to="/public/Autos" className = 'nav-link' activeClassName = 'nav-link active'>
                                    Autos
                                </NavLink>
                                <NavLink to="/public/Signup" className = 'nav-link' activeClassName = 'nav-link active'>
                                    Perfil
                                </NavLink>
                                <NavLink to="/public/Signup" className = 'nav-link' activeClassName = 'nav-link active'>
                                    Salir
                                </NavLink>
                            </Nav>
                        ) }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            { children }
        </>
    );
};

export const WebNavPriv = () => {
    return(
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
                        <Nav.Link to="/">
                            Inicio
                        </Nav.Link>
                        <Nav.Link to="/">
                            Inicio
                        </Nav.Link>
                        <Nav.Link to="/Autos">
                            Autos
                        </Nav.Link>
                        <Nav.Link to="/Login">
                            Iniciar Sesion
                        </Nav.Link>
                        <Nav.Link to="/Signup">
                            Registrarse
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
