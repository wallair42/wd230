

let daynames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

let months = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

let d = new Date();
let dayName = daynames[d.getDay()];
let monthName = months[d.getMonth()];
let fulldate = dayName + ", " + monthName + " " + d.getDate() +
    ", " + d.getFullYear();


document.getElementById("date").innerHTML =  fulldate;

document.getElementById("current-year").innerHTML = d.getFullYear();

let lastModified = document.lastModified;
document.getElementById("last-modified").innerHTML = lastModified;





