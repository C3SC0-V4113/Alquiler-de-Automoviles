import React, { useEffect, useState } from "react";
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
import FetchAPI from "../../../utils/FetchAPI";
import PaginationList from "../../common/web/vehiculos/PagList";

//URL API
import { urlAutosWeb } from "../../../consts/URLs";

import AutosJSON from "../../../assets/json/autos.json";
import ModelosJSON from "../../../assets/json/modelos.json";

/*const autos = AutosJSON;

const modelo = ModelosJSON;

const Objeto = () => {
  autos.map((u, i) => {
    modelo.map((m, j) => {
      if (u.idmodelo === m.id) {
        u.idmodelo = m;
      }
    });
  });
};*/

const VehiculosView = () => {
  /*Objeto();*/
  const [nombre, setNombre] = useState("");
  const [marca, setMarca] = useState("");
  const [año, setAño] = useState(0);
  const [placa, setPlaca] = useState("");
  const [precio, setPrecio] = useState(0);
  const [imagen, setImagen] = useState(
    "https://tdrresearch.azureedge.net/photos/chrome/Expanded/White/2019HOC020005/2019HOC02000501.jpg"
  );
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [autos, setAutos] = useState([]);

  useEffect(() => {
    if (!show) {
      console.log("Obteniendo a los autos");
      getAutos();
    }
  }, [show]);

  const getAutos = () => {
    let autosAPI = FetchAPI(urlAutosWeb, "GET", {});
    autosAPI.then((data) => {
      setAutos([...data]);
    });
  };

  const obtenerData = (name, brand, year, id, price, img) => {
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
          <Container>
            <Row></Row>
          </Container>
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
        <PaginationList autos={autos} handleShow={handleShow} />
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
