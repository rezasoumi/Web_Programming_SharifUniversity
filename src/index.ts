import "../static/css/main.css";
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

type FlightData = {
  from: string;
  to: string;
  date: string;
};

// const typeInput = document.getElementById("type") as HTMLInputElement;
// typeInput.value = "return";
// typeInput.onchange = () => {
//   document.getElementById("date-end").hidden = typeInput.value !== "return";
// };
document.getElementById("login").onclick = () => {
  window.location.href = "/login.html";
};
document.getElementById("show-flights").onclick = () => {
  const data: FlightData = {
    from: (document.getElementById("from") as HTMLInputElement).value,
    to: (document.getElementById("to") as HTMLInputElement).value,
    date: (document.getElementById("date") as HTMLInputElement).value,
  };
  sessionStorage.setItem("search-query", JSON.stringify(data));
  window.location.href = "/flights.html";
};
// document.getElementById("my-trips").onclick = () => {
//   if (sessionStorage.getItem("username")) {
//     window.location.href = "/dashboard.html";
//   } else {
//     window.location.href = "/login.html";
//   }
// };
const addToList = async () => {
  const existingFlights: FlightData[] = await (
    await fetch("/flights.json")
  ).json();
  existingFlights.forEach((x) => {
    const add = (lid: string, txt: string) => {
      const c = document.createElement("option");
      c.value = txt;
      document.getElementById(lid).appendChild(c);
    };
    add("from-list", x.from);
    add("to-list", x.to);
  });
};
addToList();
