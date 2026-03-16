import { useRef, useState } from 'react';
import { Copy, ArrowUpRight } from 'lucide-react';
import type { Translation } from '../i18n/translations';
import { Button } from './ui/button';
import { FormattedText } from './ui/formatted-text';

interface ContactProps {
  content: Translation['contact'];
}

const Contact = ({ content }: ContactProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleTextareaInput = () => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = `${el.scrollHeight}px`;
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('hello@brunoarias.dev');
  };

  const [formData, setFormData] = useState({ name: '', email: '', details: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.details) return;

    // Use mailto for static version
    const subject = `Nuevo mensaje de: ${formData.name}`;
    const body = `Nombre: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.details}`;
    const mailtoUrl = `mailto:hello@brunoarias.dev?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoUrl;

    // Since we're navigating away/opening mail client, 
    // we can reset form or show a success hint
    setStatus('success');
    setFormData({ name: '', email: '', details: '' });
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-black border-t border-white/10">
      <div className="w-full max-w-container mx-auto flex flex-col md:flex-row gap-12 md:gap-16">
        <div className="w-full md:w-1/2">
          <FormattedText
            text={content.title}
            as="h2"
            className="text-4xl sm:text-5xl md:text-6xl font-serif mb-6 leading-[0.9] block"
          />
          <div className="flex flex-col items-start gap-2 mt-12">
            <p className="text-xs uppercase tracking-widest opacity-30 mb-3">{content.direct}</p>
            <button
              onClick={copyEmail}
              data-cursor-type="copy"
              className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors cursor-none group"
            >
              <span className="text-sm group-hover:opacity-100 opacity-80">{content.emailValue}</span>
              <Copy size={12} className="text-white/20 group-hover:text-white/50 transition-colors" />
            </button>
            <a
              href={content.githubValue}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-type="external"
              className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors cursor-none group"
            >
              <span className="text-sm group-hover:opacity-100 opacity-80">{content.githubLabel}</span>
              <ArrowUpRight size={13} className="text-white/20 group-hover:text-white/50 transition-colors" />
            </a>
          </div>

        </div>

        <div className="w-full md:w-1/2 bg-white/5 p-6 sm:p-8 md:p-12 rounded-sm border border-white/5">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xs font-sans uppercase tracking-widest font-bold">{content.formTitle}</h3>
            <div className="w-2 h-2 bg-green-500 rounded-full" />
          </div>

          <form className="space-y-8" onSubmit={handleSubmit}>
            <div data-cursor-type="text" className="space-y-2 cursor-none">
              <label className="text-xs uppercase opacity-50 block" htmlFor="name">{content.name}</label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-transparent border-b border-white/20 pb-2 focus:border-white outline-none transition-colors cursor-none"
              />
            </div>
            <div data-cursor-type="text" className="space-y-2 cursor-none">
              <label className="text-xs uppercase opacity-50 block" htmlFor="email">{content.email}</label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-transparent border-b border-white/20 pb-2 focus:border-white outline-none transition-colors cursor-none"
              />
            </div>
            <div data-cursor-type="text" className="space-y-2 cursor-none">
              <label className="text-xs uppercase opacity-50 block" htmlFor="details">{content.details}</label>
              <textarea
                id="details"
                ref={textareaRef}
                required
                rows={3}
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                onInput={handleTextareaInput}
                className="w-full bg-transparent border-b border-white/20 pb-2 focus:border-white outline-none transition-colors resize-none cursor-none overflow-hidden"
              />
            </div>

            <div className="pt-4 flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <Button
                  variant="ghost"
                  size="none"
                  type="submit"
                  disabled={status === 'loading'}
                  data-cursor-type="send"
                  className={`font-bold cursor-none flex items-center gap-2 ${status === 'loading' ? 'opacity-50' : ''}`}
                >
                  {status === 'loading' ? 'Enviando...' : content.send}
                </Button>
                <span className="text-[10px] opacity-30">{content.time}</span>
              </div>

              {/* Feedback messages */}
              {status === 'success' && (
                <p className="text-green-500 text-xs font-mono">✅ Abriendo tu aplicación de correo para enviar el mensaje...</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
