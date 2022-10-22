import UilReact from '@iconscout/react-unicons/icons/uil-react';
import ApplicationContainer from './components/ApplicationContainer';
import Header from './components/Header';
import SearchContainer from './components/SearchContainer';
import LocationContainer from './components/LocationContainer';
import ForecastDetails from './components/ForecastDetails';
import DailyForecast from './components/DailyForecastContainer';
import { useEffect } from 'react';
import getFormattedWeatherData from './services/forecastService';

function App() {
  useEffect(() => {
    async function getForecastData() {
      const forecastData = await getFormattedWeatherData({
        q: 'Nellore',
        units: 'metric',
      });
      console.log(forecastData);
    }
    getForecastData();
  }, []);
  return (
    <div className='w-full h-full min-h-screen bg-gradient-to-br from-sky-800 to-blue-400'>
      <ApplicationContainer>
        <Header />
        <SearchContainer />
        <LocationContainer />
        <ForecastDetails />
        <DailyForecast />
      </ApplicationContainer>
    </div>
  );
}

export default App;
