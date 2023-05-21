import { Button, Card, Col, Row } from "react-bootstrap";

const ColoresCard = () => {
  return (
    <Col md={4} className="mb-3">
      <Card className="text-center w-auto contenedorColor">
        <Card.Body>
          <Card.Title className="pb-3">Nombre color</Card.Title>
          <div className="d-flex justify-content-center">
            <div className="recuadroColor"></div>
          </div>
          <hr />
          <div className="d-flex justify-content-end">
            <Button variant="danger" className="my-1 boton">
              Borrar
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ColoresCard;
