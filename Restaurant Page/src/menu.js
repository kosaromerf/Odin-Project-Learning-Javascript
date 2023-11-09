function displayMenu() {
  let menuItems = document.createElement("div");
  menuItems.classList.add("gallery");
  content.appendChild(menuItems);

  let menuContainer = document.createElement("div");
  menuContainer.classList.add("container");

  menuItems.appendChild(menuContainer);
  for (let i = 7; i >= 1; i--) {
    let images = document.createElement("div");
    images.classList.add("image");
    images.style.content = `url(img/${i}.jpg)`;
    menuContainer.appendChild(images);
  }

  return menuItems;
}

export { displayMenu };
