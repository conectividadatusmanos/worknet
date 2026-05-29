import React from 'react';

export default function MainContent() {
  // Lista de servicios extraída exactamente del folleto
  const servicios = [
    {
      titulo: 'PERSONAL DE ASEO',
      descripcion: 'Personal capacitado para mantener sus espacios limpios, ordenados y presentables.',
      imagen: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=400&q=80'
    },
    {
      titulo: 'JARDINERÍA',
      descripcion: 'Cuidado y mantenimiento de zonas verdes, poda, siembra y embellecimiento de espacios.',
      imagen: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=400&q=80'
    },
    {
      titulo: 'TODEROS',
      descripcion: 'Manejo y mantenimiento de césped, prados y zonas verdes de gran extensión.',
      imagen: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=400&q=80'
    },
    {
      titulo: 'MANTENIMIENTO LOCATIVO',
      descripcion: 'Soluciones generales de mantenimiento para sus instalaciones e infraestructura.',
      imagen: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=400&q=80' // Cambiar por ruta de foto real
    },
    {
      titulo: 'OBRAS CIVILES MENORES',
      descripcion: 'Construcción, adecuación y reparación de espacios con calidad y responsabilidad.',
      imagen: 'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=400&q=80'
    },
    {
      titulo: 'IMPERMEABILIZACIÓN DE FACHADAS',
      descripcion: 'Protección y tratamiento de fachadas para evitar filtraciones y deterioro.',
      imagen: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=400&q=80'
    },
    {
      titulo: 'IMPERMEABILIZACIÓN DE CUBIERTAS',
      descripcion: 'Aplicación de sistemas impermeables que garantizan durabilidad y seguridad.',
      imagen: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=400&q=80'
    },
    {
      titulo: 'ARREGLO DE CUBIERTAS',
      descripcion: 'Reparación y mantenimiento de cubiertas para evitar filtraciones y daños estructurales.',
      imagen: 'https://images.unsplash.com/photo-1632759162403-0a447320b7a6?auto=format&fit=crop&w=400&q=80'
    },
    {
      titulo: 'MAMPOSTEROS',
      descripcion: 'Personal experto en mampostería para construcción y reparaciones.',
      imagen: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=400&q=80'
    },
    {
      titulo: 'MAESTROS DE OBRA',
      descripcion: 'Dirección y supervisión de obras con experiencia, compromiso y eficiencia.',
      imagen: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=400&q=80'
    },
    {
      titulo: 'PINTORES',
      descripcion: 'Acabados profesionales en pintura para interiores, exteriores y todo tipo de superficies.',
      imagen: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=400&q=80'
    }
  ];

  return (
    <main className="bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* Contenedor Principal Limitado */}
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* SECCIÓN 1: INTRODUCCIÓN / SOLUCIONES INTEGRALES */}
        <section className="text-center max-w-4xl mx-auto space-y-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#0D3A6A] tracking-tight">
            SOLUCIONES INTEGRALES PARA <span className="text-[#1A7F37]">CADA NECESIDAD</span>
          </h1>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed">
            Ofrecemos servicios con personal calificado, equipos adecuados y compromiso en cada detalle, 
            para empresas, instituciones, conjuntos residenciales y clientes particulares.
          </p>
          
          {/* Tarjeta de Compromiso Sutil */}
          <div className="inline-flex items-center gap-3 bg-[#0D3A6A] text-white px-6 py-3 rounded-xl shadow-md mt-4 max-w-xl text-left border-l-4 border-[#1A7F37]">
            <span className="text-2xl">⚡</span>
            <p className="text-sm font-medium">
              Comprometidos con la <span className="text-emerald-400 font-bold">calidad</span>, la <span className="text-emerald-400 font-bold">seguridad</span> y la <span className="text-emerald-400 font-bold">responsabilidad</span> en cada servicio que prestamos.
            </p>
          </div>
        </section>

        {/* SECCIÓN 2: NUESTROS SERVICIOS (GRID DINÁMICO) */}
        <section className="space-y-8">
          <div className="flex items-center justify-center gap-4">
            <div className="h-[2px] bg-slate-300 w-16 md:w-32"></div>
            <h2 className="text-2xl font-bold text-[#0D3A6A] tracking-wider text-center">NUESTROS SERVICIOS</h2>
            <div className="h-[2px] bg-slate-300 w-16 md:w-32"></div>
          </div>

          {/* Grid responsivo: 1 col móvil, 2 col tablet, 3 col pantallas grandes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicios.map((servicio, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group"
              >
                {/* Contenedor de la foto con efecto Zoom */}
                <div className="h-52 w-full overflow-hidden relative bg-slate-200">
                  <img 
                    src={servicio.imagen} 
                    alt={servicio.titulo}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Badge circular decorativo simulando los iconos flotantes del folleto */}
                  <div className="absolute -bottom-5 right-6 w-10 h-10 bg-[#0D3A6A] rounded-full border-2 border-white flex items-center justify-center shadow-md">
                    <span className="text-white text-xs font-bold">{index + 1}</span>
                  </div>
                </div>

                {/* Contenido de la Tarjeta */}
                <div className="p-6 pt-8 flex-1 flex flex-col justify-between space-y-3">
                  <h3 className="text-lg font-bold text-[#1A7F37] tracking-tight group-hover:text-[#0D3A6A] transition-colors">
                    {servicio.titulo}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed flex-1">
                    {servicio.descripcion}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECCIÓN 3: ALQUILER DE VEHÍCULOS & PROPUESTA DE VALOR */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8">
          
          {/* Bloque Alquiler */}
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] space-y-6 flex flex-col justify-between">
            <div className="text-center">
              <span className="bg-[#0D3A6A] text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-sm">
                Alquiler de Vehículos
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Opción 1 */}
              <div className="space-y-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🚌</span>
                  <h4 className="font-bold text-[#1A7F37] text-sm">PARA PASAJEROS</h4>
                </div>
                <p className="text-xs text-slate-500">Transporte cómodo, seguro y con conductores responsables.</p>
              </div>
              {/* Opción 2 */}
              <div className="space-y-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🚛</span>
                  <h4 className="font-bold text-[#1A7F37] text-sm">PARA CARGA</h4>
                </div>
                <p className="text-xs text-slate-500">Vehículos de carga confiables para cada tipo de necesidad.</p>
              </div>
            </div>
            
            <p className="text-xs text-center text-slate-400 italic">
              *Consulte disponibilidad y cobertura logística.
            </p>
          </div>

          {/* Bloque Sello de Confianza Emocional */}
          <div className="flex flex-col items-center justify-center text-center p-8 bg-gradient-to-br from-slate-50 to-white rounded-2xl border-2 border-dashed border-slate-200">
            <h3 className="text-3xl font-extrabold italic text-[#1A7F37] tracking-tight font-serif">
              Calidad, compromiso
            </h3>
            <span className="text-4xl font-black text-[#0D3A6A] uppercase tracking-wide block mt-1">
              Y CONFIANZA
            </span>
            <span className="text-3xl font-extrabold text-[#1A7F37] uppercase tracking-wider relative block mt-1">
              QUE SE NOTAN
              <span className="absolute bottom-[-6px] left-0 w-full h-[4px] bg-[#1A7F37] rounded-full"></span>
            </span>
          </div>

        </section>

      </div>
    </main>
  );
}