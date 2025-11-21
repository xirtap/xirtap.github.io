import React from 'react';

interface NeoCardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export const NeoCard: React.FC<NeoCardProps> = ({ children, className = '', title }) => {
  return (
    <div className={`bg-[#ffe4e9] rounded-[30px] shadow-[9px_9px_16px_rgb(210,180,188,0.6),-9px_-9px_16px_rgba(255,255,255,0.9)] p-8 ${className}`}>
      {title && (
        <h2 className="text-2xl font-bold text-rose-950 mb-6 text-center tracking-wide">
            {title}
        </h2>
      )}
      {children}
    </div>
  );
};