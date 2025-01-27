import React, { useEffect, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
// import { Search } from 'lucide-react';

const SearchBar = ({ onSearch, placeholder = "Search...", debounceTime = 300 }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [debouncedTerm, setDebouncedTerm] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedTerm(searchTerm);
            if (!searchTerm) onSearch('');
        }, debounceTime);
        return () => clearTimeout(timer);
    }, [searchTerm, debounceTime]);

    useEffect(() => {
        if (debouncedTerm) {
            onSearch(debouncedTerm);
        }
    }, [debouncedTerm, onSearch]);

    return (
        // <div className="relative max-w-md mx-auto">
        <>
            <div className="relative w-full">
                <div className="relative">
                    <input
                        type="text"
                        className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder={placeholder}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <BiSearch className="h-5 w-5 text-gray-400" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default SearchBar;