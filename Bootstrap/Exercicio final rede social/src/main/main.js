import "../scss/styles.scss";

import * as bootstrap from "bootstrap";

// Post Modal

const postModal = document.getElementById("postModal");
const postContent = document.getElementById("postContent");

postModal.addEventListener("shown.bs.modal", () => {
  postContent.focus();
});

// Theme Switch

const themeSwitch = document.getElementById("theme-switch");

themeSwitch.addEventListener("click", () => {
  if (document.documentElement.getAttribute("data-bs-theme") === "dark") {
    document.documentElement.setAttribute("data-bs-theme", "light");
    document.body.classList.add("bg-body-secondary");
    document.getElementById("main-content").classList.add("bg-body-secondary");
    document.getElementById("newPostBtn").classList.add("bg-body-secondary");
    document.getElementById("newPostBtn").classList.remove("btn-dark");
  } else {
    document.documentElement.setAttribute("data-bs-theme", "dark");
    document.body.classList.remove("bg-body-secondary");
    document
      .getElementById("main-content")
      .classList.remove("bg-body-secondary");
    document.getElementById("newPostBtn").classList.remove("bg-body-secondary");
    document.getElementById("newPostBtn").classList.add("btn-dark");
  }
});
