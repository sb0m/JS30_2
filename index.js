function setDate(secondHand, minuteHand, hourHand) {
    // runs every second
    let now = new Date();
    let seconds = now.getSeconds();
    let minutes = now.getMinutes();
    let hours = now.getHours();
    /* turn it into degree + 90 because of the offset we already have in css */
    let secondsDegrees = ((seconds / 60) * 360) + 90;
    let minutesDegrees = ((minutes / 60) * 360) + 90;
    let hoursDegrees = ((hours / 12) * 360) + 90;
    // console.log(seconds + " " + secondsDegrees);
    //rotation every second
    secondHand.style.transform = (`rotate(${secondsDegrees}deg)`);
    minuteHand.style.transform = (`rotate(${minutesDegrees}deg)`);
    hourHand.style.transform = (`rotate(${hoursDegrees}deg)`);
}

window.onload = function () {
    var secondHand = document.querySelector('.second-hand');
    var minuteHand = document.querySelector('.min-hand');
    var hourHand = document.querySelector('.hour-hand');
    // runs every specified time intervall (1000ms: second)
    // sytax so that the function is not executed right away
    setInterval(function () { setDate(secondHand, minuteHand, hourHand); }, 1000);
}