import React, { useState } from "react";
import {
  Badge,
  Container,
  Row,
  Col,
  Image,
  Form,
  Button,
  Card,
  Pagination,
  Modal,
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
for (let number = 1; number <= 2; number++) {
  items.push(<Pagination.Item key={number}>{number}</Pagination.Item>);
}

const VehiculosView = () => {
  Objeto();
  const [nombre, setNombre] = useState("");
  const [marca, setMarca] = useState("");
  const [año, setAño] = useState(0);
  const [placa, setPlaca] = useState("");
  const [precio, setPrecio] = useState(0);
  const [imagen, setImagen]=useState("https://tdrresearch.azureedge.net/photos/chrome/Expanded/White/2019HOC020005/2019HOC02000501.jpg")
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const obtenerData = (name, brand, year, id, price,img) => {
    setNombre(name);
    setMarca(brand);
    setAño(year);
    setPlaca(id);
    setPrecio(price);
    setImagen(img);
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Agregar y Editar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
<Container><Row>
  </Row></Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Guardar Cambios
          </Button>
        </Modal.Footer>
      </Modal>
      <Container fluid>
        <Row>
          <Col className="text-center text-uppercase fs-2 p-5" xs={12}>
            <h1 style={{ color: "#F7B569" }}>Vehiculos</h1>
          </Col>
        </Row>
        <Row className="text-end mb-5">
          <Col className="px-5" xs={12}>
            <Button
              style={{
                backgroundColor: "#1E2430",
                color: "#f9f9f9",
                borderColor: "#202633",
              }}
              size="lg"
              variant="primary"
            >
              Agregar Auto
            </Button>
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
                  <span
                    class="badge rounded-pill"
                    style={{
                      backgroundColor: "#F7B569",
                      color: "#f9f9f9",
                      borderColor: "#DEA35F",
                    }}
                  >
                    {item.placa}
                  </span>
                </h3>
                <h3>
                  Año:{" "}
                  <span
                    class="badge rounded-pill"
                    style={{
                      backgroundColor: "#F7B569",
                      color: "#f9f9f9",
                      borderColor: "#DEA35F",
                    }}
                  >
                    {item.anio}
                  </span>
                </h3>
                <h3>
                  Transmision:{" "}
                  <span
                    class="badge rounded-pill"
                    style={{
                      backgroundColor: "#F7B569",
                      color: "#f9f9f9",
                      borderColor: "#DEA35F",
                    }}
                  >
                    {item.transmision}
                  </span>
                </h3>
                <h3>
                  Pasajeros:{" "}
                  <span
                    class="badge rounded-pill"
                    style={{
                      backgroundColor: "#F7B569",
                      color: "#f9f9f9",
                      borderColor: "#DEA35F",
                    }}
                  >
                    {item.placa}
                  </span>
                </h3>
              </Col>
              <Col xs={12} md={3} className="d-grid gap-2 p-5">
                <Button
                  onClick={handleShow}
                  style={{
                    backgroundColor: "#F7B569",
                    color: "#f9f9f9",
                    borderColor: "#DEA35F",
                  }}
                  variant="primary"
                  size="lg"
                  type="submit"
                >
                  Editar
                </Button>
                <Button variant="danger" size="lg" type="submit">
                  Eliminar
                </Button>
              </Col>
            </Row>
          );
        })}
        <Pagination size="lg" className="justify-content-end px-5">
          {items}
        </Pagination>
        <Row
          className="mt-5"
          style={{ backgroundColor: "#1E2430", color: "#f9f9f9" }}
        >
          <Col xs={12} className="text-center text-uppercase fs-2 p-5">
            Derechos Reservados
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default VehiculosView;
