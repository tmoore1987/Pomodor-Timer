const timer = document.getElementById('timer')
const startBtn = document.getElementById('start')
const stopBtn = document.getElementById('stop')
const resetbtn = document.getElementById('reset')

let interval;
let timeLeft = 1500

const updateTimer = () => {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    let formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`

    timer.innerText = formattedTime;

}

const startTimer = () => {
    interval = setInterval(()=> {
        timeLeft--;
        updateTimer()
        if (timeLeft ===0) {
            clearInterval(interval);
            alert(`Time's Up!`);
            timeLeft = 1500
            updateTimer()
        }
    },1000)
}

const stopTimer = () => {
    clearInterval(interval);
    
}

const resetTimer = () => {
    clearInterval(interval);
    timeLeft = 1500;
    updateTimer()
    
}



startBtn.addEventListener('click', startTimer)
stopBtn.addEventListener('click', stopTimer)
resetbtn.addEventListener('click', resetTimer)

