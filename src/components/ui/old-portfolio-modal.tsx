import React, { useState, useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Button } from './button';

export const OldPortfolioModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show modal on load
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={cn(
      "fixed inset-0 z-100 flex items-center justify-center p-4 modal-overlay pointer-events-none",
      isOpen && "is-open pointer-events-auto"
    )}>
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-brand-dark/90 backdrop-blur-md" 
        onClick={() => setIsOpen(false)}
      />
      
      {/* Modal Content */}
      <div className={cn(
        "relative w-full max-w-md overflow-hidden bg-brand-gray border border-white/5 rounded-4xl p-10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)] modal-panel",
        "flex flex-col gap-8 text-center"
      )}>
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
          data-cursor-type="button"
        >
          <X size={20} />
        </button>

        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-white/60 tracking-widest uppercase mx-auto">
             Aviso de sitio web
          </div>
          
          <h2 className="text-4xl font-serif font-semibold text-white leading-tight">
            Este es un <br />
            <span className="text-brand-accent-green">portfolio anterior</span>
          </h2>
          
          <p className="text-white/60 text-lg leading-relaxed max-w-[280px] mx-auto">
            Mi trabajo más reciente y mi nueva identidad visual están disponibles ahora en mi nuevo sitio.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <Button 
            onClick={() => window.open('https://brunoarias.dev', '_blank')}
            className="w-full h-16 text-lg font-medium group rounded-2xl"
            data-cursor-type="button"
          >
            Ir a brunoarias.dev
            <ExternalLink size={18} className="ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Button>
          
          <button 
            onClick={() => setIsOpen(false)}
            className="w-full py-2 text-white/40 hover:text-white transition-colors text-sm font-medium"
            data-cursor-type="link"
          >
            Seguir viendo versión vieja
          </button>
        </div>
      </div>
    </div>
  );
};
