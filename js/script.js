/* NAVBAR */
const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
 
/* Toggle mobile menu */
function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
         
        // adds the menu (hamburger) icon
        toggle.querySelector("a").innerHTML = "<i class=\"fas fa-bars\"></i>";
    } else {
        menu.classList.add("active");
         
        // adds the close (x) icon
        toggle.querySelector("a").innerHTML = "<i class=\"fas fa-times\"></i>";
    }
}
 
/* Event Listener */
toggle.addEventListener("click", toggleMenu, false);


/* PROJECTS READ MORE */
const descriptions = document.querySelectorAll(".project__desc")

function readMore(button) {
    const desc = button.previousSibling.previousSibling;
    if (desc.classList.contains('minimized')) {
        desc.classList.remove('minimized');
        desc.classList.add('maximized');
        button.innerHTML = "Read less";
    } else {
        desc.classList.add('minimized');
        desc.classList.remove('maximized');
        button.innerHTML = "Read more";
    }
}