import { useState } from 'react';
import { Link } from 'react-router-dom'; // <-- IMPORTANTE: Importamos Link
import logoCompany from '../../assets/logo.png'; 

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    /*esta es la parte blanca del header y los diferentes estilos solo para el header*/
    <header className="bg-white px-6 py-3 border-b border-slate-200/80 shadow-[0_4px_20px_rgba(13,27,61,0.05)] sticky top-0 z-50">
      
      {/* Línea decorativa superior sutil con tus colores corporativos */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#1677FF] via-[#22C55E] to-[#1677FF] bg-[length:200%_auto] animate-[moverGradient_3s_ease_infinite]"></div>

      {/* esto acomoda el logo y los titulos del menu*/}
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* LOGO CORPORATIVO (Nos lleva al inicio si hacen clic) */}
        <Link to="/" className="flex items-center space-x-3 cursor-pointer select-none">
          <img 
            src={logoCompany} 
            alt="Isotipo Worknet" 
            className="h-11 w-auto object-contain" 
          />
          <span className="text-2xl font-black tracking-wider text-[#0D1B3D] font-sans">
            WORK<span className="text-[#22C55E]">NET</span>
          </span>
        </Link>

        {/* MENÚ DE ESCRITORIO (PC - Conectado con las rutas) */}
        <nav className="hidden md:flex space-x-8 items-center font-bold text-sm tracking-wide">
          <Link to="/" className="text-slate-600 hover:text-[#1677FF] transition-all duration-300 relative py-2 group">
            Inicio
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#1677FF] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/empleados" className="text-slate-600 hover:text-[#1677FF] transition-all duration-300 relative py-2 group">
            Empleados
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#1677FF] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/empresas" className="text-slate-600 hover:text-[#1677FF] transition-all duration-300 relative py-2 group">
            Empresas
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#1677FF] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          
          {/* Añadí contacto aquí por si decides usarlo, si no, puedes borrar este bloque */}
          <Link to="/contactos" className="text-slate-600 hover:text-[#1677FF] transition-all duration-300 relative py-2 group">
            Contactos
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#1677FF] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          
          <span className="h-5 w-[1px] bg-slate-200"></span>
          
          <Link to="/Ingresar" className="text-slate-600 hover:text-[#0D1B3D] transition-colors duration-300 px-3 py-2">
            Ingresar
          </Link>
          
          {/* Botón premium */}
          <Link to="/publicar" className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-bold text-white rounded-xl group bg-gradient-to-br from-[#1677FF] to-[#22C55E] hover:shadow-[0_4px_15px_rgba(22,119,255,0.3)] transition-all duration-300 transform hover:-translate-y-0.5">
            <span className="relative px-5 py-2.5 transition-all duration-200 bg-[#1677FF] rounded-[10px] group-hover:bg-opacity-0 font-bold">
              Publicar Vacante
            </span>
          </Link>
        </nav>

        {/* BOTÓN HAMBURGUESA (Móvil) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-600 hover:text-[#0D1B3D] focus:outline-none p-2 rounded-xl hover:bg-slate-50 transition-all"
        >
          {isOpen ? (
            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* MENÚ DESPLEGABLE MÓVIL */}
      {isOpen && (
        <nav className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-slate-200 p-6 flex flex-col space-y-4 shadow-xl z-50">
          <Link to="/" onClick={() => setIsOpen(false)} className="text-slate-600 hover:text-[#1677FF] text-lg font-semibold py-2 border-b border-slate-100 transition-colors">
            Inicio
          </Link>
          <Link to="/empleos" onClick={() => setIsOpen(false)} className="text-slate-600 hover:text-[#1677FF] text-lg font-semibold py-2 border-b border-slate-100 transition-colors">
            Empleos
          </Link>
          <Link to="/empresas" onClick={() => setIsOpen(false)} className="text-slate-600 hover:text-[#1677FF] text-lg font-semibold py-2 border-b border-slate-100 transition-colors">
            Empresas
          </Link>
          <Link to="/contactos" onClick={() => setIsOpen(false)} className="text-slate-600 hover:text-[#1677FF] text-lg font-semibold py-2 border-b border-slate-100 transition-colors">
            Contactos
          </Link>
          <Link to="/ingresar" onClick={() => setIsOpen(false)} className="text-slate-600 hover:text-[#0D1B3D] text-lg font-semibold py-2 transition-colors">
            Ingresar
          </Link>
          <Link to="/publicar" onClick={() => setIsOpen(false)} className="bg-[#1677FF] hover:bg-[#115dd3] text-white px-4 py-3 rounded-xl font-bold text-center shadow-md transition-all">
            Publicar Vacante
          </Link>
        </nav>
      )}

    </header>
  );
}