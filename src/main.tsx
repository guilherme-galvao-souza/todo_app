import React from 'react' //nucleo do react
import ReactDOM from 'react-dom/client' //tipo de dispositivo
import { App } from './App.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
