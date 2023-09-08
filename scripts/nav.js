/*Create new veriable*/
const hamburger = document.querySelector(".hamburger");
const navmenu = document.querySelector(".nav-menu");
const navbar = document.querySelector(".navbar");
const banner = document.querySelector(".banner");
const navLinks = document.querySelectorAll(".nav-menu a");

hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle("active");
    navmenu.classList.toggle("active");
    navbar.classList.toggle("active");
    banner.style.zIndex = -1;
});

navLinks.forEach(link =>{
    link.addEventListener('click', ()=>{
        hamburger.classList.remove("active");
        navmenu.classList.remove("active");
        navbar.classList.remove("active");
        banner.style.zIndex='';
    });

});

document.addEventListener("DOMContentLoaded", function () {
    const dropbtn = document.querySelector(".dropbtn");
    const dropdownContent = document.querySelector(".dropdown-content");

    dropbtn.addEventListener("click", function () {
        dropbtn.classList.toggle("active");
        dropdownContent.classList.toggle("active");
    });

    document.addEventListener("click", function (event) {
        if (!event.target.closest(".dropdown")) {
            dropbtn.classList.remove("active");
            dropdownContent.classList.remove("active");
        }
    });
});
