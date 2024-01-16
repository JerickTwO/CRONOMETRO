const stopWatch = document.getElementById('stopwatch');
const playPauseButton = document.getElementById('play-pause');
const secondSphere = document.getElementById('second-sphere');
const thirdSphere = document.getElementById('third-sphere');

let stopWatchInterval;
let runningTime = 0;


const playPause = () => {
    const isPaused = !playPauseButton.classList.contains('running');
    if (isPaused) {
        playPauseButton.classList.add('running');
        start();
    } else {
        playPauseButton.classList.remove('running');
        pause();
    }
}
const pause = () => {
    secondSphere.style.animationPlayState = 'paused';
    thirdSphere.style.animationPlayState = 'paused';
    clearInterval(stopWatchInterval);
}
const start = () => {
    thirdSphere.style.animation  = 'rotacion 60 linear infinite';
    secondSphere.style.animation = 'rotacion 60 linear infinite';
    let startTime = Date.now() - runningTime;
    thirdSphere.style.animationPlayState = 'running';
    secondSphere.style.animationPlayState = 'running';
    stopWatchInterval = setInterval( () => {
        runningTime = Date.now() - startTime;
        stopWatch.textContent = calculateTime(runningTime)
    },1000)
}
const stop = () =>{
    thirdSphere.style.transform = `rotate(-90deg) translateX(150px)`;
    secondSphere.style.transform = `rotate(-90deg) translateX(60px)`;
    thirdSphere.style.animation = `none`;
    secondSphere.style.animation = `none`;
    playPauseButton.classList.remove('running');
    runningTime = 0; 
    clearInterval(stopWatchInterval);
    stopWatch.textContent = '00:00';
}
const calculateTime = runningTime =>{
    const total_seconds = Math.floor(runningTime / 1000);
    const total_minutes = Math.floor(total_seconds / 60);
    const display_seconds = (total_seconds % 60).toString().padStart(2, "0");//Hasta que se convierta en decena el numero de la izquierda será 0//
    const display_minutes = total_minutes.toString().padStart(2, "0");
    return `${display_minutes}:${display_seconds}`
} 