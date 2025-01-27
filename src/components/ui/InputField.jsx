import React from "react";

const InputField = ({
  name,
  icon,
  placeholder,
  type = "text",
  value = "",
  onChange = () => {},
  isRequired = false,
  subKey,
  label,
  className,
}) => {
  return (
    <div>
      {label && <h4 className="pb-1">{label}</h4>}
      <div className="flex h-[35px] items-center rounded-lg border dark:border-black-300 ">
        {icon && (
          <label
            className=" flex h-[32px] w-[50px] items-center justify-center rounded-l-lg bg-gray-100 p-1 dark:bg-black-300 dark:text-gray-400  "
            htmlFor=""
          >
            {icon}
          </label>
        )}

        <input
          type={type}
          name={name}
          value={value}
          onChange={(e) => onChange(name, e?.target?.value, subKey)}
          placeholder={placeholder}
          required={isRequired}
          className={`${className} ${
            icon ? "rounded-r-lg" : "rounded-lg"
          } h-[35px] w-full bg-transparent px-4 text-[13px] focus:outline-blue-400`}
        />
      </div>
    </div>
  );
};

export default InputField;
