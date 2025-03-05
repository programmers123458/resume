let header = document.querySelector("header").classList;
let logo = document.querySelector(".logo a").classList;
let a = document.querySelectorAll("header ul a");
let icon = document.querySelector(".nav-icon");
let list = document.querySelector("header ul");
let closeButton = document.querySelector("header ul .fa-x");
let sections = document.querySelectorAll("section");
let pre = document.querySelector("#pre");
let next = document.querySelector("#next");
let iPre = document.querySelector("#i-pre");
let iNext = document.querySelector("#i-next");

// Navbar style in cases

onscroll = () => {
  navStyle();
  const currentScroll = document.documentElement.scrollTop + 250;
  sections.forEach((section) => {
    let currentId = section.attributes.id.value;
    let selector = `nav a[href = "#${currentId}"]`;
    if (
      currentScroll >= section.offsetTop &&
      currentScroll < section.offsetTop + section.offsetHeight
    ) {
      removeAllActiveClasses();
      if (window.scrollY >= 1) {
        document.querySelector(selector).classList.add("active-b");
        document
          .querySelectorAll(".nav-icon span")
          .forEach((el) => el.classList.add("m-navIcon"));
      } else {
        document.querySelector(selector).classList.add("active-g");
        document
          .querySelectorAll(".nav-icon span")
          .forEach((el) => el.classList.remove("m-navIcon"));
      }
    }
  });
};

icon.addEventListener("click", (_) => {
  list.classList.add("appear");
});

closeButton.addEventListener("click", (_) => {
  list.classList.remove("appear");
});

function removeAllActiveClasses() {
  a.forEach((el) => el.classList.remove("active-g", "active-b"));
}

function navStyle() {
  if (window.scrollY >= 1) {
    header.add("w-nav");
    ulStyle();
    logoStyle();
  } else {
    header.remove("w-nav");
    defaultUl();
    defaultLogo();
  }

  if (window.scrollY >= 200) {
    header.add("short-nav");
  } else {
    header.remove("short-nav");
  }
}

function logoStyle() {
  logo.add("b-logo");
}

function defaultLogo() {
  logo.remove("b-logo");
}

function ulStyle() {
  a.forEach((el) => el.classList.add("b-links"));
}

function defaultUl() {
  a.forEach((el) => el.classList.remove("b-links"));
}

// Swiper JS

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    520: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1199: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
  navigation: {
    nextEl: ".next",
    prevEl: ".pre",
  },
});

var swiper = new Swiper(".mySecSwiper", {
  autoplay: {
    delete: 2000,
  },
  navigation: {
    nextEl: "#i-next",
    prevEl: "#i-pre",
  },
});

var swiper = new Swiper(".myThirdSwiper", {
  autoplay: {
    delay: 4000,
  },
});

pre.addEventListener("click", (el) => {
  el.preventDefault();
});

next.addEventListener("click", (el) => {
  el.preventDefault();
});

iPre.addEventListener("click", (el) => {
  el.preventDefault();
});

iNext.addEventListener("click", (el) => {
  el.preventDefault();
});
