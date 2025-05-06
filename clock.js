function updateClock() {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    if (hours > 12) {
        hours = hours - 12;
    }

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    let time = hours + ":" + minutes + ":" + seconds;
    document.getElementById('clock').textContent = time;
}

updateClock();
setInterval(updateClock, 1000);