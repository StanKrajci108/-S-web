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
