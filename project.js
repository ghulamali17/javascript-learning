function colorGen() {
    let color = "0123456789ABCDEF";
    let hashh = "#";
    for (let i = 0; i < 6; i++) {
        hashh += Math.floor(Math.random() * 16).toString(16);
    }
    return hashh;
}

let start = document.getElementById("start");
let stop = document.getElementById("stop");
let intervalId;

function changBgColor() {
    document.body.style.backgroundColor = colorGen();
}

start.addEventListener('click', () => {
    intervalId = setInterval(changBgColor, 1000);
});

stop.addEventListener('click', () => {
    clearInterval(intervalId);
});
