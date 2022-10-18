import React from 'react';

function Header() {
  return (
    <div className='flex justify-between items-baseline'>
      <h1 className='text-xl font-bold text-white'>Weather Forecast</h1>
      <div className='flex items-center text-white'>
        <div className='p-2 text-lg font-bold cursor-pointer'>C</div>
        <div className='p-2 text-lg font-thin cursor-pointer'>F</div>
      </div>
    </div>
  );
}

export default Header;
