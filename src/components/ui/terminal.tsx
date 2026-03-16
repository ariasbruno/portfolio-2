import React from 'react';

interface TerminalProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function Terminal({ title, children, className = "" }: TerminalProps) {
  return (
    <div className={`bg-[#0f0f0f] border border-white/10 rounded-xl overflow-hidden shadow-2xl font-mono text-sm ${className}`}>
      {/* Header */}
      <div className="relative bg-brand-gray px-4 py-3 flex items-center gap-2 border-b border-white/5">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        {title && (
          <span className="absolute left-0 right-0 ml-4 text-xs text-white/30 font-mono text-center pointer-events-none">
            {title}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="p-6 md:p-8 overflow-x-auto">
        {children}
      </div>
    </div>
  );
}

interface TerminalTreeLineProps {
  text: string;
  comment?: string;
  isLast?: boolean;
  dots?: number;
  className?: string;
}

export function TerminalTreeLine({
  text,
  comment,
  isLast,
  dots = 0,
  className = ""
}: TerminalTreeLineProps) {
  return (
    <div className={`whitespace-nowrap ${className}`}>
      <span className="text-white/40 mr-2">{isLast ? '└──' : '├──'}</span>
      {text}
      {dots > 0 && <span className="text-transparent">{'.'.repeat(dots)}</span>}
      {comment && (
        <span className="text-white/40"># {comment}</span>
      )}
    </div>
  );
}

export function TerminalPrompt({ className = "" }: { className?: string }) {
  return (
    <div className={`mt-6 flex items-center gap-2 ${className}`}>
      <span className="text-green-500">➜</span>
      <span className="text-cyan-400">~</span>
      <span className="animate-pulse">_</span>
    </div>
  );
}
