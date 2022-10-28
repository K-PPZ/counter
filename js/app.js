let num = document.getElementById("num");
let heures = 0;
let min = 0;
let sec = 0;

setInterval(() => {
    sec ++;
    if (sec == 59) {
        sec;
        sec = 0;
        min ++;
    }

    if (min == 59) {
        min;
        min = 0;
        heures ++;
    }

    if (sec < 10) {
        sec = "0" + sec;
        num.textContent = "0" + heures + ":" + "0" + min + ":" + "0" + sec;
    }
    if (min < 10) {
        num.textContent = "0" + heures + ":" + "0" + min + ":" + "0" + sec;
    }
    if (heures < 10) {
        num.textContent = "0" + heures + ":" + "0" + min + ":" + "0" + sec;
    } else {
        num.textContent = heures + ":" + min + ":" + sec;
    }
}, 1000);