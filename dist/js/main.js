const functionCalledOnScroll = function(event) {
    console.log(window.scrollY);

    let scrollY = window.scrollY;
    let nav = document.getElementById("main-nav");
    if (scrollY > 100) {
        nav.classList.add("fixed-header");
    }
    else {
        nav.classList.remove("fixed-header");
    }

}

window.addEventListener('scroll', functionCalledOnScroll);

if(document.addEventListener) {
    document.getElementById("modal_feedback").addEventListener("submit", checkForm, false);
    document.addEventListener("DOMContentLoaded", modal_init, false);
  } else {
    document.getElementById("modal_feedback").attachEvent("onsubmit", checkForm);
    window.attachEvent("onload", modal_init);
  }