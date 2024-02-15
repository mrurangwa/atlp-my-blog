// smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Adjust padding top for the home section to avoid navbar overlap
window.addEventListener("scroll", function () {
  var navbarHeight = document.querySelector("nav").offsetHeight;
  var homeSection = document.getElementById("home");
  var rect = homeSection.getBoundingClientRect();

  if (rect.top < navbarHeight) {
    homeSection.style.paddingTop = navbarHeight + "px";
  } else {
    homeSection.style.paddingTop = "0";
  }
});
// making the sidebar and sidebar container visible
const sidebar = document.querySelector(".bar");
const toggleButton = document.querySelector(".menubar");
const closeButton = document.querySelectorAll(".close");

function toggleSidebar() {
  if (sidebar.classList.contains("active")) {
    sidebar.classList.remove("active");
  } else {
    sidebar.classList.add("active");
  }
}

function closeSidebar() {
  sidebar.classList.remove("active");
}

toggleButton.addEventListener("click", toggleSidebar);

closeButton.forEach((button) => button.addEventListener("click", closeSidebar));
