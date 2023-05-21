import { Button, Form, Container } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';

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
    <Container className='border my-5 p-5 shadow row justify-content-center justify-content-md-between'>
      <p>Administrar colores</p>
      <Form onSubmit={handleSubmit}>
        <Container className='bg-info p-4 d-flex align-items-center'>
          <img src="" alt="Color elegido" className="me-2" />
          <Form.Group className="mb-0">
            <Form.Control
              type="text"
              value={color}
              placeholder="Ingrese un color"
              onChange={handleChange}
            />
          </Form.Group>
        </Container>
        <div className="d-flex justify-content-end">
        <Button variant="primary" type="submit" className='mt-3'>
          Guardar
        </Button>
        </div>
      </Form>
    </Container>
  );
}

export default Colores;