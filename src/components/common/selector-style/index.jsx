import React, { useState } from 'react';

function SelectorStyle({ title, type, onClick, disabled, icon }) {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <button
      className={`
      flex justify-center items-center gap-2 
      text-[14px] font-normal w-full
      border border-primary rounded-md px-6 py-2
      ${
        isSelected
          ? 'bg-primary text-white'
          : 'bg-transparent text-primary hover:bg-primary hover:text-white active:bg-primary active:text-white'
      }
    `}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
      {icon && icon}
    </button>
  );
}

export default SelectorStyle;
