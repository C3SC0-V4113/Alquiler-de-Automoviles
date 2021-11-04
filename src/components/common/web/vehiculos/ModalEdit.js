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

const ModalEdit = (props) => {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header>
        <Modal.Title>Agregar y Editar</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row></Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Cerrar
        </Button>
        <Button variant="primary" onClick={props.handleClose}>
          Guardar Cambios
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalEdit;
