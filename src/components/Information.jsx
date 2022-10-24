import React from 'react';

function Information() {
  return (
    <div className='mt-40'>
      <p className='text-center text-white text-xl mt-4 mb-4'>
        Please search with location to get weather data
      </p>
      <p className='text-center text-white text-xl'>(OR)</p>
      <p className='text-center text-white text-xl mt-4 mb-4'>
        Please allow your browser to access your location
      </p>
    </div>
  );
}

export default Information;
