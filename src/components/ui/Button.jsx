import React from "react";
import { Link } from "react-router-dom";

const Button = ({
  children,
  className,
  link,
  type = "button",
  onClick = () => {},
  isDisabled = false,
}) => {
  return (
    <div>
      {link ? (
        <Link
          to={link}
          className={` block rounded-lg bg-primary px-4 py-2 text-[14px] text-white ${className} `}
        >
          {children}
        </Link>
      ) : (
        <button
          onClick={onClick}
          type={type}
          disabled={isDisabled}
          className={`${className} rounded-lg  bg-primary px-4 py-2 text-[14px] text-white`}
        >
          {children}
        </button>
      )}
    </div>
  );
};

export default Button;
