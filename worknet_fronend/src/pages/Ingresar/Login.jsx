import React from 'react';

export default function LoginForm({ 
  email, 
  setEmail, 
  password, 
  setPassword, 
  onSubmit, 
  onSwitchToRegister 
}) {
  return (
    <div className="w-full max-w-md bg-white border border-slate-200/100 rounded-2xl p-8 shadow-[0_4px_25px_rgba(0,0,0,0.04)] animate-fadeIn">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-[#0f172a]">
          ¡Bienvenido de nuevo!
        </h2>
        <p className="text-sm text-slate-600 mt-2">
          Ingresa tus credenciales para acceder a <span className="text-[#0f172a] font-bold">WORK</span><span className="text-[#22C55E] font-bold">NET</span>
        </p>
      </div>

      <form onSubmit={onSubmit} className="space-y-6">
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
            onClick={onSwitchToRegister}
            className="text-[#1677FF] hover:underline font-bold focus:outline-none"
          >
            Regístrate aquí
          </button>
        </p>
      </div>
    </div>
  );
}