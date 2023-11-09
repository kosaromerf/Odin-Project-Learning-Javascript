function displayContact() {
  let contactInfo = document.createElement("div");
  contactInfo.classList.add("gallery");
  content.appendChild(contactInfo);

  let contantContainer = document.createElement("div");
  contantContainer.classList.add("container");

  contactInfo.appendChild(contantContainer);

  let styleContact = document.createElement("pre");
  styleContact.innerHTML = "Adress : 221B Bakerstreet London/England";
  contantContainer.appendChild(styleContact);

  return contactInfo;
}

export { displayContact };
