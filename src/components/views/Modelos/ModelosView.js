import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import FetchAPI from "../../../utils/FetchAPI";
import { urlMarcasWeb, urlModelosWeb } from "../../../consts/URLs";
import PaginationList from "../../common/web/modelos/PagList";
import ModalModelos from "../../common/web/modelos/ModalOS";

const ModelosView = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [modelo, setModelo] = useState({});
  const [modeloid, setModeloID] = useState(0);
  const [modelos, setModelos] = useState([]);
  const [alert, setAlert] = useState(false);

  const getModelos = () => {
    console.log("Cargando Modelos...");
    let modelosAPI = FetchAPI(urlModelosWeb, "GET", {});
    modelosAPI.then((data) => {
      console.log([...data.modelos]);
      setModelos([...data.modelos]);
    });
  };

  useEffect(() => {
    getModelos();
  }, [modelo]);

  return (
    <Container fluid>
      <ModalModelos
        show={show}
        modelos={modelos}
        handleClose={handleClose}
        modeloid={modeloid}
        setModeloID={setModeloID}
      />
      <Row>
        <Col className="text-center text-uppercase fs-2 p-5" xs={12}>
          <h1 style={{ color: "#F7B569" }}>Modelos</h1>
        </Col>
      </Row>
      <Row className="text-end mb-5">
          <Col className="px-5" xs={12}>
            <Button
              onClick={() => {
                setModeloID(0);
                handleShow();
              }}
              style={{
                backgroundColor: "#1E2430",
                color: "#f9f9f9",
                borderColor: "#202633",
              }}
              size="lg"
              variant="primary"
            >
              Agregar Modelo
            </Button>
          </Col>
        </Row>
      <PaginationList
        setModeloID={setModeloID}
        modelos={modelos}
        handleShow={handleShow}
        setAlert={setAlert}
      />
    </Container>
  );
};

export default ModelosView;
