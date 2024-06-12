// Menu icon function
// const menuIcon = document.querySelector(".menu-icon");
// const menuList = document.querySelector("nav");
// const hamburgerIcon = document.querySelector(".fa-solid");

// menuIcon.addEventListener("click", () => {
//   if (hamburgerIcon.classList[1] === "fa-bars") {
//     hamburgerIcon.classList.add("fa-xmark");
//     hamburgerIcon.classList.remove("fa-bars");
//     menuList.style.display = "block";
//   } else {
//     hamburgerIcon.classList.add("fa-bars");
//     hamburgerIcon.classList.remove("fa-xmark");
//     menuList.style.display = "none";
//   }
// });

// Menu icon function end

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
