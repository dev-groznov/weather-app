export const api = {
  async getWeatherData(location, unitGroup) {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(location)}?unitGroup=${unitGroup}&lang=en&key=3WQJHLENYFXVHUEWGGCKPN64C`
    );

    if (!response.ok) {
      if (response.status === 400) {
        throw new Error('City not found. Check the name and try again.');
      }
      if (response.status === 401) {
        throw new Error('Invalid API key.');
      }
      if (response.status === 429) {
        throw new Error('Too many requests. Please wait a moment.');
      }
      throw new Error(`Weather service error (${response.status}).`);
    }

    return response.json();
  },
};
