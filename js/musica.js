var myAudio = document.querySelector('#musica-fundo');
var btnMusic = document.querySelector('.pause-audio');
var isPlaying = false;


btnMusic.addEventListener('click', function() {
   togglePlay();
})


function togglePlay() {
    isPlaying ? myAudio.pause() : myAudio.play();
    btnMusic.classList.toggle('play');
};
  
myAudio.onplaying = function() {
    isPlaying = true;
    myAudio.volume = 0.08;
    myAudio.loop = true;
};
myAudio.onpause = function() {
    isPlaying = false;
};
