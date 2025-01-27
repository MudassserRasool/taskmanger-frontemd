import React from 'react';

const SearchFilter = ({ searchTerm, setSearchTerm, placeholder }) => {
  return (
    <div className="my-4">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder={placeholder}
        className="w-[250px] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
      />
    </div>
  );
};

export default SearchFilter;
