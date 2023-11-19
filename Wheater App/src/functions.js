import { imperialDom, metricDom } from "./manipulationDOM";
import { displayData } from "./getAPI";

function getLocation() {
  if (document.getElementById("locationInput").value) {
    return document.getElementById("locationInput").value;
  }
  return "london";
}

function getUnit() {
  if (document.getElementById("unitSelection").innerText == "Metric/°C") {
    document.getElementById("unitSelection").innerText = "Imperial/°F";
    imperialDom(displayData);
  } else {
    document.getElementById("unitSelection").innerText = "Metric/°C";
    metricDom(displayData);
  }
}

export { getLocation, getUnit };
