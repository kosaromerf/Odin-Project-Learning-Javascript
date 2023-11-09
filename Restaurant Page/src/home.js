function displayHome() {
  let homeGallery = document.createElement("div");
  homeGallery.classList.add("gallery");
  content.appendChild(homeGallery);

  let galleryContainer = document.createElement("div");
  galleryContainer.classList.add("container");

  homeGallery.appendChild(galleryContainer);
  for (let i = 1; i <= 7; i++) {
    let images = document.createElement("div");
    images.classList.add("image");
    images.style.content = `url(img/${i}.jpg)`;
    galleryContainer.appendChild(images);
  }

  return homeGallery;
}

export { displayHome };
