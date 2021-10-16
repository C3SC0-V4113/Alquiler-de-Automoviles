import React from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Form,
  Button,
  Card,
  Collapse,
  Carousel,
  CarouselItem,
} from "react-bootstrap";
import ImageGallery from "react-image-gallery";
import AutosJSON from "../../../assets/json/autos.json";
import ModelosJSON from "../../../assets/json/modelos.json";

const autos = AutosJSON;

const modelo = ModelosJSON;

const Objeto = () => {
  autos.map((u, i) => {
    modelo.map((m, j) => {
      if (u.idmodelo === m.id) {
        u.idmodelo = m;
      }
    });
  });
};

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
  Objeto(); /* <ImageGallery
        showPlayButton={false}
        showFullscreenButton={false}
        lazyLoad={true}
        showThumbnails={false}
        showBullets={true}
        items={images}
      />*/
  return (
    <>
      <Container style={{backgroundColor: '#F7B569'}} fluid>
        <Row style={{ backgroundColor: "#1E2430", color: "#f9f9f9" }}>
        <Carousel
          fade
          nextLabel=""
          prevLabel=""
        >
          <CarouselItem>
            <img
              className="d-block w-100"
              src="https://picsum.photos/id/1018/1000/600/"
              alt="Primera"
            />
          </CarouselItem>
          <CarouselItem>
            <img
              className="d-block w-100"
              src="https://picsum.photos/id/1015/1000/600/"
              alt="Segunda"
            />
          </CarouselItem>
          <CarouselItem>
            <img
              className="d-block w-100"
              src="https://picsum.photos/id/1019/1000/600/"
              alt="Tercera"
            />
          </CarouselItem>
        </Carousel>
        </Row>
        <Row
          className="align-items-center"
          style={{ backgroundColor: "#1E2430", color: "#f9f9f9" }}
        >
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
              src="https://es.nissanusa.com/content/dam/Nissan/us/vehicles/sentra/2021/overview/2021-nissan-sentra-orange-against-white-background.png"
              fluid
            />
          </Col>
        </Row>
        <Form>
          <Form.Group style={{backgroundColor: '#F7B569'}} as={Row} className="mb-3 justify-content-evenly p-4">
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
              <Button style={{ backgroundColor: "#1E2430", color: "#f9f9f9", borderColor:'#202633'}} variant="primary" type="submit">
                Buscar
              </Button>
            </Col>
          </Form.Group>
        </Form>
        <Row style={{backgroundColor: '#F7B569'}}>
          {autos.map(function (item, i) {
            return (
              <Col key={i} xs={12} md={3}>
                <Card>
                  <Card.Img variant="top" src={item.imagen} />
                  <Card.Body>
                    <Card.Title>{item.idmodelo.nombre}</Card.Title>
                    <Card.Text>Año: {item.anio}</Card.Text>
                    <Card.Text>Caja: {item.transmision}</Card.Text>
                    <Card.Text>Puertas: {item.puertas}</Card.Text>
                    <Card.Text>Pasajeros: {item.pasajeros}</Card.Text>
                    <Button style={{ backgroundColor: "#1E2430", color: "#f9f9f9", borderColor:'#202633'}} variant="primary">Ver Auto</Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
        <Row className="mt-5" style={{ backgroundColor: "#1E2430", color: "#f9f9f9" }}>
          <Col xs={12} className="text-center text-uppercase fs-2 p-5">
            Derechos Reservados
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomeView;
