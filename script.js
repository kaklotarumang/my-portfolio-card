// 1. Navbar on scroll
var navbar = document.getElementById("navbar");
window.addEventListener("scroll", function () {
  if (window.scrollY > 40) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// 2. Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    var target = document.querySelector(link.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// 3. Scroll reveal
var reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", function () {
  reveals.forEach(function (el) {
    var top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 60) {
      el.classList.add("show");
    }
  });
});

// 4. Mobile Hamburger Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger) {
  hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });
}

// Close the mobile menu when a link is clicked
document.querySelectorAll(".nav-links a").forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("active");
  });
});

window.dispatchEvent(new Event("scroll"));
