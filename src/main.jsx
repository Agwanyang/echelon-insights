import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

if (
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches &&
  'IntersectionObserver' in window
) {
  document.documentElement.classList.add('js')
}

hydrateRoot(document.getElementById('root'),
  <StrictMode>
    <App />
  </StrictMode>
)
