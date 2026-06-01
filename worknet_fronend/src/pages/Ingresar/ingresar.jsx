import React, { useState } from 'react';
import axios from 'axios';

export default function Ingresar() {
  // Estado para saber si muestra 'login' o 'registro'
  const [vista, setVista] = useState('ingresar');

  // Estados para el Login
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Estados para el Registro (Unificado y limpio)
  const [registroData, setRegistroData] = useState({
    usuario: '',
    clave: '',
    nombre: '',
    apellido: '',
    telefono: '',
    correo_electronico: '',
    direccion: '',
    ciudad: '',
    fecha_nacimiento: ''
  });

  // Estado para manejar las alertas visuales (Éxito o Error)
  const [mensaje, setMensaje] = useState({ texto: '', tipo: '' });

  // Manejador del cambio de inputs en registro
  const handleRegistroChange = (e) => {
    setRegistroData({
      ...registroData,
      [e.target.name]: e.target.value
    });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Iniciando sesión con:', { email, password });
  };

  const handleRegistroSubmit = async (e) => {
    e.preventDefault();
    setMensaje({ texto: '', tipo: '' }); // Limpiar mensajes previos

    try {
      // Petición POST al puerto 8000 donde corre tu API de Laravel
      const response = await axios.post('http://127.0.0.1:8000/api/usuarios', registroData);

      // Si todo sale bien
      setMensaje({ texto: response.data.mensaje, tipo: 'exito' });

      // Limpiar el formulario tras registrar con éxito
      setRegistroData({
        usuario: '', clave: '', nombre: '', apellido: '',
        telefono: '', correo_electronico: '', direccion: '', ciudad: '', fecha_nacimiento: ''
      });

    } catch (error) {
      console.error(error);

      // Capturar el error estructurado de validación de Laravel
      let errorServer = 'Error en el servidor al registrar';

      if (error.response?.data?.errors) {
        // Si Laravel dice que el usuario o correo ya existen, tomamos ese mensaje
        const primerosErrores = Object.values(error.response.data.errors);
        if (primerosErrores.length > 0) {
          errorServer = primerosErrores[0][0];
        }
      } else if (error.response?.data?.message) {
        errorServer = error.response.data.message;
      }

      setMensaje({ texto: errorServer, tipo: 'error' });
    }
  };

  return (

    <div className="flex flex-1 items-center justify-center bg-slate-50 px-4 py-12 sm:px-6 lg:px-8 min-h-screen transition-all duration-300">

      {/* VISTA 1: INICIAR SESIÓN */}
      {vista === 'ingresar' && (
        <div className="w-full max-w-md bg-white border border-slate-200/100 rounded-2xl p-8 shadow-[0_4px_25px_rgba(0,0,0,0.04)] animate-fadeIn">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#0f172a]">
              ¡Bienvenido de nuevo!
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Ingresa tus credenciales para acceder a <span className="text-[#0f172a] font-bold">WORK</span><span className="text-[#22C55E] font-bold">NET</span>
            </p>
          </div>

          <form onSubmit={handleLoginSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                Correo Electrónico
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="nombre@empresa.com"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1677FF] focus:border-transparent transition-all"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="password" className="text-sm font-medium text-slate-700">
                  Contraseña
                </label>
                <a href="#" className="text-xs text-[#1677FF] hover:underline font-medium">
                  ¿La olvidaste?
                </a>
              </div>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1677FF] focus:border-transparent transition-all"
              />
            </div>

            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                className="h-4 w-4 bg-white border-slate-300 rounded text-[#1677FF] focus:ring-[#1677FF]/20"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-600 select-none">
                Recordar mi sesión
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-[#1677FF] hover:bg-[#0b5ed7] text-white font-bold rounded-xl shadow-lg shadow-blue-600/10 transition-all"
            >
              Iniciar Sesión
            </button>
          </form>

          <div className="text-center mt-6">
            <p className="text-sm text-slate-600">
              ¿No tienes una cuenta?{' '}
              <button
                onClick={() => setVista('registro')}
                className="text-[#1677FF] hover:underline font-bold focus:outline-none"
              >
                Regístrate aquí
              </button>
            </p>
          </div>
        </div>
      )}

      {/* VISTA 2: FORMULARIO DE REGISTRO */}
      {vista === 'registro' && (
        <div className="w-full max-w-2xl bg-white border border-slate-200/60 rounded-2xl p-8 shadow-[0_4px_25px_rgba(0,0,0,0.04)] animate-fadeIn">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#0f172a]">
              Crear cuenta en <span className="text-[#0f172a]">WORK</span><span className="text-[#22C55E]">NET</span>
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Completa el formulario para registrarte en nuestra plataforma institucional.
            </p>
          </div>

          {/* Alerta de Mensajes dinámicos */}
          {mensaje.texto && (
            <div className={`p-4 mb-4 text-sm rounded-xl font-medium text-center border ${mensaje.tipo === 'exito'
                ? 'bg-green-50 text-green-600 border-green-200'
                : 'bg-red-50 text-red-600 border-red-200'
              }`}>
              {mensaje.texto}
            </div>
          )}

          <form onSubmit={handleRegistroSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              {/* Usuario */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Usuario</label>
                <input
                  type="text"
                  name="usuario"
                  required
                  value={registroData.usuario}
                  onChange={handleRegistroChange}
                  placeholder="ej. juanito99"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1677FF]"
                />
              </div>

              {/* Clave */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Contraseña (Clave)</label>
                <input
                  type="password"
                  name="clave"
                  required
                  value={registroData.clave}
                  onChange={handleRegistroChange}
                  placeholder="••••••••"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1677FF]"
                />
              </div>

              {/* Nombre */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Nombres</label>
                <input
                  type="text"
                  name="nombre"
                  required
                  value={registroData.nombre}
                  onChange={handleRegistroChange}
                  placeholder="Tu nombre"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1677FF]"
                />
              </div>

              {/* Apellido */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Apellidos</label>
                <input
                  type="text"
                  name="apellido"
                  required
                  value={registroData.apellido}
                  onChange={handleRegistroChange}
                  placeholder="Tu apellido"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1677FF]"
                />
              </div>

              {/* Correo Electrónico */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-1">Correo Electrónico</label>
                <input
                  type="email"
                  name="correo_electronico"
                  required
                  value={registroData.correo_electronico}
                  onChange={handleRegistroChange}
                  placeholder="correo@ejemplo.com"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1677FF]"
                />
              </div>

              {/* Teléfono */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Teléfono</label>
                <input
                  type="tel"
                  name="telefono"
                  required
                  value={registroData.telefono}
                  onChange={handleRegistroChange}
                  placeholder="300 123 4567"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1677FF]"
                />
              </div>

              {/* Fecha de Nacimiento */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Fecha de Nacimiento</label>
                <input
                  type="date"
                  name="fecha_nacimiento"
                  required
                  value={registroData.fecha_nacimiento}
                  onChange={handleRegistroChange}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1677FF]"
                />
              </div>

              {/* Dirección */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Dirección</label>
                <input
                  type="text"
                  name="direccion"
                  required
                  value={registroData.direccion}
                  onChange={handleRegistroChange}
                  placeholder="Calle 12 # 34-56"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1677FF]"
                />
              </div>

              {/* Ciudad */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Ciudad</label>
                <input
                  type="text"
                  name="ciudad"
                  required
                  value={registroData.ciudad}
                  onChange={handleRegistroChange}
                  placeholder="Ej. Bogotá"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1677FF]"
                />
              </div>

            </div>

            {/* Botón Registrar */}
            <button
              type="submit"
              className="w-full mt-2 py-3 px-4 bg-[#22C55E] hover:bg-[#19a14b] text-white font-bold rounded-xl shadow-lg shadow-green-600/10 transition-all"
            >
              Registrarse Ahora
            </button>
          </form>

          {/* Regresar al Login */}
          <div className="text-center mt-6">
            <p className="text-sm text-slate-600">
              ¿Ya tienes una cuenta?{' '}
              <button
                onClick={() => setVista('ingresar')}
                className="text-[#1677FF] hover:underline font-bold focus:outline-none"
              >
                Inicia sesión aquí
              </button>
            </p>
          </div>
        </div>
      )}

    </div>
  );
}