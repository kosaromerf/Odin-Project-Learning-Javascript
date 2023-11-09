import { displayHome } from "./home.js";
import { displayContact } from "./contact.js";
import { displayMenu } from "./menu.js";

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
  const galleryElements = content.querySelectorAll(".gallery");
  galleryElements.forEach(function (element) {
    element.remove();
  });
  let homeGallery = displayHome();
  content.appendChild(homeGallery);
});

contactPageLink.addEventListener("click", function () {
  const galleryElements = content.querySelectorAll(".gallery");
  galleryElements.forEach(function (element) {
    element.remove();
  });
  let contactInfo = displayContact();
  content.appendChild(contactInfo);
});

menuPageLink.addEventListener("click", function () {
  const galleryElements = content.querySelectorAll(".gallery");
  galleryElements.forEach(function (element) {
    element.remove();
  });
  let menuItems = displayMenu();
  content.appendChild(menuItems);
});
