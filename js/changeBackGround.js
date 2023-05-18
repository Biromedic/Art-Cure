function changeBackGround() {
    var navbar = document.getElementById("navbar");
    var scrollValue = window.scrollY;

    if (scrollValue >= 10 ) {
        navbar.classList.add("navbar-transition");
    }else if (scrollValue < 10){
        navbar.classList.remove("navbar-transition")
    }
}
window.addEventListener("scroll",changeBackGround)

/*
window.addEventListener('scroll', function() {
    const element = document.querySelector('#treatments');
    const position = element.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;
    if (position < screenHeight * 0.1) {
      element.classList.add('move-bg');
    } else {
      element.classList.remove('move-bg');
    }
  });
*/