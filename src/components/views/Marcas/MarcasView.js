import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import FetchAPI from "../../../utils/FetchAPI";
import { urlMarcasWeb } from "../../../consts/URLs";

import PaginationList from "../../common/web/modelos/PagList";

const MarcasView = () => {
  const [marcas, setMarcas] = useState([]);
  const [alert, setAlert] = useState(false);
  const [marca, setMarca] = useState("");
  const [marcaid, setMarcaID] = useState(0);
  const [data, setData] = useState({
    id_marca: 0,
    marca: "",
    estado: 1,
  });
  const [texto, setTexto] = useState("Agregar");

  const Desicion = () => {
    if (marcaid > 0) {
      UpdateMarca();
    } else {
      alert("Agregando...");
    }
  };

  const getMarcas = () => {
    console.log("Cargando marcas...");
    let marcasAPI = FetchAPI(urlMarcasWeb, "GET", {});
    marcasAPI.then((data) => {
      setMarcas([...data.marcas]);
    });
  };

  useEffect(() => {
    if (marcaid > 0) {
      console.log("Hola desde la API marca id");
      let marcasAPI = FetchAPI(`${urlMarcasWeb}${marcaid}`, "GET", {});
      marcasAPI.then((item) => {
        const { id_marca_PK, marca } = item.marcas[0];
        console.log(marca);
        setMarca(marca);
        setData({ ...item, marca: marca });
        setTexto("Editar");
      });
    } else {
      console.log("Para agregar");
    }
  }, [marcaid]);

  useEffect(() => {
    getMarcas();
  }, [marca]);

  const UpdateMarca = () => {
    const marcasAPI = FetchAPI(`${urlMarcasWeb}${marcaid}`, "PUT", data);
    marcasAPI
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(console.error());
      });
  };

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
              <Form.Control
                onChange={(text) => {
                  setMarca(text.target.value);
                  setData({ ...data, marca: text.target.value });
                }}
                value={marca}
                size="lg"
                placeholder='ej. "Toyota"'
              />
            </Form.Group>
          </Form>
        </Col>
        <Col className="mt-4 px-5" xs={4}>
          <Button
            onClick={() => {
              Desicion();
            }}
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
            {texto}
          </Button>
        </Col>
      </Row>
      <PaginationList
        setMarcaID={setMarcaID}
        setAlert={setAlert}
        marcas={marcas}
      />
      <Row
        className="mt-5"
        style={{ backgroundColor: "#1E2430", color: "#f9f9f9" }}
      >
        <Col xs={12} className="text-center text-uppercase fs-2 p-5">
          Derechos Reservados
        </Col>
      </Row>
    </Container>
  );
};

export default MarcasView;
