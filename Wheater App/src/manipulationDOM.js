function createDOM(displayData) {
  if (document.getElementById("unitSelection").innerText == "Metric/°C") {
    metricDom(displayData);
  } else {
    imperialDom(displayData);
  }
}

function metricDom(displayData) {
  document.getElementById(
    "temp"
  ).innerText = `${displayData.current.temp[0]}°C`;
  document.getElementById(
    "feeling"
  ).innerText = `${displayData.current.feelTemp[0]}°C`;
  document.getElementById(
    "pressure"
  ).innerText = `${displayData.current.pressure[0]}mb`;
  document.getElementById(
    "wind"
  ).innerText = `${displayData.current.wind[0]}kph`;
  document.getElementById(
    "visibility"
  ).innerText = `${displayData.current.visibility[0]}km`;
  document.getElementById("infoText").innerText = displayData.current.info[1];
  document.getElementById("infoImg").src = displayData.current.info[0];
  document.getElementById("humidity").innerText = displayData.current.humidity;
  if (document.querySelectorAll(".date").length == 0) {
    createForecastDom(displayData);
  }
  for (let i = 0; i < 3; i++) {
    document.getElementById(`avgTemp${i}`).innerText =
      displayData.days[i].temp[0];
    document.getElementById(`minTemp${i}`).innerText =
      displayData.days[i].minimumTemp[0];
    document.getElementById(`maxTemp${i}`).innerText =
      displayData.days[i].maximumTemp[0];
  }
}

function imperialDom(displayData) {
  document.getElementById(
    "temp"
  ).innerText = `${displayData.current.temp[1]}°F`;
  document.getElementById(
    "feeling"
  ).innerText = `${displayData.current.feelTemp[1]}°F`;
  document.getElementById(
    "pressure"
  ).innerText = `${displayData.current.pressure[1]}in`;
  document.getElementById(
    "wind"
  ).innerText = `${displayData.current.wind[1]}mph`;
  document.getElementById(
    "visibility"
  ).innerText = `${displayData.current.visibility[0]}miles`;
  document.getElementById("infoText").innerText = displayData.current.info[1];
  document.getElementById("infoImg").src = displayData.current.info[0];
  document.getElementById("humidity").innerText = displayData.current.humidity;

  if (document.querySelectorAll(".date").length == 0) {
    createForecastDom(displayData);
  }
  for (let i = 0; i < 3; i++) {
    document.getElementById(`avgTemp${i}`).innerText =
      displayData.days[i].temp[1];
    document.getElementById(`minTemp${i}`).innerText =
      displayData.days[i].minimumTemp[1];
    document.getElementById(`maxTemp${i}`).innerText =
      displayData.days[i].maximumTemp[1];
  }
}

function createForecastDom(displayData) {
  displayData.days.forEach((e, index) => {
    let forecastContainer = document.createElement("div");
    forecastContainer.classList.add("forecastContainer");

    let date = document.createElement("div");
    date.classList.add("date");
    let image = document.createElement("img");
    date.classList.add("infoImg");

    let avgTemp = document.createElement("div");
    avgTemp.classList.add("avgTemp");
    avgTemp.id = `avgTemp${index}`;
    let minTemp = document.createElement("div");
    minTemp.classList.add("minTemp");
    minTemp.id = `minTemp${index}`;
    let maxTemp = document.createElement("div");
    maxTemp.classList.add("maxTemp");
    maxTemp.id = `maxTemp${index}`;
    let rain = document.createElement("div");
    rain.classList.add("rain");
    let snow = document.createElement("div");
    snow.classList.add("snow");
    let snowHeight = document.createElement("div");
    snowHeight.classList.add("snowHeight");

    document.getElementById("forecast").appendChild(forecastContainer);
    forecastContainer.appendChild(date);
    forecastContainer.appendChild(image);
    forecastContainer.appendChild(avgTemp);
    forecastContainer.appendChild(minTemp);
    forecastContainer.appendChild(maxTemp);
    forecastContainer.appendChild(rain);
    forecastContainer.appendChild(snow);

    date.innerText = e.forecastDate;
    image.src = e.info[0];
    rain.innerText = e.rain;
    snow.innerText = e.snow[0];
    snowHeight = e.snow[1];
  });
}

export { createDOM, imperialDom, metricDom };
