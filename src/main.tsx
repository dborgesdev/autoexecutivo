import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App'
import './styles/fonts.css'
import './styles/tokens.css'
import './styles/global.css'
import './styles/landing.css'

const root = document.getElementById('root')

if (!root) throw new Error('Elemento raiz da aplicação não encontrado.')

const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)
