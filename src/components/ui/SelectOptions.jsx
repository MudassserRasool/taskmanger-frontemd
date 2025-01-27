import React from 'react';

const SelectOptions = ({
  name,
  icon,
  placeholder,
  className,
  options = [],
  onChange = () => {},
  value = '',
  subKey,
  isRequired,
  label,
  isOnlyCountryCodeSelector = false,
}) => {
  return (
    <div>
      {label && <h4 className="pb-1">{label}</h4>}
      <div className="flex h-[35px] items-center rounded-lg border dark:border-black-300  ">
        {icon && (
          <label
            className=" flex h-[35px] w-[50px] items-center justify-center rounded-l-lg bg-gray-100  dark:bg-black-300 "
            htmlFor=""
          >
            {icon}
          </label>
        )}

        <select
          className={`${className} ${
            icon ? ' rounded-r-lg' : ' rounded-lg'
          } h-[35px] w-full border border-gray-300 bg-white px-3  text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none  dark:border-black-300  `}
          // onChange={(e) => onChange(name, e?.target?.value, subKey)}
          onChange={(e) => {
            if (isOnlyCountryCodeSelector) {
              const selectedValue = e.target.value;
              onChange(name, selectedValue, subKey);
              return;
            } else {
              onChange(name, e?.target?.value, subKey);
            }
          }}
          value={value}
          required={isRequired}
        >
          <option value="">{placeholder}</option>
          {options?.map((option, i) => (
            <option value={option?.value} key={i}>
              {option?.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SelectOptions;
