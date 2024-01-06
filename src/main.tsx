import { createRoot } from 'react-dom/client'
import './index.css'
import { StrictMode } from 'react'
import AppRouter from "./Router/index";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <AppRouter />
  </StrictMode>,
)
