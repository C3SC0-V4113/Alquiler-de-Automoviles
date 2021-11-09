import React from 'react';

import { Row, Col, Form } from 'react-bootstrap';

const FormAlquiler = () => {
    return(
        <Row className = 'card mt-3'>
            <h3 className='mt-3'>Información del cliente</h3>
            <Form>
                <Row>
                    <Col md={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Nombres</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese sus nombres" />
                        </Form.Group>
                    </Col>

                    <Col md={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Apellidos</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese sus apellidos" />
                        </Form.Group>
                    </Col>

                    <Col md={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Correo electrónico</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese su correo electrónico" />
                        </Form.Group>
                    </Col>

                    <Col md={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Dirección de residencia</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese su dirección" />
                        </Form.Group>
                    </Col>

                    <Col md={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Número de teléfono</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese su número de teléfono" />
                        </Form.Group>
                    </Col>

                    <Col md={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Fecha de nacimiento</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese su fecha de nacimiento" />
                        </Form.Group>
                    </Col>

                    <Col md={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Usuario</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese su usuario" />
                        </Form.Group>
                    </Col>

                    <Col md={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese una contraseña" />
                        </Form.Group>
                    </Col>

                    <Col md={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>confirmar contraseña</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese de nuevo su contraseña" />
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
        </Row>
    )
}

export default FormAlquiler;