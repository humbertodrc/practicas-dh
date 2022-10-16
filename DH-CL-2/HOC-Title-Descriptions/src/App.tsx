import './App.css'
import { Section } from './components/Section'

function App() {

  // Imagina que tienes tu web personal llena de secciones con títulos y descripciones, y has creado una animación por medio de CSS para que únicamente las secciones que tu quieras cambien de colores 

  return (
    <div className="App">
      <Section title='Higher Order Component' description='Conociendo los HOC' />
    </div>
  )
}

export default App
