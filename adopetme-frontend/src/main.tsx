// matheus-de-andrade-lourenco/prototipo_adopet/Prototipo_Adopet-83121f52595e1e8153395d49fca8b2dc2b85a109/adopetme-frontend/src/main.tsx (MODIFICADO)

// main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { SessionProvider } from './context/SessionContext';
import './index.css';
// 👈 ALTERADO: Importar HashRouter em vez de BrowserRouter
import { HashRouter } from 'react-router-dom'; 

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <SessionProvider>
        <App />
      </SessionProvider>
    </HashRouter>
  </React.StrictMode>,
);