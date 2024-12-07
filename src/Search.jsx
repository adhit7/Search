import React, { useState } from 'react';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');
  const options = ['All', 'React', 'CSS', 'JavaScript'];
  const results = [
    { id: 1, title: 'React Basics', category: 'React' },
    { id: 2, title: 'Introduction to Tailwind CSS', category: 'CSS' },
    { id: 3, title: 'Advanced JavaScript', category: 'JavaScript' },
    { id: 4, title: 'Styling with Tailwind', category: 'CSS' },
    { id: 5, title: 'React with TypeScript', category: 'React' },
  ];

  const filteredResults = results.filter((item) => {
    const matchesSearch = item.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'All' || item.category === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className='p-4 bg-gray-200 h-screen flex flex-col items-center'>
      <div className='w-full max-w-md'>
        <input
          type='text'
          placeholder='Search...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500'
        />
      </div>

      {options?.length > 0 && (
        <div className='mt-4 w-full max-w-md flex justify-between'>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className='px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500'
          >
            {options.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      )}

      <div className='mt-6 w-full max-w-md'>
        {filteredResults.length > 0 ? (
          filteredResults.map((item) => (
            <div
              key={item.id}
              className='mb-4 p-4 border rounded-lg bg-white shadow-sm hover:shadow-md'
            >
              <h3 className='text-lg font-semibold'>{item.title}</h3>
              <p className='text-sm text-gray-500'>Category: {item.category}</p>
            </div>
          ))
        ) : (
          <p className='text-center text-gray-500'>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default Search;
