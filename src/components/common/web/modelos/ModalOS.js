import React, { useEffect, useState } from "react";
import { Container, Form, Button, Modal } from "react-bootstrap";
/*Llamando APIS y sus URLS */
import FetchAPI from "../../../../utils/FetchAPI";
import {
  urlAutosWeb,
  urlMarcasWeb,
  urlModelosWeb,
} from "../../../../consts/URLs";

const ModalModelos = (props) => {
  const [data, setData] = useState({
      modelo: "",
      marca: {
          id_marca_PK: 0,
      }
  });
  const [marca,setMarca]=useState('');
  const [marcas, setMarcas] = useState([]);

  useEffect(() => {
    console.log("Cargando marcas...");
    let marcasAPI = FetchAPI(urlMarcasWeb, "GET", {});
    marcasAPI.then((data) => {
      setMarcas([...data.marcas]);
    });
  }, [props.show]);

  const updateModelos = () => {
    const modelosAPI = FetchAPI(`${urlModelosWeb}${props.modeloid}`, "PUT", data);

    modelosAPI
      .then((data) => {
        console.log(data);
        reset();
        props.handleClose();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const Desicion = () => {
    if (props.modeloid > 0) {
      console.log("Actualizando...");
      updateModelos();
    } else {
      console.log("Insertando...");
    }
  };

  const reset=()=>{
      setData({
        modelo: "",
        marca: {
            id_marca_PK: 0,
        }
    });
    props.setModeloID(0);
  }

  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header>
        <Modal.Title>Agregar y Editar</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Form>
            <Form.Group>
              <Form.Label>Marca</Form.Label>
              <Form.Control
                onChange={(item) => {setMarca(item.target.value);
                setData({...data, marca:{id_marca_PK: item.target.value } })}}
                as="select"
              >
                <option>Seleccione una marca</option>
                {marcas.map((item, i) => (
                  <option key={i} value={item.id_marca_PK}>
                    {item.marca}
                  </option>
                ))}
              </Form.Control>
              <Form.Label>Modelo</Form.Label>
              <Form.Control
                onChange={(item) =>
                  setData({ ...data, modelo: item.target.value })
                }
              ></Form.Control>
            </Form.Group>
          </Form>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Cerrar
        </Button>
        <Button variant="primary" onClick={(props.handleClose, Desicion)}>
          Guardar Cambios
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalModelos;
