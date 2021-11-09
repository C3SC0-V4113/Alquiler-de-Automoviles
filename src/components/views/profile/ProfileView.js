import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Form, Col, Button } from "react-bootstrap";
import "./style.css";

//URL API
import { urlUsuariosWeb } from "../../../consts/URLs";
//CONTEXT
import { AuthContext } from "../../../contexts/AuthContext";
//FECTH_API
import FetchAPI from "../../../utils/FetchAPI";

const ProfileView = () => {
  const { idUser } = useContext(AuthContext);
  const [infoUser, setInfoUser] = useState({
    id_tipo_usuario: 0,
    nombres: "",
    apellidos: "",
    email: "",
    usuario: "",
    password: "",
    password_confirm: "",
    fecha_nacimiento: "",
    direccion: "",
    telefono: "",
  });

  useEffect(() => {
    getUser();
  }, []);

  //FUNCION PARA OBTENER LOS DATOS DEL USUARIO LOGGEADO
  const getUser = () => {
    const userAPI = FetchAPI(`${urlUsuariosWeb}${idUser}`, "GET");

    userAPI
      .then((user) => {
        setInfoUser({
          ...infoUser,
          id_tipo_usuario: user[0].id_tipo_usuario_FK,
          nombres: user[0].nombres,
          apellidos: user[0].apellidos,
          email: user[0].email,
          usuario: user[0].usuario,
          password: user[0].password,
          password_actual: "",
          password_new: "",
          password_confirm: "",
          fecha_nacimiento: user[0].fecha_nacimiento,
          direccion: user[0].direccion,
          telefono: String(user[0].telefono),
        });
      })
      .catch((err) => {
        console.log("err: " + err);
      });
  };
  return (
    <Container>
      <h1>Mi perfil</h1>
      <Row>
        <Form>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Nombres</Form.Label>
                <Form.Control
                  onChange={(text) => {
                    setInfoUser({ ...infoUser, nombres: text.target.value });
                  }}
                  type="text"
                  placeholder="Ingrese sus nombres"
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Apellidos</Form.Label>
                <Form.Control
                  onChange={(text) =>
                    setInfoUser({ ...infoUser, apellidos: text.target.value })
                  }
                  type="text"
                  placeholder="Ingrese sus apellidos"
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Correo electrónico</Form.Label>
                <Form.Control
                  onChange={(text) =>
                    setInfoUser({ ...infoUser, email: text.target.value })
                  }
                  type="text"
                  placeholder="Ingrese su correo electrónico"
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Usuario</Form.Label>
                <Form.Control onChange = { text => setInfoUser({ ...infoUser, usuario: text.target.value }) } type="text" placeholder="Ingrese su usuario" />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Fecha de nacimiento</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese su fecha de nacimiento"
                  onChange = { text => setInfoUser({ ...infoUser, fecha_nacimiento: text.target.value }) }
                />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Row>

      <h1>Cambiar contraseña</h1>
      <Row>
        <Form>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Contraseña actual</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese su contraseña actual"
                  onChange = { text => setInfoUser({ ...infoUser, password_actual: text.target.value }) }
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Contraseña nueva</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese su nueva contraseña"
                  onChange = { text => setInfoUser({ ...infoUser, password_new: text.target.value }) }
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Confirmar contraseña nueva</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Confirme su nueva contraseña"
                  onChange = { text => setInfoUser({ ...infoUser, password_confirm: text.target.value }) }
                />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Row>

      <div className="containerButton">
        <Button>Guardar Cambios</Button>
      </div>
    </Container>
  );
};

export default ProfileView;
