function processData(data) {
  let location = [
    data.location.country,
    data.location.name,
    data.location.region,
    data.location.localtime,
  ];

  let current = {
    temp: [data.current.temp_c, data.current.temp_f],
    feelTemp: [data.current.feelslike_c, data.current.feelslike_f],
    cloud: data.current.cloud,
    humidity: data.current.humidity,
    dayNight: data.current.is_day,
    lastUpdate: data.current.last_updated,
    pressure: [data.current.pressure_mb, data.current.pressure_in],
    wind: [data.current.wind_kph, data.current.wind_kph],
    visibility: [data.current.vis_km, data.current.vis_miles],
    info: [data.current.condition.icon, data.current.condition.text],
  };

  let days = [];
  for (let i = 0; i < 3; i++) {
    let forecast = data.forecast.forecastday[i].day;

    days.push({
      forecastDate: data.forecast.forecastday[i].date,
      temp: [forecast.avgtemp_c, forecast.avgtemp_f],
      rain: forecast.daily_chance_of_rain,
      snow: [forecast.daily_chance_of_snow, forecast.totalsnow_cm],
      maximumTemp: [forecast.maxtemp_c, forecast.maxtemp_f],
      minimumTemp: [forecast.mintemp_c, forecast.mintemp_f],
      info: [forecast.condition.icon, forecast.condition.text],
    });
  }

  return {
    location,
    current,
    days,
  };
}

export { processData };
