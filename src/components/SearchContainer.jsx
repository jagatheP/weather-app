import React from 'react';
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons';

function SearchContainer() {
  return (
    <div className='mt-16 mb-10 flex flex-row items-center justify-center space-x-4'>
      <input
        type='text'
        placeholder='Search...'
        className='text-xl font-light p-2 w-1/2 shadow-xl rounded-md focus:outline-none capitalize placeholder:lowercase'
      />
      <UilSearch
        size={25}
        className='text-white cursor-pointer transition ease-out hover:scale-125'
      />
      <UilLocationPoint
        size={25}
        className='text-white cursor-pointer transition ease-out hover:scale-125'
      />
    </div>
  );
}

export default SearchContainer;
