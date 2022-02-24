const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar_menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

window.onbeforeunload = () => {
    for(const form of document.getElementsByTagName('form')) {
      form.reset();
    }
  }

  var video = document.querySelectorAll('video')

  video.forEach(play => play.addEventListener('click', () => {

    play.classList.toggle('active');

    if(play.paused){
      play.play();
    }
    else{
      play.pause();
      play.currentTime = 0;
    }

  }));