// JS by Mr Ben Howdle
var interval = 5000;

var slides = document.querySelectorAll('.Slider-slide');

var total = slides.length;

var curr = 0;

function clear(klass){
  var len = slides.length;
  while(len--){
    slides[len].classList.remove(klass);
  }
}

setInterval(function(){
  if((curr - 1) >= 0){
    slides[curr - 1].classList.remove('is-previous');
  }
  if((curr + 1) < total){
    clear('is-previous');
    slides[curr].classList.remove('is-active');
    slides[curr].classList.add('is-previous');
    slides[curr + 1].classList.add('is-active');
    curr++;
  } else {
    curr = 0;
    clear('is-active');
    slides[total - 1].classList.add('is-previous');
    slides[curr].classList.add('is-active');
  }
}, interval);