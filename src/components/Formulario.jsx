import {Button,Form} from 'react-bootstrap';
import React, { useState, useEffect } from 'react';

function Colores(){
const [color, setColor] = useState("")

const handleChange = (e) => {
    setColor(e.target.value)
}

const handleSubmit = (e) => {
    e.preventDefault()
    if(color.trim() !== ""){
        localStorage.setItem("color", color)
        setColor("")
    }
}

useEffect(() => {
    const colorStorage = localStorage.getItem("color")
    if(colorStorage){
        setColor(colorStorage)
    }
}, [])

return(
    <div>
    <h1>Administrar colores</h1>
    <Form onSubmit={handleSubmit}>
    <Form.Group>
        <Form.Control type='text' value={color} placeholder = "Ingrese un color. Por ej: Verde" onChange={handleChange}/>     
    </Form.Group>
    <Button variant = "primary" type="submit">Guardar</Button>
    </Form>
    </div>
  )

}


export default Colores;