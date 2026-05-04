import { 
  AlertTriangle, 
  Terminal, 
  ServerCrash, 
  DollarSign, 
  Globe, 
  ShieldAlert, 
  Skull,
  Database,
  Lock
} from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-red-500/30">
      {/* HEADER / HERO SECTION */}
      <header className="relative overflow-hidden bg-slate-900 border-b border-red-900/50 pt-20 pb-16 px-6">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/20 via-slate-950 to-slate-950"></div>
        <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-600"></div>
        
        <div className="relative max-w-5xl mx-auto flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/50 border border-red-800 text-red-400 text-sm font-mono mb-6">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            Proyecto del profe Rubén.
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            Anatomía de un <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">Ciberataque</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl font-light">
            El caso del sistema SWIFT en Chile (2018): Cómo un virus destructor fue utilizado como cortina de humo para uno de los robos bancarios más sofisticados del país.
          </p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12 space-y-16">
        
        {/* KEY METRICS GRID */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard 
            icon={<DollarSign className="w-8 h-8 text-emerald-400" />}
            title="Monto Sustraído"
            value="~$10 Millones"
            subtitle="USD, transferidos a Hong Kong"
            borderColor="border-emerald-900/50"
            bgHover="hover:bg-emerald-950/20"
          />
          <StatCard 
            icon={<ServerCrash className="w-8 h-8 text-red-400" />}
            title="Equipos Afectados"
            value="9,000+"
            subtitle="Estaciones de trabajo y sucursales"
            borderColor="border-red-900/50"
            bgHover="hover:bg-red-950/20"
          />
          <StatCard 
            icon={<Skull className="w-8 h-8 text-purple-400" />}
            title="Malware Usado"
            value="KillDisk"
            subtitle="Wiper que borra el MBR del disco"
            borderColor="border-purple-900/50"
            bgHover="hover:bg-purple-950/20"
          />
          <StatCard 
            icon={<Globe className="w-8 h-8 text-blue-400" />}
            title="Atribución"
            value="Lazarus"
            subtitle="Grupo APT patrocinado por un Estado"
            borderColor="border-blue-900/50"
            bgHover="hover:bg-blue-950/20"
          />
        </section>

        {/* THE STRATEGY - TWO COLUMNS */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <ShieldAlert className="w-32 h-32 text-red-500" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <AlertTriangle className="text-yellow-500" /> 
              La Estrategia de Distracción
            </h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              Los atacantes no querían simplemente destruir información. Utilizaron un malware tipo <strong>Wiper</strong> (KillDisk) para apagar miles de computadoras en las sucursales, generando caos en el equipo de TI.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Mientras todos los esfuerzos de ciberseguridad se concentraban en reactivar las sucursales y recuperar los discos duros, los atacantes operaban en las sombras dentro de la red crítica.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-10">
              <Database className="w-32 h-32 text-emerald-500" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Terminal className="text-emerald-500" />
              El Objetivo Real: Red SWIFT
            </h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              Aprovechando la ceguera temporal y el pánico generalizado, los cibercriminales accedieron a los terminales conectados a la red <strong>SWIFT</strong> (el sistema internacional de mensajería financiera).
            </p>
            <p className="text-slate-400 leading-relaxed">
              Emitieron múltiples órdenes de transferencia fraudulentas hacia cuentas en Asia, logrando extraer aproximadamente 10 millones de dólares antes de que la anomalía fuera detectada.
            </p>
          </div>
        </section>

        {/* TIMELINE */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-10 text-center">Línea de Tiempo del Ataque</h2>
          <div className="relative border-l-2 border-slate-800 ml-4 md:ml-1/2 space-y-12 pb-8">
            
            <TimelineItem 
              time="Fase 1: Infiltración Previa"
              title="Compromiso Inicial"
              description="Semanas o meses antes, los atacantes ingresan a la red del banco mediante phishing o vulnerabilidades no parcheadas, moviéndose lateralmente de forma silenciosa."
              icon={<Lock className="w-5 h-5 text-slate-900" />}
              color="bg-slate-400"
            />
            
            <TimelineItem 
              time="Fase 2: Día Cero - 08:00 AM"
              title="Despliegue del Wiper"
              description="Se activa el malware KillDisk en la red corporativa. Más de 9,000 estaciones de trabajo se apagan repentinamente y no pueden reiniciar, mostrando el temido mensaje de error de sistema operativo ausente."
              icon={<ServerCrash className="w-5 h-5 text-slate-900" />}
              color="bg-red-500"
            />

            <TimelineItem 
              time="Fase 3: Día Cero - 09:30 AM"
              title="La Cortina de Humo"
              description="Equipos de TI y ciberseguridad declaran emergencia máxima. Se cierran sucursales y se suspenden servicios de atención al cliente. Toda la atención está en el 'ransomware/wiper'."
              icon={<AlertTriangle className="w-5 h-5 text-slate-900" />}
              color="bg-yellow-500"
            />

            <TimelineItem 
              time="Fase 4: Ejecución en las Sombras"
              title="Transacciones Fraudulentas SWIFT"
              description="Con la seguridad distraída, los atacantes inyectan mensajes fraudulentos en los servidores SWIFT, enviando fondos desde cuentas corresponsales hacia cuentas controladas por ellos en Hong Kong."
              icon={<DollarSign className="w-5 h-5 text-slate-900" />}
              color="bg-emerald-500"
            />

            <TimelineItem 
              time="Fase 5: Detección y Contención"
              title="Apagón Internacional"
              description="Al notar irregularidades en los saldos internacionales, el banco decide desconectarse completamente de la red SWIFT y de internet para frenar el sangrado de fondos, iniciando el análisis forense."
              icon={<ShieldAlert className="w-5 h-5 text-slate-900" />}
              color="bg-blue-500"
            />

          </div>
        </section>

        {/* LESSONS LEARNED */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl font-bold text-white mb-6">Lecciones Aprendidas</h2>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-blue-950/50 flex items-center justify-center border border-blue-900">
                <span className="text-blue-400 font-bold">1</span>
              </div>
              <h4 className="text-white font-medium">Segmentación de Red</h4>
              <p className="text-sm text-slate-400">Las redes críticas (como SWIFT) deben estar estrictamente separadas de la red corporativa general donde operan los usuarios diarios.</p>
            </div>
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-purple-950/50 flex items-center justify-center border border-purple-900">
                <span className="text-purple-400 font-bold">2</span>
              </div>
              <h4 className="text-white font-medium">Monitoreo de Comportamiento</h4>
              <p className="text-sm text-slate-400">Es vital detectar no solo el malware conocido, sino anomalías transaccionales en tiempo real, independientemente del estado de la red corporativa.</p>
            </div>
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-red-950/50 flex items-center justify-center border border-red-900">
                <span className="text-red-400 font-bold">3</span>
              </div>
              <h4 className="text-white font-medium">No confiar en las coincidencias</h4>
              <p className="text-sm text-slate-400">Un ataque masivo a la disponibilidad (DDoS o Wiper) suele ser una táctica de distracción para ocultar un ataque de confidencialidad o robo.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800 py-8 text-center text-slate-600 text-sm">
        <p>Infografía de concepto técnico e histórico. Creado con React y Tailwind CSS.</p>
      </footer>
    </div>
  );
}

/* --- COMPONENTES AUXILIARES --- */

function StatCard({ icon, title, value, subtitle, borderColor, bgHover }: any) {
  return (
    <div className={`bg-slate-900/50 border ${borderColor} rounded-2xl p-6 transition-colors duration-300 ${bgHover} group`}>
      <div className="mb-4 bg-slate-950 inline-block p-3 rounded-xl border border-slate-800 shadow-sm group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-1">{title}</h3>
      <div className="text-3xl font-bold text-white mb-2">{value}</div>
      <div className="text-sm text-slate-500">{subtitle}</div>
    </div>
  );
}

function TimelineItem({ time, title, description, icon, color }: any) {
  return (
    <div className="relative pl-8 md:pl-0">
      {/* Círculo del timeline */}
      <div className={`absolute left-[-9px] md:left-[50%] md:ml-[-20px] top-0 w-10 h-10 rounded-full border-4 border-slate-950 flex items-center justify-center z-10 ${color}`}>
        {icon}
      </div>
      
      {/* Contenido (Alternando izquierda/derecha en desktop) */}
      <div className="md:w-[calc(50%-40px)] md:ml-auto md:even:mr-auto md:even:ml-0 bg-slate-900 border border-slate-800 p-6 rounded-xl relative shadow-lg group hover:border-slate-600 transition-colors">
        {/* Flecha visual desktop */}
        <div className="hidden md:block absolute top-4 w-4 h-4 bg-slate-900 border-t border-r border-slate-800 transform rotate-45 
          group-even:right-[-9px] group-even:border-b-0 group-even:border-l-0
          group-odd:left-[-9px] group-odd:border-b group-odd:border-l group-odd:border-t-0 group-odd:border-r-0
          group-hover:border-slate-600 transition-colors"
        ></div>
        
        <span className="text-xs font-mono text-slate-500 mb-2 block">{time}</span>
        <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
        <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}