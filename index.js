// Onscroll
const header = document.querySelector(".header-section");

window.addEventListener("scroll", () => {
  scrollY > 10
    ? header.classList.add("on-scroll")
    : header.classList.remove("on-scroll");
});

// Nav
const hamburgerMenu = document.querySelector(".hamburger");
const closeNavBar = document.querySelector(".close-nav");
const navBar = document.querySelector(".nav-container");
const listItems = document.querySelectorAll(".list-item");

hamburgerMenu.addEventListener("pointerdown", () => {
  navBar.classList.remove("hide-nav");
  navBar.classList.add("show-nav");

  listItems.forEach((item) => {
    item.classList.add("list-anime");
  });
});

closeNavBar.addEventListener("pointerdown", () => {
  navBar.classList.remove("show-nav");
  navBar.classList.add("hide-nav");

  listItems.forEach((item) => {
    item.classList.remove("list-anime");
  });
});

// Background Theme
const lightTheme = document.querySelector(".light-theme");
const darkTheme = document.querySelector(".dark-theme");
const getTheme = localStorage.getItem("lightTheme");
const body = document.body;

getTheme === null
  ? localStorage.removeItem("lightTheme")
  : body.classList.add("light-theme");

lightTheme.addEventListener("pointerdown", () => {
  localStorage.setItem("lightTheme", "true");
  body.classList.add("light-theme");
});

darkTheme.addEventListener("pointerdown", () => {
  localStorage.removeItem("lightTheme");
  body.classList.remove("light-theme");
});

// About - Tab_Content
const aboutTab = document.querySelectorAll(".about-tabs > *");
const tabContent = document.querySelectorAll(".tab-content");

const skillsContent = document.querySelector("#skills");
const experienceContent = document.querySelector("#experience");
const educationContent = document.querySelector("#education");

const removeElement = (element, attr) => {
  element.forEach((tag) => {
    tag.classList.remove(attr);
  });
};

aboutTab.forEach((tab) => {
  tab.addEventListener("pointerdown", (e) => {
    removeElement(aboutTab, "active-tab");
    removeElement(tabContent, "active-content");

    if (e.target.classList.contains("about-experience")) {
      tab.classList.add("active-tab");
      experienceContent.classList.add("active-content");
    } else if (e.target.classList.contains("about-education")) {
      tab.classList.add("active-tab");
      educationContent.classList.add("active-content");
    } else if (e.target.classList.contains("about-skills")) {
      tab.classList.add("active-tab");
      skillsContent.classList.add("active-content");
    }
  });
});

// Animation with Interception Observer
const aboutContainer = document.querySelector(".about-container");
const serviceContainer = document.querySelector(".service-container");
const portfolioContainer = document.querySelector(".portfolio-container");
const contactContainer = document.querySelector(".contact-container");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.toggle("reveal-content", entry.isIntersecting);
        observer.unobserve(entry.target);
      }
    });
  },
  {
    rootMargin: "150px",
  }
);

[
  aboutContainer,
  serviceContainer,
  portfolioContainer,
  contactContainer,
].forEach((item) => {
  observer.observe(item);
});
