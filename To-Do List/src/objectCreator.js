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

export { createObjective, months };
