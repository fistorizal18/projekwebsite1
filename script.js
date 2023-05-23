const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#zieda-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// KLIK DI LUAR MENU

const zm = document.querySelector("#zieda-menu");

document.addEventListener("click", function (e) {
  if (!zm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
