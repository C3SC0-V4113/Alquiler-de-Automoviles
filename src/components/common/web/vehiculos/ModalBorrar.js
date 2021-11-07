import React, { useEffect, useState } from "react";
import {
  Alert,
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
  FormCheck,
  FormControl,
} from "react-bootstrap";

const ModalBorrar = (props) => {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Alert variant="danger">
        <Alert.Heading>{props.title}</Alert.Heading>
        <p>{props.message}</p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button
            onClick={() => props.setAlert(false)}
            variant="outline-success"
          >
            Cancelar
          </Button>
          <Button onClick={() => props.action()} variant="outline-danger">
            Eliminar
          </Button>
        </div>
      </Alert>
    </Modal>
  );
};

export default ModalBorrar;
