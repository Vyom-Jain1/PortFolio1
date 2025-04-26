// Element Selectors
const navLinks = document.querySelectorAll("header nav a");
const logoLink = document.querySelector(".logo");
const sections = document.querySelectorAll("section");
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector("header nav");
const resumeBtns = document.querySelectorAll(".resume-btn");
const resumeDetails = document.querySelectorAll(".resume-detail");
const arrowRight = document.querySelector(
  ".portfolio-box .navigation .arrow-right"
);
const arrowLeft = document.querySelector(
  ".portfolio-box .navigation .arrow-left"
);
const imgSlide = document.querySelector(".portfolio-carousel .img-slide");
const portfolioDetails = document.querySelectorAll(".portfolio-detail");
const barsBox = document.querySelector(".bars-box");
const header = document.querySelector("header");

// Responsive Menu Toggle
menuIcon?.addEventListener("click", () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
});

// Active Page Reset
function resetActivePage() {
  header?.classList.remove("active");
  barsBox?.classList.remove("active");

  setTimeout(() => {
    header?.classList.add("active");
    barsBox?.classList.add("active");
  }, 1100);

  navLinks.forEach((link) => link.classList.remove("active"));
  sections.forEach((section) => section.classList.remove("active"));

  menuIcon?.classList.remove("bx-x");
  navbar?.classList.remove("active");
}

// Navigation Link Click Handling
navLinks.forEach((link, idx) => {
  link.addEventListener("click", () => {
    if (!link.classList.contains("active")) {
      resetActivePage();
      link.classList.add("active");
      setTimeout(() => sections[idx]?.classList.add("active"), 1100);
    }
  });
});

// Logo Click Behavior
logoLink?.addEventListener("click", () => {
  if (!navLinks[0].classList.contains("active")) {
    resetActivePage();
    navLinks[0].classList.add("active");
    setTimeout(() => sections[0]?.classList.add("active"), 1100);
  }
});

// Resume Tab Toggle
resumeBtns.forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    resumeBtns.forEach((b) => b.classList.remove("active"));
    resumeDetails.forEach((detail) => detail.classList.remove("active"));

    btn.classList.add("active");
    resumeDetails[idx]?.classList.add("active");
  });
});

// Portfolio Carousel
let currentIndex = 0;

function updatePortfolioCarousel() {
  const total = portfolioDetails.length - 1;

  if (imgSlide) {
    imgSlide.style.transform = `translateX(calc(${currentIndex * -100}% - ${
      currentIndex * 2
    }rem))`;
  }

  portfolioDetails.forEach((detail) => detail.classList.remove("active"));
  portfolioDetails[currentIndex]?.classList.add("active");

  // Toggle disabled states
  arrowLeft?.classList.toggle("disabled", currentIndex === 0);
  arrowRight?.classList.toggle("disabled", currentIndex === total);
}

// Portfolio Navigation Buttons
arrowRight?.addEventListener("click", () => {
  if (currentIndex < portfolioDetails.length - 1) {
    currentIndex++;
    updatePortfolioCarousel();
  }
});

arrowLeft?.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updatePortfolioCarousel();
  }
});

// Initialize carousel on load
updatePortfolioCarousel();
