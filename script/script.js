const header = document.querySelector("header");
const sectionOne = document.querySelector("#home-page");

const sectionOneOptions = {
  rootMargin: "-200px 0px 0px 0px",
};
const sectionOneObserver = new IntersectionObserver(function (
  entries,
  sectionOneObserver
) {
  entries.forEach((entry) => {
    // console.log(entry.target);
    if (!entry.isIntersecting) {
      header.classList.add("header-scrolled");
    } else {
      header.classList.remove("header-scrolled");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

const toggle = document.getElementById("switch-toggle");

toggle.addEventListener("change", function () {
  if (this.checked) {
    switchTheme();
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    switchTheme();
    document.documentElement.setAttribute("data-theme", "light");
  }
});

let switchTheme = () => {
  document.documentElement.classList.add("theme-transition");
  window.setTimeout(() => {
    document.documentElement.classList.remove("theme-transition");
  }, 1000);
};
