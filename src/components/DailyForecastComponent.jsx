import React from 'react';
import { UilSun, UilSunset } from '@iconscout/react-unicons';

function DailyForecastComponent() {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 gap-3'>
      <div
        className='max-w-full text-white rounded-lg overflow-hidden shadow-md p-2 
				bg-cyan-300 bg-opacity-30 hover:bg-opacity-50 border
				mt-2 cursor-pointer transition ease-out hover:scale-105'
      >
        <div className='text-lg text-center'>Tue 31</div>
        <div className='flex items-center justify-evenly'>
          <img
            src={`http://openweathermap.org/img/wn/01d@2x.png`}
            className='w-16 my-1'
            alt=''
          />
          <p className='font-medium text-4xl'>{`32°`}</p>
        </div>
        <div className='flex items-center flex-wrap justify-around px-4 space-x-1'>
          <div className='flex font-light text-sm items-center justify-center'>
            <UilSun size={18} className='mr-1' />
            Max: <span className='font-medium ml-1'>{`32°`}</span>
          </div>
          <div className='flex font-light text-sm items-center justify-center'>
            <UilSunset size={18} className='mr-1' />
            Min: <span className='font-medium ml-1'>{`32°`}</span>
          </div>
        </div>
      </div>
      <div
        className='max-w-full text-white rounded-lg overflow-hidden shadow-md p-2 
				bg-cyan-300 bg-opacity-30 hover:bg-opacity-40
				mt-2 cursor-pointer transition ease-out hover:scale-105'
      >
        <div className='text-lg text-center'>Tue 31</div>
        <div className='flex items-center justify-evenly'>
          <img
            src={`http://openweathermap.org/img/wn/01d@2x.png`}
            className='w-16 my-1'
            alt=''
          />
          <p className='font-medium text-4xl'>{`32°`}</p>
        </div>
        <div className='flex items-center flex-wrap justify-around px-4 space-x-1'>
          <div className='flex font-light text-sm items-center justify-center'>
            <UilSun size={18} className='mr-1' />
            Max: <span className='font-medium ml-1'>{`32°`}</span>
          </div>
          <div className='flex font-light text-sm items-center justify-center'>
            <UilSunset size={18} className='mr-1' />
            Min: <span className='font-medium ml-1'>{`32°`}</span>
          </div>
        </div>
      </div>
      <div
        className='max-w-full text-white rounded-lg overflow-hidden shadow-md p-2 
				bg-cyan-300 bg-opacity-30 hover:bg-opacity-40
				mt-2 cursor-pointer transition ease-out hover:scale-105'
      >
        <div className='text-lg text-center'>Tue 31</div>
        <div className='flex items-center justify-evenly'>
          <img
            src={`http://openweathermap.org/img/wn/01d@2x.png`}
            className='w-16 my-1'
            alt=''
          />
          <p className='font-medium text-4xl'>{`32°`}</p>
        </div>
        <div className='flex items-center flex-wrap justify-around px-4 space-x-1'>
          <div className='flex font-light text-sm items-center justify-center'>
            <UilSun size={18} className='mr-1' />
            Max: <span className='font-medium ml-1'>{`32°`}</span>
          </div>
          <div className='flex font-light text-sm items-center justify-center'>
            <UilSunset size={18} className='mr-1' />
            Min: <span className='font-medium ml-1'>{`32°`}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DailyForecastComponent;
