// Navbar Menu buttons JS
const menu = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

// Open / Close Menu
menu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// When click on link Menu will close

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// When click on outside area menu will close
document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove("active");
    }
});


// Hero-text JS 
new Typed("#hero-text", {
    strings: [
        "Frontend Developer",
        "Aspiring Backend Developer",
        "Aspiring Full Stack Developer",
        "Problem Solver",
        "Tech Enthusiast",
        "Aspiring Software Engineer"
    ],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 1000,
    loop: true
});
 
new Typed("#about-text", {
    strings: [
        "Frontend Developer",
        "Aspiring Backend Developer",
        "Aspiring Full Stack Developer",
        "Problem Solver",
        "Tech Enthusiast",
        "Aspiring Software Engineer"
    ],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 1000,
    loop: true
});