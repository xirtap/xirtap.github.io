import React from 'react';

interface NeoTextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  isReadOnly?: boolean;
}

export const NeoTextArea: React.FC<NeoTextAreaProps> = ({ label, isReadOnly, className = '', ...props }) => {
  return (
    <div className={`flex flex-col w-full ${className}`}>
      {label && <label className="ml-4 mb-2 text-rose-900/80 font-semibold text-sm">{label}</label>}
      <textarea
        readOnly={isReadOnly}
        className={`
            w-full p-4 rounded-[20px] bg-[#ffe4e9] text-rose-950 
            shadow-[inset_6px_6px_10px_0_rgba(210,180,188,0.6),inset_-6px_-6px_10px_0_rgba(255,255,255,0.8)]
            focus:outline-none focus:ring-2 focus:ring-rose-400/50 transition-all
            resize-none placeholder-rose-300/70
        `}
        {...props}
      />
    </div>
  );
};