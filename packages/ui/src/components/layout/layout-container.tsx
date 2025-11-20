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
  sidebar,
}: LayoutContainerProps) => {
  return (
    <div
      className={cn('bg-background flex h-screen overflow-hidden', className)}
    >
      {/* Sidebar Area */}
      {sidebar && (
        <aside className="bg-card hidden w-64 flex-col border-r md:flex">
          {sidebar}
        </aside>
      )}

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto">
        <div className="container mx-auto h-full p-6">{children}</div>
      </main>
    </div>
  );
};
