const day = document.querySelector("#day");
const week = document.querySelector("#week");
const month = document.querySelector("#month");
const year = document.querySelector("#year");

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weeks = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const now = new Date();

day.innerText = now.getDate();
year.innerText = now.getFullYear();
let monthText = now.getMonth();
let weekText = now.getDay();
month.innerText = months[monthText];
week.innerText = weeks[weekText];
