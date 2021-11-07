import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import FetchAPI from "../../../utils/FetchAPI";

const ModelosView = () => {
  return (
    <Container fluid>
      <Row>
        <Col className="text-center text-uppercase fs-2 p-5" xs={12}>
          <h1 style={{ color: "#F7B569" }}>Modelos</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default ModelosView;
