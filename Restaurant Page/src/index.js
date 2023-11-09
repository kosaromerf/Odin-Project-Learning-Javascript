import { displayHome } from "./home.js";

let content = document.getElementById("content");
let header = document.createElement("header");
let restaurantName = document.createElement("h1");
restaurantName.innerText = "Second BreakFast";
let restaurantMotto = document.createElement("h4");
restaurantMotto.innerText = "We've had one, yes. What about second breakfast?";
let navigation = document.createElement("nav");

let homePageLink = document.createElement("button");
homePageLink.innerText = "Home";
let menuPageLink = document.createElement("button");
menuPageLink.innerText = "Menu";
let contactPageLink = document.createElement("button");
contactPageLink.innerText = "Contact";

content.appendChild(header);
header.appendChild(restaurantName);
header.appendChild(restaurantMotto);
header.appendChild(navigation);
navigation.appendChild(homePageLink);
navigation.appendChild(menuPageLink);
navigation.appendChild(contactPageLink);

let blankHome = document.createElement("div");
blankHome.classList.add("gallery");
content.appendChild(blankHome);

homePageLink.addEventListener("click", function () {
  if (content.contains(blankHome)) {
    content.removeChild(blankHome);
  }

  let existingHomeGallery = content.querySelector(".gallery");

  if (!existingHomeGallery) {
    let homeGallery = displayHome();
    content.appendChild(homeGallery);
  }
});
