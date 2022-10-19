import React from 'react';
import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
  UilArrowUp,
  UilArrowDown,
} from '@iconscout/react-unicons';

function ForecastDetails() {
  return (
    <div className='text-white lg:mt-14 grid grid-cols-2 md:grid-cols-3'>
      <div className='mx-auto'>
        <img
          src={`http://openweathermap.org/img/wn/01d@2x.png`}
          alt=''
          className='w-25'
        />
      </div>
      <div>
        <div className='text-center text-6xl'>{`32°`}</div>
        <p className='text-center py-2 text-xl text-cyan-300'>Cloudy</p>
      </div>
      <div className='space-y-2 mt-3 lg:mt-0'>
        <div className='flex font-light text-sm items-center justify-center'>
          <UilTemperature size={18} className='mr-1' />
          Real fell:
          <span className='font-medium ml-1'>{`32°`}</span>
        </div>
        <div className='flex font-light text-sm items-center justify-center'>
          <UilTear size={18} className='mr-1' />
          Humidity:
          <span className='font-medium ml-1'>{`65%`}</span>
        </div>
        <div className='flex font-light text-sm items-center justify-center'>
          <UilWind size={18} className='mr-1' />
          Wind:
          <span className='font-medium ml-1'>{`11 km/h`}</span>
        </div>
        <div className='flex font-light text-sm items-center justify-center'>
          <UilWind size={18} className='mr-1' />
          Wind:
          <span className='font-medium ml-1'>{`11 km/h`}</span>
        </div>
      </div>
      <div
        className='space-y-2 md:space-y-0 mt-3 flex flex-col md:flex-row 
      md:col-span-3 md:justify-center md:align-bottom md:space-x-6 md:mt-8'
      >
        <div className='flex font-light text-sm items-center justify-center'>
          <UilSun size={18} className='mr-1' />
          Rise: <span className='font-medium ml-1'>{`6:45 AM`}</span>
        </div>
        <div className='flex font-light text-sm items-center justify-center'>
          <UilSunset size={18} className='mr-1' />
          Set: <span className='font-medium ml-1'>{`6:45 AM`}</span>
        </div>
        <div className='flex font-light text-sm items-center justify-center'>
          <UilArrowUp size={18} className='mr-1' />
          High: <span className='font-medium ml-1'>{`12°`}</span>
        </div>
        <div className='flex font-light text-sm items-center justify-center'>
          <UilArrowDown size={18} className='mr-1' />
          Low: <span className='font-medium ml-1'>{`11°`}</span>
        </div>
      </div>
    </div>
  );
}

export default ForecastDetails;
