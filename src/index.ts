import "./static/css/main.css";
import "@fortawesome/fontawesome-free/css/solid.css";
import "@fortawesome/fontawesome-free/css/fontawesome.css";
import "@fortawesome/fontawesome-free/css/brands.css";

const darkModeSwitch = document.querySelector("#darkModeSwitch");
darkModeSwitch.addEventListener("change", (e) => {
  const target = e.target as HTMLInputElement;
  if (target.checked) {
    document.getElementsByTagName("html")[0].classList.add("dark");
  } else {
    document.getElementsByTagName("html")[0].classList.remove("dark");
  }
});