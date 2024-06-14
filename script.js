// Menu icon function

document.addEventListener("DOMContentLoaded", function () {
  const menuIconOpen = document.querySelector(".menu-icon-open");
  const menuIconClose = document.querySelector(".menu-icon-close");
  const navigation = document.querySelector(".navigation");

  function toggleMenu() {
    if (navigation.style.display === "flex") {
      navigation.style.display = "none";
      menuIconOpen.style.display = "block";
      menuIconClose.style.display = "none";
    } else {
      navigation.style.display = "flex";
      menuIconOpen.style.display = "none";
      menuIconClose.style.display = "block";
    }
  }

  menuIconOpen.addEventListener("click", toggleMenu);
  menuIconClose.addEventListener("click", toggleMenu);
});

// navigation bar color change on scroll
window.addEventListener("scroll", () => {
  const navBox = document.querySelector(".navBox");
  const logoName = document.querySelector(".logoName");
  const logo = document.querySelector(".logoImage");

  if (window.scrollY > 200) {
    logo.classList.add("scrolled");
    navBox.classList.add("scrolled");
    if (window.innerWidth >= 768) {
      logoName.classList.add("scrolled");
    }
  } else {
    logo.classList.remove("scrolled");
    navBox.classList.remove("scrolled");
    logoName.classList.remove("scrolled");
  }
});

// Ensure logoName doesn't get the scrolled class on load for small screens
window.addEventListener("resize", () => {
  const logoName = document.querySelector(".logoName");
  if (window.innerWidth < 768) {
    logoName.classList.remove("scrolled");
  }
});

window.addEventListener("resize", () => {
  const mobileLocation = document.querySelector(".mobileLocation");
  const location = document.querySelector(".location");
  if (window.innerWidth < 768) {
    mobileLocation.style.display = "block";
    location.style.display = "none";
  } else {
    mobileLocation.style.display = "none";
    location.style.display = "block";
  }
});
