import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Container } from './containers/formulario/styles.js'
import { Container } from './containers/graficos/styles.js'
import { Container } from './containers/atribuição/styles.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
