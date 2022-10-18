import React from 'react';

function Header() {
  return (
    <div className='flex justify-between items-baseline'>
      <h1 className='text-3xl font-bold text-white'>Weather Forecast</h1>
      <div className='flex flex-row w-1/4 items-baseline justify-center'>
        <button
          name='metric'
          className='text-xl text-white font-semibold transition ease-out hover:scale-125 mx-2'
        >
          °C
        </button>
        <button
          name='imperial'
          className='text-xl text-white font-extralight transition ease-out hover:scale-125 mx-2'
        >
          °F
        </button>
      </div>
    </div>
  );
}

export default Header;
