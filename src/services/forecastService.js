import axios from 'axios';
import { DateTime } from 'luxon';

const API_KEY = '483a45dc79329fd119ebecf7bc77d71f';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

//https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04
// &exclude=current,minutely,hourly&units=metric&appid=483a45dc79329fd119ebecf7bc77d71f

const getWeatherData = (infoType, searchParams) => {
  const url = BASE_URL + '/' + infoType;

  return axios.get(url, { params: { ...searchParams, appid: API_KEY } });
};

const formatCurrentWeather = ({ data }) => {
  const {
    coord: { lat, lon },
    main: {
      temp,
      feels_like,
      temp_min,
      temp_max,
      humidity,
      pressure,
      sea_level,
    },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = data;

  const { main: details, icon } = weather[0];

  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    pressure,
    sea_level,
    name,
    dt,
    country,
    sunrise,
    sunset,
    details,
    icon,
    speed,
  };
};

const formatForecastWeather = ({ data }) => {
  console.log(data);
  let { timezone, daily } = data;

  daily = daily.slice(0, 8).map((d) => {
    return {
      title: formatToLocalTime(d.dt, timezone, 'ccc'),
      temp: d.temp.day,
      icon: d.weather[0].icon,
    };
  });

  return { timezone, daily };
};

const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    'weather',
    searchParams
  ).then(formatCurrentWeather);

  const { lat, lon } = formattedCurrentWeather;

  const formattedForecastWeather = await getWeatherData('onecall', {
    lat,
    lon,
    exclude: 'current,minutely,alerts',
    units: searchParams.units,
  }).then(formatForecastWeather);

  return { ...formattedCurrentWeather, formattedForecastWeather };
};

const formatToLocalTime = (
  secs,
  zone,
  format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const iconUrlFromCode = (code) =>
  `http://openweathermap.org/img/wn/${code}@2x.png`;

export default getFormattedWeatherData;

export { formatToLocalTime, iconUrlFromCode };
