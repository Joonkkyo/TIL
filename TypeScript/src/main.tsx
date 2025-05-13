// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  // div id가 root인 요소를 찾아서 렌더링
  <>
    <App />
  </>
)
