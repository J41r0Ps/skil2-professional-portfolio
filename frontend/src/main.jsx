/**
 * Application entry point: mounts <App /> and loads global CSS and the
 * i18next configuration (side-effect import) before first render.
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './i18n';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
