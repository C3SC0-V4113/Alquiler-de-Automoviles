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
//Componentes de Vehiculos
import PaginationList from "../../common/web/vehiculos/PagList";
import ModalEdit from "../../common/web/vehiculos/ModalEdit";
//URL API
import { urlAutosWeb } from "../../../consts/URLs";

const VehiculosView = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [autos, setAutos] = useState([]);
  const [idAuto, setIdAuto] = useState(0);
  const [alert, setAlert] = useState(false);

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

  /*const obtenerData = (name, brand, year, id, price, img) => {
    setNombre(name);
    setMarca(brand);
    setAño(year);
    setPlaca(id);
    setPrecio(price);
    setImagen(img);
  };*/
  return (
    <>
      <ModalEdit show={show} idAuto={idAuto} handleClose={handleClose} />
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
        <PaginationList autos={autos} setIdAuto={setIdAuto} handleShow={handleShow} />
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
