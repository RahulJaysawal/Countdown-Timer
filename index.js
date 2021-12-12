const day = document.getElementById("days");
const hoursE1 = document.getElementById("hours");
const minsE1 = document.getElementById("mins");
const secondsE1 = document.getElementById("seconds");

const newyears = '4 jan 2022';


function countdown(){
const newyeardate = new Date(newyears);
const currentdate = new Date();
const totalseconds  = (newyeardate - currentdate) / 1000;
// const seconds = (newyeardate - currentdate) * 1000;
const days = Math.floor(totalseconds / 3600 / 24);
const hours = Math.floor(totalseconds / 3600) % 24;
const mins = Math.floor(totalseconds / 60) % 60;
const seconds = Math.floor(totalseconds) % 60;

    day.innerHTML = days;
    hoursE1.innerHTML = formatTime(hours);
    minsE1.innerHTML = formatTime(mins);
    secondsE1.innerHTML = formatTime(seconds);
}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}
countdown();
setInterval(countdown,1000)