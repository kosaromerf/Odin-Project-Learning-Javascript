import { months, createObjective } from "./objectCreator";
import { displayChangesByDate, adjustTime } from "./dateCategorizing";
import { adjustDisplays } from "./mainDisplay";
import { displayChangesByProject } from "./projectManagement";

// array of created objective objects
let objectives = [];

function createItem() {
  let objective = createObjective(
    document.getElementById("newName").value,
    document.getElementById("projectSelector").value,
    document.getElementById("newDate").value,
    document.getElementById("newDuration").value,
    document.querySelector('input[name="priority"]:checked').id.slice(0, -3),
    "notes",
    false
  );

  return objective;
}

function addItem(objective) {
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
  checkbox.checked = objective.checklist;
  mainBody.appendChild(nameDisplay);
  mainBody.appendChild(dueDateDisplay);
  mainBody.appendChild(durationDisplay);
  document.getElementById("objTable").appendChild(mainBody);

  // adding classes to main body element

  mainBody.classList.add("objectives");

  // adding new oject to array
  if (!objectives.includes(objective)) {
    objectives.push(objective);
    mainBody.classList.add(
      document.getElementById("projectSelector").value.replaceAll(" ", "_")
    );
  } else {
    mainBody.classList.add(objective.project.replaceAll(" ", "_"));
  }

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

  checkbox.checked = objective.checklist;
  checkFinished(
    mainBody,
    checkbox,
    nameDisplay,
    dueDateDisplay,
    durationDisplay
  );
  adjustDisplays();
  checkboxCotainer.addEventListener("click", function () {
    checkFinished(
      mainBody,
      checkbox,
      nameDisplay,
      dueDateDisplay,
      durationDisplay
    );
    if (objective.checklist) {
      objective.checklist = false;
    } else {
      objective.checklist = true;
    }
    adjustDisplays();

    localStorage.setItem("objectives", JSON.stringify(objectives));
  });
  displayChangesByDate();
  displayChangesByProject();
  adjustDisplays();
  nameDisplay.addEventListener("click", function () {
    openNotesSection(objective, mainBody);
  });
} //---------------------------------------------------------------------------------------

function openNotesSection(objective, mainBody) {
  let notesBody = document.createElement("div");
  notesBody.classList.add("notes");
  let notes = document.createElement("h4");
  notes.innerText = "Additinal Notes";
  let noteInput = document.createElement("textarea");
  noteInput.value = objective.notes;
  let buttons = document.createElement("div");
  buttons.setAttribute("id", "buttons");
  let update = document.createElement("button");
  update.setAttribute("id", "update");
  update.innerText = "Update";
  let del = document.createElement("button");
  del.setAttribute("id", "del");
  del.innerText = "Delete";
  let close = document.createElement("button");
  close.setAttribute("id", "close");
  close.innerText = "Close";
  notesBody.appendChild(notes);
  notesBody.appendChild(noteInput);
  notesBody.appendChild(buttons);
  buttons.appendChild(update);
  buttons.appendChild(close);
  buttons.appendChild(del);

  document.getElementById("body").appendChild(notesBody);
  update.addEventListener("click", function () {
    objective.notes = noteInput.value;
    localStorage.setItem("objectives", JSON.stringify(objectives));
  });
  del.addEventListener("click", function () {
    objectives = objectives.filter((e) => e !== objective);
    mainBody.remove();
    notesBody.style.display = "none";
    localStorage.setItem("objectives", JSON.stringify(objectives));
    adjustDisplays();
  }); //--------------------------------------------------------------------

  close.addEventListener("click", function () {
    notesBody.style.display = "none";
  });
}

function checkFinished(
  mainBody,
  checkbox,
  nameDisplay,
  dueDateDisplay,
  durationDisplay
) {
  if (checkbox.checked) {
    mainBody.classList.add("finished");
    nameDisplay.classList.add("finished");
    dueDateDisplay.classList.add("finished");
    durationDisplay.classList.add("finished");
  } else {
    mainBody.classList.remove("finished");
    nameDisplay.classList.remove("finished");
    dueDateDisplay.classList.remove("finished");
    durationDisplay.classList.remove("finished");
  }
  adjustDisplays();
}

export { addItem, objectives, createItem };
