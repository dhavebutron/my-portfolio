function toggleSidebar(){

const sidebar = document.getElementById("sidebar");

const header = document.querySelector("header");

const mainContent = document.querySelector(".main-content");

const nav = document.querySelector("nav");

const footer = document.querySelector("footer");

/* OPEN / CLOSE SIDEBAR */

sidebar.classList.toggle("active");

/* MOVE CONTENT */

header.classList.toggle("shift");

mainContent.classList.toggle("shift");

nav.classList.toggle("shift");

footer.classList.toggle("shift");

}

/* CONTACT FORM */

document.getElementById("contactForm").addEventListener("submit", function(event){

event.preventDefault();

document.getElementById("message").textContent = "Your message has been sent successfully!";

this.reset();

});