import React from 'react';
import { Col, Container, Row, Table, Form, Button } from 'react-bootstrap';
import './style.css'

const DetalleVehiculoView = () => {
    return(
        <Container fluid='lg' >
            <h1 className = 'title'>Detalle de Alquiler</h1>
            <Row className = 'card'>
                <Col xs={12} sm={12} md={8}>
                    <Row>
                        <Col xs = {12} className='mt-3'>
                            <h3>Alquiler de Toyota Corolla por 2 días</h3>
                        </Col>
                        <Col xs = {6} className='mt-4'>
                            <p>Entrega de vehículo:</p>
                            <p>Colonia Escalón</p>
                            <p>06/09/2021 10:00 AM</p>
                        </Col>
                        <Col xs = {6} className='mt-4'>
                            <p>Entrega de vehículo</p>
                            <p>Colonia Escalón</p>
                            <p>07/09/2021 10:00 AM</p>
                        </Col>
                    </Row>
                </Col>
                <Col xs={12} sm={12} md={4}>
                    <img className = 'image' src = 'https://motorsports.com.uy/wp-content/uploads/toyota-corolla-2014-91.jpg' />
                </Col>
                <Table hover size="sm">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Dia/s</th>
                            <th>Precio por día</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='align-rigth'>Toyota Corrolla</td>
                            <td className='text-center'>2</td>
                            <td className='text-center'>$ 30.00</td>
                            <td className='text-center'>$ 60.00</td>
                        </tr>
                        <tr>
                            <td className='align-rigth'>Total</td>
                            <td></td>
                            <td></td>
                            <td className='text-center'>$ 60.00</td>
                        </tr>
                    </tbody>
                </Table>
            </Row>
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
            <div className = 'action mt-3 flex-end'>
                <Button>Confirmar Alquiler</Button>
                <Button>Regresar</Button>
            </div>
        </Container>
    )
}

export default DetalleVehiculoView;