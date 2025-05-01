/**
 * node modules
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

/**
 * components and css link
 */
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
