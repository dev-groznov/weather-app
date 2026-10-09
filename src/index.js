import './style.css';
import { ui } from './scripts/ui.js';
import { api } from './scripts/api.js';

function processWeatherData(rawData) {
  return {
    city: rawData.resolvedAddress,
    current: {
      temp: rawData.currentConditions?.temp,
      feelslike: rawData.currentConditions?.feelslike,
      conditions: rawData.currentConditions?.conditions,
      humidity: rawData.currentConditions?.humidity,
      windspeed: rawData.currentConditions?.windspeed,
      uvindex: rawData.currentConditions?.uvindex,
      visibility: rawData.currentConditions?.visibility,
      pressure: rawData.currentConditions?.pressure,
      icon: rawData.currentConditions?.icon,
    },
    days:
      rawData.days?.slice(0, 7).map((day) => ({
        date: day.datetime,
        tempMax: day.tempmax,
        tempMin: day.tempmin,
        conditions: day.conditions,
        icon: day.icon,
      })) || [],
  };
}

function searchWeatherData(location = 'Saint-petersburg', unitGroup = 'uk') {
  ui.hideError();
  ui.showLoading();

  api
    .getWeatherData(location, unitGroup)
    .then((responce) => ui.renderWeatherData(processWeatherData(responce)))
    .catch((error) => {
      console.error(error);
      ui.hideLoading();
      ui.showError(error.message || 'Could not load weather.');
    });
}

const inputLocation = document.querySelector('.location-search');
const btn = document.querySelector('.search-form button');
let request = 'Saint-petersburg';
let unitGroup = 'uk';

btn.addEventListener('click', (event) => {
  event.preventDefault();
  if (inputLocation.value.trim()) {
    request = inputLocation.value.trim();
    inputLocation.value = '';
    searchWeatherData(request, unitGroup);
  }
});

// Toggle °C / °F
const unitButtons = document.querySelectorAll('.unit-btn');

unitButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    unitButtons.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    unitGroup = btn.dataset.unit;
    searchWeatherData(request, unitGroup);
  });
});

searchWeatherData();
