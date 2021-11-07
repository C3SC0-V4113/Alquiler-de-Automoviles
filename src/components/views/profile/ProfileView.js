import React from 'react';
import { Container, Row, Form, Col, Button } from 'react-bootstrap';
import './style.css';

const ProfileView = () => {
    return(
        <Container>
            <h1>Mi perfil</h1>
            <Row>
                <Form>
                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Nombres</Form.Label>
                                <Form.Control type="text" placeholder="Ingrese sus nombres" />
                            </Form.Group>
                        </Col>

                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Apellidos</Form.Label>
                                <Form.Control type="text" placeholder="Ingrese sus apellidos" />
                            </Form.Group>
                        </Col>

                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Correo electrónico</Form.Label>
                                <Form.Control type="text" placeholder="Ingrese su correo electrónico" />
                            </Form.Group>
                        </Col>

                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Usuario</Form.Label>
                                <Form.Control type="text" placeholder="Ingrese su usuario" />
                            </Form.Group>
                        </Col>

                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Fecha de nacimiento</Form.Label>
                                <Form.Control type="text" placeholder="Ingrese su fecha de nacimiento" />
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
                                <Form.Control type="text" placeholder="Ingrese su contraseña actual" />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Contraseña nueva</Form.Label>
                                <Form.Control type="text" placeholder="Ingrese su nueva contraseña" />
                            </Form.Group>
                        </Col>

                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Confirmar contraseña nueva</Form.Label>
                                <Form.Control type="text" placeholder="Confirme su nueva contraseña" />
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </Row>

            <div className='containerButton'>
                <Button>Guardar Cambios</Button>
            </div>
        </Container>
    )
}

export default ProfileView;