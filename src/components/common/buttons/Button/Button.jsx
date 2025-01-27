import React from 'react';

function Button({ title, type, onClick, disabled, icon }) {
  return (
    <button
      className={`text-white flex justify-center items-center gap-2 text-[14px] border border-transparent font-normal ${
        disabled
          ? 'bg-primary'
          : 'hover:border hover:border-primary hover:bg-[#852399] bg-primary'
      } py-2 w-full`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
      {icon && icon}
    </button>
  );
}

export default Button;
