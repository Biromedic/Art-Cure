const input = document.querySelectorAll(".contact-input")

input.forEach((ipt) => {
    ipt.addEventListener("focus", () => {
        ipt.parentNode.classList.add("focus");
        ipt.parentNode.classList.add("not-empty");
    });
    ipt.addEventListener("blur", () => {
        if (ipt.value == "") {
            ipt.parentNode.classList.remove("not-empty");
        }
        ipt.parentNode.classList.remove("focus");
    })
});

const backToTopBtn = document.querySelector("#back-to-top-btn");

window.addEventListener("scroll", function() {
  if (window.pageYOffset > 300) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

backToTopBtn.addEventListener("click", function() {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

function animateButton() {
  let button = document.querySelector('.blog-button');
  button.style.transition = "all 0.4s ease-in-out";
  button.style.transform = "scale(1.1)";
}

function resetButton() {
  let button = document.querySelector('.blog-button');
  button.style.transform = "scale(1)";
}

let button = document.querySelector('.blog-button');
button.addEventListener("mouseover", animateButton);
button.addEventListener("mouseout", resetButton);





/* for the animation */ 
lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true
});