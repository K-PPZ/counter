let num = document.getElementById("num");
let counter = 0;

setInterval(() => {
    counter ++;
    num.textContent = counter;
}, 1000);