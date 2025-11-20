import React from 'react';
import { cn } from '../../lib/utils';

interface LayoutContainerProps {
  children: React.ReactNode;
  className?: string;
  sidebar?: React.ReactNode;
}

export const LayoutContainer = ({
  children,
  className,
  sidebar
}: LayoutContainerProps) => {
  return (
    <div className={cn("flex h-screen overflow-hidden bg-background", className)}>
      {/* Sidebar Area */}
      {sidebar && (
        <aside className="w-64 hidden md:flex flex-col border-r bg-card">
          {sidebar}
        </aside>
      )}

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto">
        <div className="container mx-auto p-6 h-full">
          {children}
        </div>
      </main>
    </div>
  );
};
