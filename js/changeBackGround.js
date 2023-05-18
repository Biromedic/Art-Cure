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
