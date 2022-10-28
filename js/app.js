let num = document.getElementById("num");
let counter = 0;

setInterval(() => {
    if (counter != 9) {
        counter ++;
        num.textContent = counter;
    } else {
        clearInterval;
    }
}, 1000);