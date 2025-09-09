const days = document.querySelector("#days");
const dateTitle = document.querySelector("#date");
const prevButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");

let currentDate = new Date(2025, 6, 1);

const MONTHS_NL = [
  "januari","februari","maart","april","mei","juni",
  "juli","augustus","september","oktober","november","december"
];

function renderMonth() {

  days.innerHTML = "";

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  let firstDayOfMonth = new Date(year, month, 1).getDay();
  if (firstDayOfMonth === 0) firstDayOfMonth = 7;

  const lastDayOfMonth = new Date(year, month + 1, 0);
  const numberOfDays = lastDayOfMonth.getDate();

  for (let i = 0; i < firstDayOfMonth - 1; i++) {
    const emptyDay = document.createElement("li");
    emptyDay.className = "empty";
    days.appendChild(emptyDay);
  }

  for (let d = 1; d <= numberOfDays; d++) {
    const li = document.createElement("li");
    li.className = "day";
    li.textContent = d;
    days.appendChild(li);
  }

  dateTitle.textContent = `${capitalize(MONTHS_NL[month])} ${year}`;
}

function nextMonth() {
  currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
  renderMonth();
}

function prevMonth() {
  currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
  renderMonth();
}

nextButton.addEventListener("click", nextMonth);
prevButton.addEventListener("click", prevMonth);

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

renderMonth();