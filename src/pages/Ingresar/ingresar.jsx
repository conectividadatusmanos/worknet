    import React, { useState } from 'react';

export default function Ingresar() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí manejarás la lógica de autenticación más adelante
    console.log('Iniciando sesión con:', { email, password });
  };

  return (
    <div className="flex flex-1 items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-slate-800 border border-slate-700/50 rounded-2xl p-8 shadow-xl">
        
        {/* Encabezado de la tarjeta */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-white">
            ¡Bienvenido de nuevo!
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Ingresa tus credenciales para acceder a Worknet
          </p>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Input de Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
              Correo Electrónico
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="nombre@empresa.com"
              className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>

          {/* Input de Contraseña */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="password" className="text-sm font-medium text-slate-300">
                Contraseña
              </label>
              <a href="#" className="text-xs text-blue-400 hover:underline">
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
              className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>

          {/* Recordarme */}
          <div className="flex items-center">
            <input
              id="remember-me"
              type="checkbox"
              className="h-4 w-4 bg-slate-900 border-slate-700 rounded text-blue-500 focus:ring-blue-500/20 text-slate-900"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-400 select-none">
              Recordar mi sesión
            </label>
          </div>

          {/* Botón de Enviar */}
          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-600/20 transition-all duration-200 transform active:scale-[0.98]"
          >
            Iniciar Sesión
          </button>
        </form>

        {/* Registro */}
        <div className="text-center mt-6">
          <p className="text-sm text-slate-400">
            ¿No tienes una cuenta?{' '}
            <a href="#" className="text-blue-400 hover:underline font-medium">
              Regístrate aquí
            </a>
          </p>
        </div>

      </div>
    </div>
  );
}