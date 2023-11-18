function openForm() {
  document.getElementById("addProjectForm").style.zIndex = "9";
}

function closeForm() {
  document.getElementById("addProjectForm").style.zIndex = "-1";
}
let projects = [];

function getNewProjectName() {
  return document.getElementById("addProjectName").value;
}

function addProject(projectName) {
  if (!projects.includes(projectName)) {
    projects.push(projectName);
  }

  let newProjectItem = document.createElement("li");
  newProjectItem.classList.add("project");

  let projectChanger = document.createElement("button");
  projectChanger.classList.add("projectGroups");
  projectChanger.innerText = projectName;

  document.getElementById("projectList").appendChild(newProjectItem);

  newProjectItem.appendChild(projectChanger);
  localStorage.setItem("projects", JSON.stringify(projects));
  let option = document.createElement("option");
  option.innerText = projectName;
  document.getElementById("projectSelector").appendChild(option);
} //-----------------------------------------------------------------------------------------

function displayChangesByProject() {
  document.querySelectorAll(".projectGroups").forEach((e) => {
    e.addEventListener("click", function () {
      let pGroups = document.querySelectorAll(".objectives");
      pGroups.forEach((f) => {
        if (!f.classList.contains(`${e.innerText.replaceAll(" ", "_")}`)) {
          f.classList.add("hidden");
        } else {
          f.classList.remove("hidden");
        }
        document.getElementById("mainDisplay").innerText = e.innerText;
      });
    });
  });
}
export {
  openForm,
  closeForm,
  addProject,
  displayChangesByProject,
  projects,
  getNewProjectName,
};
