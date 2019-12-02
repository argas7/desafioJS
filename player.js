const playerElement = document.querySelector('#player');
const controls = playerElement.querySelector('#controls');
const audioElement = playerElement.querySelector('#audio');
const progressBar = playerElement.querySelector("#progressBar");
const progress = playerElement.querySelector('#progress');

const playBtn = controls.querySelector('.play');
const pauseBtn = controls.querySelector('.pause');
const backwardBtn = controls.querySelector('.prev');
const forwardBtn = controls.querySelector('.next');

const progressVolume = playerElement.querySelector('.valVolume');
const volume = playerElement.querySelector('.volume');

playBtn.addEventListener('click', () => {
    audioElement.play();
    playBtn.style.visibility = `hidden`;
    pauseBtn.style.visibility = `visible`;
});

pauseBtn.addEventListener('click', () => {
    audioElement.pause();
    playBtn.style.visibility = `visible`;
    pauseBtn.style.visibility = `hidden`;
});

backwardBtn.addEventListener('click', () => {
    audioElement.currentTime -= 10;
});

forwardBtn.addEventListener('click', () => {
    audioElement.currentTime += 10;
});

audioElement.addEventListener('timeupdate', () => {
    const progressNow = audioElement.currentTime / audioElement.duration;
    progress.style.width = `${progressNow * 100}%`;
});

progressBar.addEventListener('click', (e) => {
    const offsetLeft = progressBar.offsetLeft;
    const xClickPosition = e.pageX - offsetLeft;
    audioElement.currentTime = audioElement.duration * (xClickPosition / progressBar.clientWidth);
});

progressVolume.addEventListener('click', (e) => {
    const offsetLeft = progressVolume.offsetLeft;
    const xClickPosition = e.pageX - offsetLeft;
    audioElement.volume = (xClickPosition / progressVolume.clientWidth);
    volume.style.width = `${100* (xClickPosition / progressVolume.clientWidth)}%`
});