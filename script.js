const video = document.querySelector('video');
video.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);


