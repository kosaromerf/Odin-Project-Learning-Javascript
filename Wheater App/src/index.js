import { getDataFromAPI } from "./getAPI";
import { getLocation, getUnit } from "./functions";

document.getElementById("getData").addEventListener("click", function () {
  getDataFromAPI(getLocation());
});

document.getElementById("unitSelection").addEventListener("click", function () {
  getUnit();
});

// console.log(getDataFromAPI("ankara")[0]);

/* 
current: 

    cloud: 75
    condition: 
        code: 1276
        icon: "//cdn.weatherapi.com/weather/64x64/night/389.png"
        text: "Moderate or heavy rain with thunder"

    feelslike_c: 4
    feelslike_f: 39.2
    gust_kph: 19
    gust_mph: 11.8
    humidity: 93
    is_day: 0
    last_updated: "2023-11-18 21:00"
    last_updated_epoch: 1700330400
    precip_in: 0.03
    precip_mm: 0.73
    pressure_in: 29.5
    pressure_mb: 999
    temp_c: 7
    temp_f: 44.6
    uv: 1
    vis_km: 7
    vis_miles: 4
    wind_degree: 220
    wind_dir: "SW"
    wind_kph: 16.9
    wind_mph: 10.5

location: 
    country: "Turkey"
    lat: 39.93
    localtime: "2023-11-18 21:01"
    localtime_epoch: 1700330507
    lon: 32.86
    name: "Ankara"
    region: "Ankara"
    tz_id: "Europe/Istanbul"

 */

/* getDataFromAPI("ankara")
  .then(() => {
    console.log("Weather data fetched and stored globally.");
  })
  .catch((error) => {
    console.log("Error:", error);
  });

setTimeout(() => {
  console.log(weatherData); // Accessing weatherData after a delay
}, 1000);
 */
