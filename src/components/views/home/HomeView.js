import React from "react";
import { Container, Row, Col, Navbar } from "react-bootstrap";

const HomeView = () => {
  return (
    <Container fluid >
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://react-bootstrap.github.io/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            React Bootstrap
          </Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  );
};

export default HomeView;
