import { months, createObjective } from "./objectCreator";
import { displayChangesByDate, adjustTime } from "./dateCategorizing";
import { adjustDisplays } from "./mainDisplay";
import { displayChangesByProject } from "./projectManagement";

// array of created objective objects
let objectives = [];

function addItem() {
  let objective = createObjective(
    document.getElementById("newName").value,
    document.getElementById("projectSelector").value,
    document.getElementById("newDate").value,
    document.getElementById("newDuration").value,
    "unselected",
    "notes*",
    "checklist*"
  );
  // adding new oject to array

  objectives.push(objective);

  // creating DOM elements

  let mainBody = document.createElement("tr");
  let checkboxCotainer = document.createElement("td");
  let checkbox = document.createElement("input");
  let nameDisplay = document.createElement("td");
  let dueDateDisplay = document.createElement("td");
  let durationDisplay = document.createElement("td");

  // adding child elements to main body
  mainBody.appendChild(checkboxCotainer);
  checkboxCotainer.appendChild(checkbox);
  checkbox.setAttribute("type", "checkbox");
  mainBody.appendChild(nameDisplay);
  mainBody.appendChild(dueDateDisplay);
  mainBody.appendChild(durationDisplay);
  document.getElementById("objTable").appendChild(mainBody);

  // adding classes to main body element

  mainBody.classList.add("objectives");
  mainBody.classList.add(
    document.getElementById("projectSelector").value.replaceAll(" ", "_")
  );

  mainBody.classList.add(adjustTime());

  //due date display frmat adjusment

  if (objective.dueDate) {
    dueDateDisplay.innerText = `${objective.dueDate.split("-")[2]} ${
      months[objective.dueDate.split("-")[1]]
    }`;
  } else {
    dueDateDisplay.innerText = "";
  }

  //taking data from abject to display

  nameDisplay.innerText = objective.title;
  durationDisplay.innerText = objective.duration;

  document.querySelectorAll(".priority").forEach((e) => {
    if (e.checked) {
      objective.priority = e.id.slice(0, -3);
    }
  });
  switch (objective.priority) {
    case "low":
      nameDisplay.style = "color:green";
      dueDateDisplay.style = "color:green";
      durationDisplay.style = "color:green";
      break;
    case "normal":
      nameDisplay.style = "color:black";
      dueDateDisplay.style = "color:black";
      durationDisplay.style = "color:black";
      break;
    case "high":
      nameDisplay.style = "color:red";
      dueDateDisplay.style = "color:red";
      durationDisplay.style = "color:red";
      break;
  }

  displayChangesByDate();
  displayChangesByProject();
  adjustDisplays();
}

export { addItem, objectives };
