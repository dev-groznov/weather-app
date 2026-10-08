export const ui = {
  renderWeatherData(weatherData) {
    console.log(weatherData);
    this.setBackground(weatherData.current.icon);
    console.log(weatherData.current.icon);
  },

  setBackground(icon) {
    const backgrounds = {
      'clear-day': './images/clear-day.jpeg',
      'clear-night': './images/clear-night.jpeg',
      rain: './images/rain.jpeg',
      snow: './images/snow.jpeg',
      cloudy: './images/cloudy.jpeg',
      'partly-cloudy-day': './images/partly-cloudy-day.jpeg',
    };

    const image = backgrounds[icon] || './images/clear-day.jpeg';
    console.log(image, backgrounds[icon], icon);
    document.body.style.backgroundImage = `url('${image}')`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundAttachment = 'fixed';
  },
};
