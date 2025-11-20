import React from 'react';

export const Chip = ({ 
  label, 
  selected, 
  onClick 
}: { 
  label: string; 
  selected: boolean; 
  onClick: () => void 
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ease-in-out
        border select-none focus:outline-none focus:ring-2 focus:ring-primary/50
        ${selected 
          ? 'bg-primary text-white border-primary shadow-md scale-[1.02]' 
          : 'bg-white text-slate-600 border-slate-200 hover:border-primary/50 hover:bg-slate-50'}
      `}
      aria-pressed={selected}
    >
      {label}
    </button>
  );
};

export const Card = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden ${className}`}>
    {children}
  </div>
);

export const SectionHeader = ({ title }: { title: string }) => (
  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 ml-1">
    {title}
  </h3>
);
