let modebtn = document.querySelector("#mode");
let theme = document.querySelector("#theme");
let menubtn = document.querySelector(".menu-btn");

menubtn.addEventListener("click", () => {
  let x = document.querySelector(".menu-slider");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
});

modebtn.addEventListener("click", () => {
  let dark = document.body.classList.toggle("dark-theme");
  if (dark) {
    modebtn.src = "/images/sunny.svg";
  } else {
    modebtn.src = "/images/moon.svg";
  }
});
theme.addEventListener("click", () => {
  let dark = document.body.classList.toggle("dark-theme");
  if (dark) {
    theme.src = "/images/sunny.svg";
  } else {
    theme.src = "/images/moon.svg";
  }
});
