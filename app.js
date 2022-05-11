// The idea of this code is to always check for the present date and subtract it in milliseconds from the countdown date, while onstantly updating
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

// Present date
let tempDate = new Date ();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// let futureDate = new Date(2022, 4, 30, 8, 21, 0);
//Date to count down to
const futureDate = new Date(tempYear,tempMonth, tempDay + 10,11,30,0)
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];

const date = futureDate.getDate();
let weekDay = futureDate.getDay();
weekDay = weekdays[weekDay];

giveaway.textContent = `Rush starts on ${weekDay} ${date} ${month} ${year} ${hours}:${mins}am`;

// future time in milliseconds
const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const time = futureTime - today;

  //calculate for milliseconds
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  let days = time / oneDay;
  days = Math.floor(days);

  let hours = Math.floor((time % oneDay) / oneHour);
  let minutes = Math.floor((time % oneHour) / oneMinute);
  let seconds = Math.floor((time % oneMinute) / 1000);

  // set values array
  const values = [days, hours, minutes, seconds];

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  format(values);
  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });
  if(time < 0){
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class ="expired">Sorry this rush has started</h4>`
  }
}
//countdown
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();
