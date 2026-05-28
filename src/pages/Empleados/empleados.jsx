import React from 'react';

export default function Empleados() {
  // Lista de datos ficticios de candidatos/empleados
  const listaEmpleados = [
    {
      id: 1,
      nombre: "Carlos Mendoza",
      puesto: "Desarrollador Frontend",
      tecnologia: "React • Tailwind",
      foto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=256&h=256&q=80",
    },
    {
      id: 2,
      nombre: "Ana María Silva",
      puesto: "Diseñadora UX/UI",
      tecnologia: "Figma • Adobe XD",
      foto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=256&h=256&q=80",
    },
    {
      id: 3,
      nombre: "Alejandro Ríos",
      puesto: "Backend Developer",
      tecnologia: "Node.js • Express",
      foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&h=256&q=80",
    },
    {
      id: 4,
      nombre: "Sofía Castro",
      puesto: "Data Analyst",
      tecnologia: "Python • SQL",
      foto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&h=256&q=80",
    },
    {
      id: 5,
      nombre: "David Pertuz",
      puesto: "DevOps Engineer",
      tecnologia: "Docker • AWS",
      foto: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=256&h=256&q=80",
    },
    {
      id: 6,
      nombre: "Elena Rostova",
      puesto: "Product Manager",
      tecnologia: "Scrum • Agile",
      foto: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=256&h=256&q=80",
    },
    {
      id: 7,
      nombre: "Javier Ortega",
      puesto: "Mobile Developer",
      tecnologia: "Flutter • Dart",
      foto: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=256&h=256&q=80",
    },
    {
      id: 8,
      nombre: "Laura Benítez",
      puesto: "QA Engineer",
      tecnologia: "Selenium • Jest",
      foto: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=256&h=256&q=80",
    }
  ];

  return (
    // CAMBIO: Aquí pusimos bg-slate-50 igual que tu inicio
    <div className="flex-grow bg-slate-50 py-12 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Encabezado de la página (Adaptado a textos oscuros para que se lea bien) */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold tracking-tight text-[#0D3A6A] sm:text-5xl">
            Talento Disponible en <span className="text-[#22C55E]">WORK</span><span className="text-[#1677FF]">NET</span>
          </h2>
          <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
            Explora los perfiles de los profesionales mejor calificados listos para integrarse a tu equipo de trabajo.
          </p>
        </div>

        {/* CONTENEDOR EN REJILLA (Manteniendo tus 4 columnas originales) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          
          {listaEmpleados.map((empleado) => (
            <div 
              key={empleado.id} 
              // Mantenemos tus tarjetas oscuras traslúcidas que contrastan genial con el fondo clarito
              className="bg-slate-850 bg-slate-800/90 border border-slate-700/50 rounded-2xl p-6 text-center shadow-lg transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-[0_10px_25px_rgba(22,119,255,0.15)] group"
            >
              {/* Tu contenedor de la foto original con borde gradiente */}
              <div className="relative w-28 h-28 mx-auto mb-4 rounded-full p-1 bg-gradient-to-tr from-slate-700 to-slate-600 group-hover:from-[#1677FF] group-hover:to-[#22C55E] transition-all duration-300">
                <img
                  src={empleado.foto}
                  alt={empleado.nombre}
                  className="w-full h-full object-cover rounded-full bg-slate-700"
                />
              </div>

              {/* Nombre del Candidato */}
              <h3 className="text-xl font-bold text-white tracking-wide group-hover:text-[#1677FF] transition-colors">
                {empleado.nombre}
              </h3>

              {/* Puesto / Rol */}
              <p className="text-sm font-semibold text-slate-300 mt-1">
                {empleado.puesto}
              </p>

              {/* Tecnologías / Badges */}
              <p className="text-xs font-medium text-slate-400 mt-2 inline-block px-3 py-1 bg-slate-900 rounded-full border border-slate-700/30">
                {empleado.tecnologia}
              </p>

              {/* Tu botón original gris que pasa a azul */}
              <div className="mt-5">
                <button className="w-full bg-slate-700 hover:bg-[#1677FF] text-white font-bold text-sm py-2.5 px-4 rounded-xl transition-all duration-300 shadow-md">
                  Ver Perfil
                </button>
              </div>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
}