import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
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

// Routes that render their own full-screen app shell (sidebar/topbar)
// and should not be wrapped by the marketing site Header/Footer.
const APP_SHELL_PATHS = ['/manage-users']

function AppLayout() {
  const location = useLocation()
  const isAppShellPage = APP_SHELL_PATHS.includes(location.pathname)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {!isAppShellPage && <Header />}
      <main style={{ flex: 1 }}>
        <Routes>
          {allRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
          <Route path="*" element={<Navigate to="/contact" replace />} />
        </Routes>
      </main>
      {!isAppShellPage && <Footer />}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;
