const createObjective = (
  title,
  project,
  dueDate,
  duration,
  priority,
  notes,
  checklist
) => {
  return { title, project, dueDate, duration, priority, notes, checklist };
};

let months = {
  "01": "Jan",
  "02": "Feb",
  "03": "Mar",
  "04": "Apr",
  "05": "May",
  "06": "Jun",
  "07": "Jul",
  "08": "Agu",
  "09": "Sep",
  10: "Oct",
  11: "Nov",
  12: "Dec",
};

let objectives = [];

let addItem = document.getElementById("addObjective");

let objName = document.getElementById("newName");

let objDate = document.getElementById("newDate");

let objDuration = document.getElementById("newDuration");

let prioritySelector = document.querySelectorAll(".priority");

let projectSelect = document.getElementById("projectSelector");

let projectList = document.getElementById("projectList");

let projects = document.querySelectorAll(".project");

for (let project of projects) {
  let option = document.createElement("option");

  option.innerText = project.innerText;
  projectSelect.appendChild(option);
}

let objTable = document.getElementById("objTable");
addItem.addEventListener("click", function () {
  let objective = createObjective(
    objName.value,
    projectSelect.value,
    objDate.value,
    objDuration.value,
    "unselected",
    "notes*",
    "checklist*"
  );

  objectives.push(objective);
  let a = document.createElement("tr");
  a.classList.add("objectives");
  let b1 = document.createElement("td");
  let c = document.createElement("input");
  a.appendChild(b1);
  b1.appendChild(c);
  c.setAttribute("type", "checkbox");
  let b2 = document.createElement("td");
  b2.innerText = objective.title;
  a.appendChild(b2);
  let b3 = document.createElement("td");
  if (objective.dueDate) {
    b3.innerText = `${objective.dueDate.split("-")[2]} ${
      months[objective.dueDate.split("-")[1]]
    }`;
  } else {
    b3.innerText = "";
  }
  a.appendChild(b3);
  let b4 = document.createElement("td");
  b4.innerText = objective.duration;
  a.appendChild(b4);
  objTable.appendChild(a);

  prioritySelector.forEach((e) => {
    if (e.checked) {
      objective.priority = e.id.slice(0, -3);
    }
  });
  switch (objective.priority) {
    case "low":
      b2.style = "color:green";
      b3.style = "color:green";
      b4.style = "color:green";
      break;
    case "normal":
      b2.style = "color:black";
      b3.style = "color:black";
      b4.style = "color:black";
      break;
    case "high":
      b2.style = "color:red";
      b3.style = "color:red";
      b4.style = "color:red";
      break;
  }
  a.classList.add(projectSelect.value.replaceAll(" ", "_"));

  a.classList.add(adjustTime());

  console.log(a);

  displayChangesByProject();
});

function openForm() {
  document.getElementById("addProjectForm").style.zIndex = "9";
}

function closeForm() {
  document.getElementById("addProjectForm").style.zIndex = "-1";
}

let newProjectButton = document.getElementById("addProject");
newProjectButton.addEventListener("click", openForm);

let closeButton = document.getElementById("closeButton");
closeButton.addEventListener("click", closeForm);

function addProject() {
  let newProjectName = document.getElementById("addProjectName");
  let newProjectItem = document.createElement("li");
  newProjectItem.classList.add("project");
  let projectChanger = document.createElement("button");
  projectChanger.classList.add("projectGroups");

  projectChanger.innerText = newProjectName.value;

  projectList.appendChild(newProjectItem);
  newProjectItem.appendChild(projectChanger);

  let option = document.createElement("option");
  option.innerText = newProjectName.value;
  projectSelect.appendChild(option);
  newProjectName.value = "";
}

let addButton = document.getElementById("addButton");
addButton.addEventListener("click", addProject);

let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth() + 1;
let currentDate = new Date().getDate();

function adjustTime() {
  let selectedYear = new Date(objDate.value).getFullYear();
  let selectedMonth = new Date(objDate.value).getMonth() + 1;
  let selectedDate = new Date(objDate.value).getDate();

  if (
    selectedYear == currentYear &&
    selectedMonth == currentMonth &&
    selectedDate == currentDate
  ) {
    return "today";
  } else {
    const diffInTime = new Date(objDate.value).getTime() - new Date().getTime();
    const diffInDays = Math.ceil(diffInTime / (1000 * 3600 * 24));

    if (diffInDays == 1) {
      return "tomorrow";
    } else if (diffInDays > 1) {
      return "planned";
    } else if (new Date(objDate.value) < new Date()) {
      return "late";
    } else {
      return "undated";
    }
  }
}

function displayChangesByDate() {
  let today = document.getElementById("today");
  let tomorrow = document.getElementById("tomorrow");
  let planned = document.getElementById("planned");
  let late = document.getElementById("late");
  let undated = document.getElementById("undated");
  let showAll = document.getElementById("all");

  let timeGroups;

  today.addEventListener("click", function () {
    timeGroups = document.querySelectorAll(".objectives");

    timeGroups.forEach((e) => {
      if (!e.classList.contains("today")) {
        e.classList.add("hidden");
      } else {
        e.classList.remove("hidden");
      }
    });
  });

  tomorrow.addEventListener("click", function () {
    timeGroups = document.querySelectorAll(".objectives");
    timeGroups.forEach((e) => {
      if (!e.classList.contains("tomorrow")) {
        e.classList.add("hidden");
      } else {
        e.classList.remove("hidden");
      }
    });
  });

  planned.addEventListener("click", function () {
    timeGroups = document.querySelectorAll(".objectives");
    timeGroups.forEach((e) => {
      if (!e.classList.contains("planned")) {
        e.classList.add("hidden");
      } else {
        e.classList.remove("hidden");
      }
    });
  });
  late.addEventListener("click", function () {
    timeGroups = document.querySelectorAll(".objectives");
    timeGroups.forEach((e) => {
      if (!e.classList.contains("late")) {
        e.classList.add("hidden");
      } else {
        e.classList.remove("hidden");
      }
    });
  });
  undated.addEventListener("click", function () {
    timeGroups = document.querySelectorAll(".objectives");
    timeGroups.forEach((e) => {
      if (!e.classList.contains("undated")) {
        e.classList.add("hidden");
      } else {
        e.classList.remove("hidden");
      }
    });
  });

  showAll.addEventListener("click", function () {
    timeGroups = document.querySelectorAll(".objectives");
    timeGroups.forEach((e) => e.classList.remove("hidden"));
  });
}

displayChangesByDate();

//---------------------------------

function displayChangesByProject() {
  let projectGroups = document.querySelectorAll(".projectGroups");

  projectGroups.forEach((e) => {
    e.addEventListener("click", function () {
      let pGroups = document.querySelectorAll(".objectives");
      pGroups.forEach((f) => {
        if (!f.classList.contains(`${e.innerText.replaceAll(" ", "_")}`)) {
          f.classList.add("hidden");
        } else {
          f.classList.remove("hidden");
        }
      });
    });
  });
}

displayChangesByDate();
