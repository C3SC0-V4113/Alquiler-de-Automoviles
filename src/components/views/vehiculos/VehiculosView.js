import React from "react";
import {
  Badge,
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  NavDropdown,
  Image,
  Form,
  Button,
  Card,
  Pagination,
} from "react-bootstrap";

import AutosJSON from "../../../assets/json/autos.json";
import ModelosJSON from "../../../assets/json/modelos.json";

const autos = AutosJSON;

const modelo = ModelosJSON;

const Objeto = () => {
  autos.map((u, i) => {
    modelo.map((m, j) => {
      if (u.idmodelo === m.id) {
        u.idmodelo = m;
      }
    });
  });
};

let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(<Pagination.Item key={number}>{number}</Pagination.Item>);
}

const VehiculosView = () => {
  Objeto();
  return (
    <>
      <Container fluid>
        <Row>
          <Col className="text-center text-uppercase fs-2 p-5" xs={12}>
            Vehiculos
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Button size="lg" variant="primary">Agregar Auto</Button>
          </Col>
        </Row>

        {autos.map(function (item, i) {
          return (
            <Row className="p-2" key={i}>
              <Col xs={12} md={4}>
                <Image src={item.imagen} fluid />
              </Col>
              <Col xs={12} md={5}>
                <Col>
                  <h2>{item.idmodelo.nombre}</h2>
                </Col>
                <h3>
                  Placa:{" "}
                  <span class="badge rounded-pill bg-primary">
                    {item.placa}
                  </span>
                </h3>
                <h3>
                  Año:{" "}
                  <span class="badge rounded-pill bg-primary">{item.anio}</span>
                </h3>
                <h3>
                  Transmision:{" "}
                  <span class="badge rounded-pill bg-primary">
                    {item.transmision}
                  </span>
                </h3>
                <h3>
                  Pasajeros:{" "}
                  <span class="badge rounded-pill bg-primary">
                    {item.placa}
                  </span>
                </h3>
              </Col>
              <Col xs={12} md={3} className="d-grid gap-2 p-5">
                <Button
                  variant="primary"
                  size="lg"
                  type="submit"
                >
                  Editar
                </Button>

                <Button
                  variant="secondary"
                  size="lg"
                  type="submit"
                >
                  Eliminar
                </Button>
              </Col>
            </Row>
          );
        })}
        <Pagination>{items}</Pagination>
        <Row>
          <Col xs={12} className="text-center text-uppercase fs-2 p-5">
            Derechos Reservados
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default VehiculosView;
