import React from 'react';

export default function RegisterForm({ 
  registroData, 
  onChange, 
  onSubmit, 
  mensaje, 
  onSwitchToLogin 
}) {
  // Lista temporal de profesiones basadas en tu tabla 'profesiones'.
  // Más adelante podemos hacer que esto se cargue dinámicamente desde el backend.
  const profesionesMock = [
    { id: 1, nombre: 'Ingeniero de Sistemas' },
    { id: 2, nombre: 'Desarrollador Web' },
    { id: 3, nombre: 'Diseñador UI/UX' },
    { id: 4, nombre: 'Administrador de Empresas' },
  ];

  return (
    <div className="w-full max-w-2xl bg-white border border-slate-200/60 rounded-2xl p-8 shadow-[0_4px_25px_rgba(0,0,0,0.04)] animate-fadeIn">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-[#0f172a]">
          Crear cuenta en <span className="text-[#0f172a]">WORK</span><span className="text-[#22C55E]">NET</span>
        </h2>
        <p className="text-sm text-slate-600 mt-2">
          Completa el formulario para registrar tu perfil de candidato en la plataforma.
        </p>
      </div>

      {mensaje.texto && (
        <div className={`p-4 mb-4 text-sm rounded-xl font-medium text-center border ${
          mensaje.tipo === 'exito'
            ? 'bg-green-50 text-green-600 border-green-200'
            : 'bg-red-50 text-red-600 border-red-200'
        }`}>
          {mensaje.texto}
        </div>
      )}

      <form onSubmit={onSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          {/* --- CAMPOS TABLA: usuarios --- */}
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-slate-700 mb-1">Correo Electrónico</label>
            <input
              type="email"
              name="correo"
              required
              value={registroData.correo || ''}
              onChange={onChange}
              placeholder="ejemplo@correo.com"
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1677FF]"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-slate-700 mb-1">Contraseña</label>
            <input
              type="password"
              name="contrasena"
              required
              value={registroData.contrasena || ''}
              onChange={onChange}
              placeholder="••••••••"
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1677FF]"
            />
          </div>

          {/* --- CAMPOS TABLA: perfiles_candidatos --- */}
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-slate-700 mb-1">Nombres Completos</label>
            <input
              type="text"
              name="nombres_completos"
              required
              value={registroData.nombres_completos || ''}
              onChange={onChange}
              placeholder="Nombres y Apellidos completos"
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1677FF]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Edad</label>
            <input
              type="number"
              name="edad"
              required
              min="18"
              max="100"
              value={registroData.edad || ''}
              onChange={onChange}
              placeholder="Ej. 25"
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1677FF]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Teléfono</label>
            <input
              type="tel"
              name="telefono"
              required
              value={registroData.telefono || ''}
              onChange={onChange}
              placeholder="Ej. 3001234567"
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1677FF]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Dirección</label>
            <input
              type="text"
              name="direccion"
              required
              value={registroData.direccion || ''}
              onChange={onChange}
              placeholder="Calle, Avenida o Carrera"
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1677FF]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Ciudad</label>
            <input
              type="text"
              name="ciudad"
              required
              value={registroData.ciudad || ''}
              onChange={onChange}
              placeholder="Ej. Bogotá D.C."
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1677FF]"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-slate-700 mb-1">Profesión</label>
            <select
              name="profesion_id"
              required
              value={registroData.profesion_id || ''}
              onChange={onChange}
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1677FF]"
            >
              <option value="">Selecciona tu profesión...</option>
              {profesionesMock.map((prof) => (
                <option key={prof.id} value={prof.id}>
                  {prof.nombre}
                </option>
              ))}
            </select>
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-slate-700 mb-1">Descripción de Experiencia</label>
            <textarea
              name="descripcion_experiencia"
              rows="3"
              value={registroData.descripcion_experiencia || ''}
              onChange={onChange}
              placeholder="Resume brevemente tu experiencia laboral previa..."
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1677FF] resize-none"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full mt-2 py-3 px-4 bg-[#22C55E] hover:bg-[#19a14b] text-white font-bold rounded-xl shadow-lg shadow-green-600/10 transition-all"
        >
          Registrarse Ahora
        </button>
      </form>

      <div className="text-center mt-6">
        <p className="text-sm text-slate-600">
          ¿Ya tienes una cuenta?{' '}
          <button
            onClick={onSwitchToLogin}
            className="text-[#1677FF] hover:underline font-bold focus:outline-none"
          >
            Inicia sesión aquí
          </button>
        </p>
      </div>
    </div>
  );
}