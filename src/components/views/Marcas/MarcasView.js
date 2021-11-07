import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import FetchAPI from "../../../utils/FetchAPI";
import { urlMarcasWeb } from "../../../consts/URLs";

import PaginationList from "../../common/web/modelos/PagList";

const MarcasView = () => {
  const [marcas, setMarcas] = useState([]);
  const [marca, setMarca] = useState("");

  const getMarcas = () => {
    console.log("Cargando marcas...");
    let marcasAPI = FetchAPI(urlMarcasWeb, "GET", {});
    marcasAPI.then((data) => {
      setMarcas([...data.marcas]);
    });
  };

  useEffect(() => {
    getMarcas();
  }, [marca]);

  return (
    <Container fluid>
      <Row>
        <Col className="text-center text-uppercase fs-2 p-5" xs={12}>
          <h1 style={{ color: "#F7B569" }}>Marcas</h1>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col className="px-5" xs={8}>
          <Form>
            <Form.Group className="mb-3 justify-content-evenly">
              <Form.Label>Marca</Form.Label>
              <Form.Control size="lg" placeholder='ej. "Toyota"' />
            </Form.Group>
          </Form>
        </Col>
        <Col className="mt-4 px-5" xs={4}>
          <Button
            style={{
              backgroundColor: "#1E2430",
              color: "#f9f9f9",
              borderColor: "#202633",
            }}
            className="justify-content-center"
            size="lg"
            variant="primary"
            type="submit"
          >
            Agregar
          </Button>
        </Col>
      </Row>
      <PaginationList marcas={marcas}/>
    </Container>
  );
};

export default MarcasView;
