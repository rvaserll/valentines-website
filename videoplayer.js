const X = document.getElementById('main-video');
const Y = document.getElementById('playBtn');
const Z = document.getElementById('rangeArea');
const A = document.getElementById('muteBtn');
const B = document.getElementById('volumeArea');
const controls = document.querySelector('.controls');


Y.addEventListener('click', function(){

    if(X.paused){
        X.play();
        Y.innerHTML = '&#10074;&#10074;';
    } else {
        X.pause();
        Y.innerHTML = '&#9658;';
    }

});

X.addEventListener('timeupdate', function() {

    const progress = (X.currentTime / X.duration) * 100;
    Z.value = progress;
    if(X.currentTime == X.duration) {
        X.pause();
        Y.innerHTML = '&#9658;';
        controls.style.opacity = 1;
    }

});

Z.addEventListener('input', function(){

    const time = (Z.value / 100) * X.duration;
    X.currentTime = time;

});

  controls.addEventListener('mouseover', () => {
      controls.style.opacity = 1;
  });
  
  controls.addEventListener('mouseout', () => {
    setTimeout(() => {
      controls.style.opacity = 0;
    }, 1800); 
  });

  document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
      event.preventDefault();
      if (X.paused) {
        X.play();
        Y.innerHTML = '&#10074;&#10074;';
        setTimeout(() => {
            controls.style.opacity = 0;
          }, 1800); 
      } else {
        X.pause();
        Y.innerHTML = '&#9658;';
        controls.style.opacity = 1;
      }
    }
  });