
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { rinconCasero } from '@/i18n/es/projects/rincon-casero';

export function RinconBonus() {
  const revealRef = useScrollReveal<HTMLDivElement>({ type: 'fade-right', delay: 150 });
  return (
    <section className="py-24 px-6 md:px-12 bg-[#1a1a1a] relative overflow-hidden">
      {/* Subtle matrix-like background effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ff0005_1px,transparent_1px),linear-gradient(to_bottom,#00ff0005_1px,transparent_1px)] bg-size-[32px_32px] pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">

        <div className="space-y-8 order-2 md:order-1">
          <div className="flex items-center gap-3 mb-2">
            <div className="px-3 py-1 bg-green-900/30 border border-green-500/30 rounded-full">
              <span className="text-green-400 font-mono text-xs tracking-wider uppercase">{rinconCasero.detail.bonus?.badge}</span>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-serif text-[#f5f5f5]">{rinconCasero.detail.bonus?.title}</h2>

          <div className="space-y-6 text-white/70 leading-relaxed">
            <p>
              Para cerrar el ciclo digital-físico, desarrollé una solución de hardware personalizada desbloqueando un terminal POS A910 de Mercado Pago.
            </p>
            <p>
              Creé una App Android con React Native 0.75 y Expo 51 específicamente para este dispositivo que transforma el terminal de pagos en una impresora térmica de comandas.
            </p>
            <p>
              Esto permite al operador ingresar el pedido y generar el ticket impreso al instante, profesionalizando la entrega sin gastar en hardware dedicado y reciclando un dispositivo que estaba en desuso.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-green-500/30 transition-colors group">

              <h4 className="font-serif text-white font-medium mb-1">Android</h4>
              <p className="text-xs text-white/40">APK personalizado</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-green-500/30 transition-colors group">

              <h4 className="font-serif text-white font-medium mb-1">Thermal Print</h4>
              <p className="text-xs text-white/40">Driver de impresión</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-green-500/30 transition-colors group">

              <h4 className="font-serif text-white font-medium mb-1">Hardware</h4>
              <p className="text-xs text-white/40">POS Modificado</p>
            </div>
          </div>
        </div>

        <div ref={revealRef} className="order-1 md:order-2 relative">
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black">
            {/* Placeholder for POS image - using a generic code/tech image for now as specific POS image might not be available */}
            <img
              src="/images/rincon-casero/ticket.webp"
              alt="Ticket impreso con POS"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-500/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-p-rincon-primary/10 rounded-full blur-2xl" />
        </div>

      </div>
    </section>
  );
}
