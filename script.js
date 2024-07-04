let timer;
let isRunning = false;
let startTime;
let elapsedTime = 0;

const display = document.getElementById('display');
const startStopButton = document.getElementById('startStop');
const resetButton = document.getElementById('reset');

function formatTime(time) {
    const date = new Date(time);
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');
    const seconds = String(date.getUTCSeconds()).padStart(2, '0');
    const milliseconds = String(date.getUTCMilliseconds()).padStart(3, '0').slice(0, 2);
    return `${minutes}:${seconds}.${milliseconds}`;
}

function updateDisplay() {
    const currentTime = Date.now();
    const timeElapsed = elapsedTime + (currentTime - startTime);
    display.textContent = formatTime(timeElapsed);
}

function start() {
    startTime = Date.now();
    timer = setInterval(updateDisplay, 10);
    startStopButton.textContent = 'Stop';
    isRunning = true;
}

function stop() {
    clearInterval(timer);
    elapsedTime += Date.now() - startTime;
    startStopButton.textContent = 'Start';
    isRunning = false;
}

function reset() {
    clearInterval(timer);
    elapsedTime = 0;
    display.textContent = '00:00:00.00';
    startStopButton.textContent = 'Start';
    isRunning = false;
}

startStopButton.addEventListener('click', () => {
    if (isRunning) {
        stop();
    } else {
        start();
    }
});

resetButton.addEventListener('click', reset);
