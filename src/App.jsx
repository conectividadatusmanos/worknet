import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import MainContent from './components/MainContent/MainContent'; // Actúa como tu Inicio
import Footer from './components/Footer/Footer';
import Contactos from './pages/Contactos/contactos'; // Tu nueva página
import Empleados from './pages/Empleados/empleados'; // Tu nueva página
import Ingresar from './pages/Ingresar/ingresar'; // Tu nueva página

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-900 text-white flex flex-col justify-between font-sans">
        
        {/* El Header se mantiene visible siempre */}
        <Header />

        {/* Las rutas deciden qué se renderiza en el centro */}
        <Routes>
          
          {/* Cuando la URL sea "/" (el inicio), muestra MainContent */}
          <Route path="/" element={<MainContent />} />

           {/* Cuando la URL sea "/empleados", muestra la nueva página */}
          <Route path="/empleados" element={<Empleados />} />
                        
          {/* Cuando la URL sea "/contacto", muestra la nueva página */}
          <Route path="/contactos" element={<Contactos />} />

          {/* Cuando la URL sea "/contacto", muestra la nueva página */}
          <Route path="/ingresar" element={<Ingresar />} />

        </Routes>

        {/* El Footer se mantiene visible siempre */}
        <Footer />

      </div>
    </Router>
  );
}