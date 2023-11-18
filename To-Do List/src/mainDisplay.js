function adjustDisplays() {
  document.getElementById("objectiveDisplay").innerHTML = `${
    document.querySelectorAll(".objectives:not(.hidden.finished)").length
  } projects`;

  let tot = 0;
  document
    .querySelectorAll(".objectives:not(.hidden.finished)")
    .forEach((e) => {
      let lastChild = e.lastElementChild;
      if (lastChild.innerText) {
        let splitTime = lastChild.innerText.split(":");
        tot += 60 * Number(splitTime[0]) + Number(splitTime[1]);
      }
    });

  document.getElementById("timeDisplay").innerText = `${Math.floor(tot / 60)}h${
    tot % 60
  }min`;
}

export { adjustDisplays };
