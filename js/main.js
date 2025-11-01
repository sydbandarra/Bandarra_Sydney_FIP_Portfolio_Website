//video player

const playerCon = document.querySelector("#player-container");
const player = document.querySelector("video");
const videoControls = document.querySelector("video-controls");
const playButton = document.querySelector("#play-button");
const pauseButton = document.querySelector("#pause-button");
const stopButton = document.querySelector("#stop-button");
const volumeSlider = document.querySelector("#change-vol");
const fullScreen = document.querySelector("#full-screen");

console.log(playerCon);

player.controls = false;
videoControls.classList.remove('hidden')

function playVideo() {
    console.log("Play Video Called") 
    player.play();
}

function pauseVideo() {
    player.pause();
}

function stopVideo() {
    player.pause();
    player.currentTime = 1; 
}

function changeVolume() {
    console.log(volumeSlider.value); 
    player.Volume = volumeSlider.value
}

function toggleFullScreen() {
     if (document.fullscreenElement) { 
        document.exitFullscreen();    
    } else if (document.webkitFullscreenElement) { 
        document.webkitExitFullscreen();
    } else if (playerCon.webkitRequestfullscreen) { 
        playerCon.webkitRequestFullscreen();
    } else { 
        playerCon.requestFullscreen();
    }
}

function hideControls() {
}

function showControls() {
    videoControls.classList.remove('hide');
}


playButton.addEventListener("click", playVideo);
pauseButton.addEventListener("click", pauseVideo);
stopButton.addEventListener("click", stopVideo);
volumeSlider.addEventListener("change", changeVolume);
fullScreen/addEventListener("click", toggleFullScreen);
videoControls.addEventListener("mouseenter", showControls);
videoControls.addEventListener("mouseleave", hideControls);
player.addEventListener("mouseenter", showControls);
player.addEventListener("mouseleave", hideControls);