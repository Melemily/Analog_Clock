const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();
console.log(date);
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
console.log("Hour: " + hr + " Minute: " + min + " Second: " + sec);

let hrPosition = (hr*360/12) + (min*(360/60)/12);
let minPosition = (min*360/60) + (sec*(360/60)/60); 
let secPosition = sec*360/60; 

function runTheClock() {

    hrPosition = hrPosition + (3/360); //positioning these three below the next part of the function would slow the clock down by a second!
    minPosition = minPosition + (6/60);
    secPosition = secPosition + 6;
    
    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";

}

var interval = setInterval(runTheClock, 1000);

//downside to this code is the browser is in charge of the JS, so if the browser throttles the JS, the time will be incorrect.
//this code was made to fix the animation of the clockhands, so it's purely aesthetic and the old code is a failsafe for accurate timekeeping since it's determined by external global date/time. 
