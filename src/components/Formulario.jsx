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
    <Container className='border my-5 p-5 shadow'>
      <p>Administrar colores</p>
      <Form onSubmit={handleSubmit}>
        <Container className='bg-info p-4 d-flex align-items-center shadow-sm'>
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
        <Button variant="primary" type="submit" className='mt-3 shadow-sm'>
          Guardar
        </Button>
      </Form>
    </Container>
  );
}

export default Colores;