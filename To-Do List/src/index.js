import { createObjective, months } from "./objectCreator";
import {
  openForm,
  closeForm,
  addProject,
  displayChangesByProject,
  projects,
  getNewProjectName,
} from "./projectManagement";
import { adjustTime, displayChangesByDate } from "./dateCategorizing";
import { adjustDisplays } from "./mainDisplay";
import { objectives, addItem, createItem } from "./domManipulation";

//dont know where to put it while refactoring i will consider it

document.querySelectorAll(".project").forEach((e) => {
  document
    .getElementById("projectSelector")
    .appendChild(document.createElement("option")).innerText = e.innerText;
}); //-------------------------------------------------------------------------------
//initilizing the page onload
displayChangesByDate();
displayChangesByProject();
adjustDisplays();

// open and close +Add Project window
document.getElementById("addProject").addEventListener("click", openForm);
document.getElementById("closeButton").addEventListener("click", closeForm);
// adding a new project
document.getElementById("addButton").addEventListener("click", function () {
  addProject(getNewProjectName());
});
// adjusting the main display when a category is selected
document
  .querySelectorAll(".categoryBtn")
  .forEach((e) => e.addEventListener("click", adjustDisplays));

// main logic of creating objects and adding to display
document.getElementById("addObjective").addEventListener("click", function () {
  addItem(createItem());
  localStorage.setItem("projects", JSON.stringify(projects));
  localStorage.setItem("objectives", JSON.stringify(objectives));
});
//add notes when click on the objective main body-----------------------------------------------------
let storedProjects = localStorage.getItem("projects");
let storedObjectives = localStorage.getItem("objectives");

if (storedProjects) {
  projects = JSON.parse(storedProjects);

  projects.forEach((e) => {
    addProject(e);
  });
  displayChangesByProject();
}

if (storedObjectives) {
  objectives = JSON.parse(storedObjectives);

  objectives.forEach((e) => {
    addItem(e);
  });
}
