function openForm() {
  document.getElementById("addProjectForm").style.zIndex = "9";
}

function closeForm() {
  document.getElementById("addProjectForm").style.zIndex = "-1";
}

function addProject() {
  let newProjectName = document.getElementById("addProjectName");

  let newProjectItem = document.createElement("li");
  newProjectItem.classList.add("project");

  let projectChanger = document.createElement("button");
  projectChanger.classList.add("projectGroups");
  projectChanger.innerText = newProjectName.value;

  document.getElementById("projectList").appendChild(newProjectItem);

  newProjectItem.appendChild(projectChanger);

  let option = document.createElement("option");
  option.innerText = newProjectName.value;
  document.getElementById("projectSelector").appendChild(option);
  newProjectName.value = "";
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
export { openForm, closeForm, addProject, displayChangesByProject };
