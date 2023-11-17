function adjustDisplays() {
  let visibleProjects = document.querySelectorAll(".objectives:not(.hidden)");
  let objectiveDisplay = document.getElementById("objectiveDisplay");

  objectiveDisplay.innerHTML = `${visibleProjects.length} projects`;

  //--------------------------------------------
  let tot = 0;
  let firstDisplay = visibleProjects.forEach((e) => {
    let lastChild = e.lastElementChild;
    if (lastChild.innerText) {
      let splitTime = lastChild.innerText.split(":");
      let totalMinutes = 60 * Number(splitTime[0]) + Number(splitTime[1]);
      tot += totalMinutes;
    }
  });

  let timeDisplay = document.getElementById("timeDisplay");
  timeDisplay.innerText = `${Math.floor(tot / 60)}h${tot % 60}min`;
} //-------------------------------------------------------------------------------------------

export { adjustDisplays };
