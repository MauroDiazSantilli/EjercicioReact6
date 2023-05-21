import { Button, Form, Container, Row } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import ColoresCard from './Cards';

function Colores() {
  const [color, setColor] = useState('');

  const handleChange = (e) => {
    setColor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (color.trim() !== '') {
      localStorage.setItem('color', color);
      setColor('');
    }
  };

  useEffect(() => {
    const colorStorage = localStorage.getItem('color');
    if (colorStorage) {
      setColor(colorStorage);
    }
  }, []);

  return (
    <Container className="row justify-content-center justify-content-md-between">
      <Container className="my-5 p-0 contenedorColor">
        <p className="fs-5 fw-bold pt-4 text-center">Administrar colores</p>
        <Form className="my-5" onSubmit={handleSubmit}>
  <Form.Group className="p-4 d-flex align-items-center bg-info">
    <div className="recuadroColor"></div>
    <Form.Control
      type="text"
      placeholder="Ingrese un color. Ej: Verde "
      className="w-100 ms-3"
      value={color}
      onChange={handleChange}
    />
  </Form.Group>
  <div className="d-flex justify-content-end">
    <Button variant="primary" type="submit" className="mx-4 my-3 boton">
      Enviar
    </Button>
  </div>
</Form>
      </Container>
      <Row>
      <ColoresCard/>
      <ColoresCard/>
      <ColoresCard/>
      <ColoresCard/>
      <ColoresCard/>
      <ColoresCard/>
      <ColoresCard/>
      <ColoresCard/>
      <ColoresCard/>
      </Row>
    </Container>
  );
}

export default Colores;