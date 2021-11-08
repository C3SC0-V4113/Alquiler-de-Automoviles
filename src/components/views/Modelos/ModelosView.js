import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import FetchAPI from "../../../utils/FetchAPI";
import { urlMarcasWeb, urlModelosWeb } from "../../../consts/URLs";
import PaginationList from "../../common/web/modelos/PagList";

const ModelosView = () => {
  const [modelo,setModelo]=useState({});
  const [modeloid,setModeloID]=useState(0);
  const [modelos,setModelos]=useState([]);
  const [alert,setAlert]=useState(false);

  const getModelos=()=>{
    console.log("Cargando Modelos...");
    let modelosAPI=FetchAPI(urlModelosWeb,"GET",{});
    modelosAPI.then((data)=>{
      console.log([...data.modelos]);
      setModelos([...data.modelos]);
    })
  }

  useEffect(()=>{
    getModelos();
  },[modelo])

  return (
    <Container fluid>
      <Row>
        <Col className="text-center text-uppercase fs-2 p-5" xs={12}>
          <h1 style={{ color: "#F7B569" }}>Modelos</h1>
        </Col>
      </Row>
      <PaginationList
      setModeloID={setModeloID}
      modelos={modelos}
      setAlert={setAlert}
      />
    </Container>
  );
};

export default ModelosView;
