import { processData } from "./process";
import { createDOM } from "./manipulationDOM";
let displayData;
function getDataFromAPI(location, keyAPI = "c98cf4bc2c774097a3530534232707") {
  fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=${keyAPI}&q=${location}&days=3&aqi=no&alerts=no`,
    {
      mode: "cors",
    }
  )
    .then((response) => response.json())
    .then((data) => {
      displayData = processData(data);

      createDOM(displayData);

      console.log(displayData);
      console.log(data);
    })
    .catch((error) => {
      console.log("Error fetching data:", error);
    });
}

export { getDataFromAPI, displayData };
