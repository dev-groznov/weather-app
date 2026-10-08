import './style.css';
import { ui } from './scripts/ui.js';
import { api } from './scripts/api.js';

function processWeatherData(rawData) {
  return {
    city: rawData.resolvedAddress,
    current: {
      temp: rawData.currentConditions?.temp,
      conditions: rawData.currentConditions?.conditions,
      humidity: rawData.currentConditions?.humidity,
      windspeed: rawData.currentConditions?.windspeed,
      uvindex: rawData.currentConditions?.uvindex,
      visibility: rawData.currentConditions?.visibility,
      pressure: rawData.currentConditions?.pressure,
      icon: rawData.currentConditions?.icon,
    },
    days: rawData.days?.slice(0, 7).map((day) => ({
    date: day.datetime,
    tempMax: day.tempmax,
    tempMin: day.tempmin,
    conditions: day.conditions,
    icon: day.icon,
  })) || [],
  };
}

function searchWeatherData(location = 'Saint-petersburg', unitGroup = 'uk') {
  api
    .getWeatherData(location, unitGroup)
    .then((responce) => ui.renderWeatherData(processWeatherData(responce)));
}

const inputLocation = document.querySelector('.location-search');
const btn = document.querySelector('button');
let request = 'Saint-petersburg';

btn.addEventListener('click', (event) => {
  event.preventDefault(); 
  if (inputLocation.value.trim()) {
    request = inputLocation.value.trim(); 
    inputLocation.value = '';
    searchWeatherData(request, unitGroup);
  }
});

const inputUnitGroup = document.querySelector('.unitGroupRadioInput');
let unitGroup = 'uk';

inputUnitGroup.addEventListener('click', () => {
  unitGroup = unitGroup === 'us' ? 'uk' : 'us';
  searchWeatherData(request, unitGroup);
});

searchWeatherData();
