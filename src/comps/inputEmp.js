// InputEmp Component
import React, { useRef } from 'react';
import { useSearchContext } from './searchContext';

const InputEmp = () => {
  const inputRef = useRef();
  const { setSearchQuery, setSelectedGender } = useSearchContext();

  const handleSearch = () => {
    setSearchQuery(inputRef.current.value);
  };

  const handleGenderChange = (e) => {
    setSelectedGender(e.target.value);
  };

  return (
    <div className="flex items-center justify-center mt-8">
      <div className="flex items-center space-x-4">
        <label htmlFor="search" className="text-gray-600">Search by company</label>
        <input
          id="search"
          className='border border-gray-300 rounded-md p-2 focus:outline-none focus:border-indigo-500'
          ref={inputRef}
          type="search"
          placeholder='Enter company name'
          onChange={handleSearch}
        />
      </div>
      <div className="flex items-center space-x-4">
        <label htmlFor="gender" className="text-gray-600">Filter by gender</label>
        <select
          id="gender"
          className='border border-gray-300 rounded-md p-2 focus:outline-none focus:border-indigo-500'
          onChange={handleGenderChange}
        >
          <option value="">All Genders</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
    </div>
  );
};

export default InputEmp;
