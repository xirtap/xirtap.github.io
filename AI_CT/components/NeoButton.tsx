import React from 'react';

interface NeoButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean; // Simulates the pressed state
  variant?: 'primary' | 'danger' | 'success' | 'neutral';
}

export const NeoButton: React.FC<NeoButtonProps> = ({ 
  children, 
  className = '', 
  isActive = false, 
  variant = 'neutral',
  ...props 
}) => {
  
  const baseStyle = "transition-all duration-200 ease-in-out font-semibold rounded-full outline-none active:scale-95 flex items-center justify-center gap-2";
  
  // Neomorphism Shadow Styles for Pastel Pink
  // Dark shadow: rgb(210,180,188), Light shadow: white
  const outerShadow = "shadow-[6px_6px_10px_0_rgba(210,180,188,0.7),-6px_-6px_10px_0_rgba(255,255,255,0.9)]";
  const innerShadow = "shadow-[inset_6px_6px_10px_0_rgba(210,180,188,0.7),inset_-6px_-6px_10px_0_rgba(255,255,255,0.9)]";
  
  // Color Variants updated for pink theme
  const colors = {
    primary: "text-rose-600 hover:text-rose-700",
    danger: "text-red-500 hover:text-red-600",
    success: "text-emerald-600 hover:text-emerald-700",
    neutral: "text-rose-800 hover:text-rose-950",
  };

  const activeClass = isActive ? `${innerShadow} bg-[#ffe4e9]` : `${outerShadow} bg-[#ffe4e9] hover:bg-[#ffe9ee]`;

  return (
    <button 
      className={`${baseStyle} ${activeClass} ${colors[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};