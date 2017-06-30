import axios from 'axios';
// API key from openweathermap.org, jywang1025, birthday
const API_KEY = 'd493ea1c1d9a70a6671c9e2ac3573f60';
const ROOT_URL =`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},US`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload:request
  }
}
