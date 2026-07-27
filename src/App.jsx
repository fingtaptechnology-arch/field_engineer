import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Header from './components/Header'
import Footer from './components/Footer'

import amnaRoutes from './routes/amna.routes'
import umarRoutes from './routes/umar.routes'
import roshniRoutes from './routes/roshni.routes'
import './styles/main.css'
import './styles/amna.css'
import './styles/umar.css'
import './styles/roshni.css'

const allRoutes = [...amnaRoutes, ...umarRoutes, ...roshniRoutes]

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <main style={{ flex: 1 }}>
          <Routes>
            {allRoutes.map((route) => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
            <Route path="*" element={<Navigate to="/contact" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
