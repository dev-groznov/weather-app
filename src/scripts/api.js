export const api = {
  async getWeatherData(location, unitGroup) {
    const responce = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=${unitGroup}&lang=en&key=3WQJHLENYFXVHUEWGGCKPN64C`
    );
    return await responce.json();
  },
};
