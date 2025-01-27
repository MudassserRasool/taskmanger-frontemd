import React from 'react';

function Button({ title, type, onClick, disabled, icon: Icon }) {
  return (
    <button
      className={`px-6 py-2 text-white border rounded-md ${
        disabled
          ? 'bg-gray cursor-not-allowed'
          : 'bg-black hover:border border-black hover:bg-transparent hover:text-black'
      }`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
      {Icon && <Icon />}
    </button>
  );
}

export default Button;
