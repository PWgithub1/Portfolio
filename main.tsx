import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Nav.tsx'
import Content from './content.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Content />
  </StrictMode>,
)
