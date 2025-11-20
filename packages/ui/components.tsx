import React from 'react';

export const Chip = ({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={`focus:ring-primary/50 select-none rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 ${
        selected
          ? 'bg-primary border-primary scale-[1.02] text-white shadow-md'
          : 'hover:border-primary/50 border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
      } `}
      aria-pressed={selected}
    >
      {label}
    </button>
  );
};

export const Card = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm ${className}`}
  >
    {children}
  </div>
);

export const SectionHeader = ({ title }: { title: string }) => (
  <h3 className="mb-3 ml-1 text-xs font-bold uppercase tracking-wider text-slate-400">
    {title}
  </h3>
);
