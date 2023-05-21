import {Container} from 'react-bootstrap'
import './App.css'
import Colores from "./Formulario"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <>
    <Container className='my-5 mainPage'>
    <Colores/>
    </Container>
    <footer className='bg-dark text-center text-secondary py-4'>
      <p>&copy; Todos los derechos reservados</p>
    </footer>
    </>
  )
}

export default App
