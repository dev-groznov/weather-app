export const ui = {
  renderWeatherData(weatherData) {
    this.hideLoading();
    this.hideError();
    this.setBackground(weatherData.current.icon);

    const isUs =
      document.querySelector('.unit-btn.active')?.dataset.unit === 'us';
    const speedUnit = isUs ? 'mph' : 'km/h';
    const visUnit = isUs ? 'mi' : 'km';

    document.getElementById('city').textContent =
      weatherData.city?.split(',')[0] || '—';
    document.getElementById('temp').textContent =
      `${Math.round(weatherData.current.temp)}°`;
    document.getElementById('conditions').textContent =
      weatherData.current.conditions || '—';

    const today = weatherData.days?.[0];
    if (today) {
      const dayName = new Date(today.date).toLocaleDateString('en-US', {
        weekday: 'short',
      });
      document.getElementById('high-low').textContent =
        `${dayName} ${Math.round(today.tempMax)}° ${Math.round(today.tempMin)}°`;
    }

    document.getElementById('feelslike').textContent =
      weatherData.current.feelslike != null
        ? `${Math.round(weatherData.current.feelslike)}°`
        : '—';

    document.getElementById('wind').textContent =
      weatherData.current.windspeed != null
        ? `${Math.round(weatherData.current.windspeed)} ${speedUnit}`
        : '—';

    document.getElementById('humidity').textContent =
      weatherData.current.humidity != null
        ? `${Math.round(weatherData.current.humidity)}%`
        : '—';

    document.getElementById('uvindex').textContent =
      weatherData.current.uvindex ?? '—';

    document.getElementById('visibility').textContent =
      weatherData.current.visibility != null
        ? `${Math.round(weatherData.current.visibility)} ${visUnit}`
        : '—';

    document.getElementById('pressure').textContent =
      weatherData.current.pressure != null
        ? `${Math.round(weatherData.current.pressure)} hPa`
        : '—';

    // 5-day forecast
    const forecastEl = document.getElementById('forecast');
    forecastEl.innerHTML = '';

    weatherData.days?.slice(0, 5).forEach((day) => {
      const name = new Date(day.date).toLocaleDateString('en-US', {
        weekday: 'short',
      });
      const row = document.createElement('div');
      row.className = 'forecast-day';
      row.innerHTML = `
        <span class="day-name">${name}</span>
        <span class="day-conditions">${day.conditions || ''}</span>
        <span class="day-temps">
          <span class="max">${Math.round(day.tempMax)}°</span>
          <span class="min">${Math.round(day.tempMin)}°</span>
        </span>
      `;
      forecastEl.appendChild(row);
    });
  },

  setBackground(icon) {
    const backgrounds = {
      'clear-day': '/images/clear-day.jpeg',
      'clear-night': '/images/clear-night.jpeg',
      rain: '/images/rain.jpeg',
      snow: '/images/snow.jpeg',
      cloudy: '/images/cloudy.jpeg',
      'partly-cloudy-day': '/images/partly-cloudy-day.jpeg',
    };

    const image = backgrounds[icon] || '/images/cloudy.jpeg';
    document.body.style.backgroundImage = `url('${image}')`;
  },

  showError(message) {
    let el = document.getElementById('error-message');
    if (!el) {
      el = document.createElement('div');
      el.id = 'error-message';
      el.className = 'error-message';
      document.querySelector('.app')?.prepend(el);
    }
    el.textContent = message;
    el.hidden = false;
  },

  hideError() {
    const el = document.getElementById('error-message');
    if (el) el.hidden = true;
  },

  showLoading() {
    const el = document.getElementById('loader');
    if (el) el.hidden = false;
  },

  hideLoading() {
    const el = document.getElementById('loader');
    if (el) el.hidden = true;
  },
};
