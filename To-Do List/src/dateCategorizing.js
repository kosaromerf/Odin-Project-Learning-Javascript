function adjustTime() {
  let objDate = document.getElementById("newDate");

  let currentYear = new Date().getFullYear();
  let currentMonth = new Date().getMonth() + 1;
  let currentDate = new Date().getDate();

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
} //---------------------------------------------------------------------------------------------

function displayChangesByDate() {
  document.querySelectorAll(".timeGroups").forEach((e) =>
    e.addEventListener("click", function () {
      document.querySelectorAll(".objectives").forEach((f) => {
        if (!f.classList.contains(e.id)) {
          f.classList.add("hidden");
        } else {
          f.classList.remove("hidden");
        }
        document.getElementById("mainDisplay").innerText = e.innerText;
      });
    })
  );

  document.getElementById("all").addEventListener("click", function () {
    document
      .querySelectorAll(".objectives")
      .forEach((e) => e.classList.remove("hidden"));
    document.getElementById("mainDisplay").innerText = "All Time";
  });
}
export { adjustTime, displayChangesByDate };
