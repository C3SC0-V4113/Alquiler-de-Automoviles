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
  FloatingLabel,
  Modal,
  FormCheck,
  FormControl,
} from "react-bootstrap";
/*Llamando APIS y sus URLS */
import FetchAPI from "../../../../utils/FetchAPI";
import {
  urlAutosWeb,
  urlMarcasWeb,
  urlModelosWeb,
} from "../../../../consts/URLs";

const ModalEdit = (props) => {
  const [data, setData] = useState({
    id_modelo: "",
    anio: "",
    placa: "",
    precio_dia: "",
    transmision: "",
    pasajeros: "",
    puertas: "",
    ac: "",
    motor: "",
    vidrios_electricos: "",
    imagen: "",
    id_estado_auto: 1,
  });
  const [modelo, setModelo] = useState(0);
  const [año, setAño] = useState(0);
  const [placa, setPlaca] = useState("");
  const [precio, setPrecio] = useState(0);
  const [transmision, setTransmision] = useState("");
  const [pasajeros, setPasajeros] = useState(0);
  const [puertas, setPuertas] = useState(0);
  const [ac, setAC] = useState("");
  const [motor, setMotor] = useState(0);
  const [vidrios, setVidrios] = useState("");
  const [imagen, setImagen] = useState(
    "https://tdrresearch.azureedge.net/photos/chrome/Expanded/White/2019HOC020005/2019HOC02000501.jpg"
  );
  const [estado, setEstado] = useState(0);
  const [marca, setMarca] = useState(0);

  /*Datos de tablas externas */
  const [marcas, setMarcas] = useState([]);
  const [modelos, setModelos] = useState([]);

  useEffect(() => {
    let marcasAPI = FetchAPI(urlMarcasWeb, "GET", {});
    marcasAPI.then((data) => {
      setMarcas([...data.marcas]);
    });
  }, []);

  //PARA OBTENER MODELOS
  useEffect(() => {
    if (marca != 0) {
      let ModelosAPi = FetchAPI(`${urlModelosWeb}/${marca}`, "GET", {});
      ModelosAPi.then((data) => {
        //SE GUARDAN LOS MODELOS
        setModelos([...data.modelos]);
      });
    }
  }, [marca]);

  //FUNCION PARA CREAR LOS AUTOS
  const createVehiculo = () => {
    let vehiculoNew = FetchAPI(urlAutosWeb, "POST", data);
    vehiculoNew
      .then((data) => {
        if (data.id_auto_PK !== 0) {
          console.log("el vehiculo se creo");
          reset();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //FUNCION PARA MODIFICAR LOS AUTOS
  const updateVehiculo = () => {
    const autoAPI = FetchAPI(`${urlAutosWeb}${data.id_auto}`, "PUT", data);

    autoAPI
      .then((data) => {
        console.log(data);
        reset();
        setModalVisible(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (props.idAuto > 0) {
      //FUNCION PARA OBTENER LA INFORMACION DEL AUTO SEGUN SU ID
      let autoAPI = FetchAPI(`${urlAutosWeb}${props.idAuto}`, "GET", {});
      autoAPI.then((data) => {
        const {
          id_auto_PK,
          anio,
          placa,
          precio_dia,
          transmision,
          pasajeros,
          puertas,
          ac,
          motor,
          vidrios_electricos,
          imagen,
          modelo,
        } = data[0];
        setMarca(modelo.marca.id_marca_PK);
        setData({
          ...data,
          id_auto: id_auto_PK,
          id_modelo: modelo.id_modelos_PK,
          anio: anio.toString(),
          placa,
          precio_dia,
          transmision,
          pasajeros: pasajeros.toString(),
          puertas: puertas.toString(),
          ac,
          motor,
          vidrios_electricos,
          imagen,
        });
      });
    } else {
      reset();
    }
  }, [props.idAuto, props.handleClose]);

  //FUNCION PARA RESETEAR LOS CAMPOS
  const reset = () => {
    setData({
      id_modelo: "",
      anio: "",
      placa: "",
      precio_dia: "",
      transmision: "",
      pasajeros: "",
      puertas: "",
      ac: "",
      motor: "",
      vidrios_electricos: "",
      imagen: "",
      id_estado_auto: 1,
    });
    setMarcas([]);
    setMarca("");
    setModelos([]);
  };

  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header>
        <Modal.Title>Agregar y Editar</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Form>
            <Form.Group>
              <FloatingLabel label="Marca">
                <Form.Control></Form.Control>
              </FloatingLabel>
              <FloatingLabel label="Modelo">
                <Form.Control></Form.Control>
              </FloatingLabel>
              <FloatingLabel label="Año">
                <Form.Control></Form.Control>
              </FloatingLabel>
              <FloatingLabel label="Placa">
                <Form.Control></Form.Control>
              </FloatingLabel>
            </Form.Group>
          </Form>
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
