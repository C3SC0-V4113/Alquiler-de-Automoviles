import React from "react";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  NavDropdown,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import ImageGallery from "react-image-gallery";
const autos = [
  {
    id: 1,
    idmodelo: 1,
    anio: 2019,
    placa: "P23567",
    precio_dia: 12,
    transmision: "estandar",
    pasajeros: 4,
    puertas: 4,
    ac: "si",
    motor: "260",
    vidrios_electricos: "si",
    imagen:
      "https://tdrresearch.azureedge.net/photos/chrome/Expanded/White/2019HOC020005/2019HOC02000501.jpg",
    estado: 1,
  },
  {
    id: 2,
    idmodelo: 2,
    anio: 2018,
    placa: "P23568",
    precio_dia: 14,
    transmision: "automatico",
    pasajeros: 4,
    puertas: 4,
    ac: "si",
    motor: "260",
    vidrios_electricos: "si",
    imagen:
      "https://www.toyota.com.sv/wp-content/uploads/2019/07/Corolla_Negro.png",
    estado: 1,
  },
  {
    id: 3,
    idmodelo: 3,
    anio: 2020,
    placa: "P23587",
    precio_dia: 20,
    transmision: "estandar",
    pasajeros: 2,
    puertas: 2,
    ac: "si",
    motor: "260",
    vidrios_electricos: "si",
    imagen:
      "https://www.freshnessmag.com/.image/t_share/MTM3OTI3MjA3NzcyNDk3Nzcx/tesla-model-s-coupe-concept--by-theophilus-chin---0.jpg",
    estado: 2,
  },
  {
    id: 4,
    idmodelo: 4,
    anio: 2021,
    placa: "P23737",
    precio_dia: 14,
    transmision: "automatico",
    pasajeros: 4,
    puertas: 4,
    ac: "si",
    motor: "260",
    vidrios_electricos: "si",
    imagen:
      "https://www.diariomotor.com/imagenes/picscache/750x/mitsubishi-lancer-evo-x-p1_750x.jpg",
    estado: 1,
  },
];

const modelo = [
  {
    id: 1,
    nombre: "Honda Civic",
  },
  {
    id: 2,
    nombre: "Toyota Corolla",
  },
  {
    id: 1,
    nombre: "Tesla Model S",
  },
  {
    id: 1,
    nombre: "Mitsubishi Lancer EVO",
  },
];

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

const HomeView = () => {
  return (
    <>
      <ImageGallery
        showPlayButton={false}
        showFullscreenButton={false}
        lazyLoad={true}
        showThumbnails={false}
        showBullets={true}
        items={images}
      />
      <Container fluid>
        <Row>
          <Col className="justify-content-left p-5 pt-15" xs={12} md={6}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
            magna tellus. Phasellus vehicula diam id mollis interdum. Cras vel
            vehicula justo. Suspendisse eu orci vel nisl vestibulum venenatis.
            Nulla interdum nibh tortor, ac tincidunt turpis bibendum a.
            Curabitur nunc eros, mollis vitae convallis at, vestibulum at quam.
            Sed feugiat erat non tempus scelerisque. Fusce at sodales purus.
          </Col>
          <Col className="justify-content-center" xs={12} md={6}>
            <Image
              src="https://acroadtrip.blob.core.windows.net/catalogo-imagenes/m/RT_V_0c7166c16ff74073b65851f7f0b360ed.jpg"
              fluid
            />
          </Col>
        </Row>
        <Form>
          <Form.Group as={Row} className="mb-3 justify-content-evenly p-4">
            <Col className="mb-2" xs={12} md={2}>
              <Form.Control type="text" placeholder="Sucursal de Entrega" />
            </Col>
            <Col className="mb-2" xs={12} md={3}>
              <Form.Control type="date" placeholder="Fecha de Entrega" />
            </Col>
            <Col className="mb-2" xs={12} md={2}>
              <Form.Control type="text" placeholder="Sucursal de Devolución" />
            </Col>
            <Col className="mb-2" xs={12} md={3}>
              <Form.Control type="date" placeholder="Fecha de Devolución" />
            </Col>
            <Col xs={12} className="justify-content-center" md={2}>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Col>
          </Form.Group>
        </Form>
        <Row>
          {autos.map(function (item, i) {
            return (
              <Col xs={12} md={3}>
                <Card>
                  <Card.Img variant="top" src={item.imagen} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>-
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
        <Row>
          <Col xs={12} className="text-center text-uppercase fs-2 p-5">Derechos Reservados</Col>
        </Row>
      </Container>
    </>
  );
};

export default HomeView;
