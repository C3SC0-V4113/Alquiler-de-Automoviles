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

const HorizontalCard = (props) => {
  return (
    <Row className="p-2" key={props.i}>
      <Col xs={12} md={4}>
        <Image src={props.item.imagen} fluid />
      </Col>
      <Col xs={12} md={5}>
        <Col>
          <h2>{props.item.modelo.modelo}</h2>
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
            {props.item.placa}
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
            {props.item.anio}
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
            {props.item.transmision}
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
            {props.item.pasajeros}
          </span>
        </h3>
      </Col>
      <Col xs={12} md={3} className="d-grid gap-2 p-5">
        <Button
          onClick={() => {
            props.handleShow();
            props.setIdAuto(props.item.id_auto_PK);
          }}
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
        <Button
          onClick={() => {
            props.setIdAuto(props.item.id_auto_PK);
          }}
          variant="danger"
          size="lg"
          type="submit"
        >
          Eliminar
        </Button>
      </Col>
    </Row>
  );
};

export default HorizontalCard;
