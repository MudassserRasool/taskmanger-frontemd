import React from 'react';

const EmptyDataFields = ({ title, message }) => {
  return (
    <div className="mt-6">
      <h1 className="pb-2">{title}</h1>
      <div className="bg-white flex justify-center rounded-md items-center py-2 max-w-full">
        <p className="text-[#696969] font-medium">{message}</p>
      </div>
    </div>
  );
};

export default EmptyDataFields;
