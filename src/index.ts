import "./css/main.css";
import "@fortawesome/fontawesome-free/css/solid.css";
import "@fortawesome/fontawesome-free/css/fontawesome.css";
import "@fortawesome/fontawesome-free/css/brands.css";

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.getElementsByTagName("html")[0].classList.add("dark");
}

const darkModeSwitch = document.querySelector("#darkModeSwitch");
darkModeSwitch.addEventListener("change", (e) => {
  const target = e.target as HTMLInputElement;
  if (target.checked) {
    document.getElementsByTagName("html")[0].classList.add("dark");
  } else {
    document.getElementsByTagName("html")[0].classList.remove("dark");
  }
});

let passengerCount = 1;
const passengerCountInput = document.getElementById("passengerCount");
passengerCountInput.setAttribute("value", "1");

const addPassengerButton = document.getElementById("addPassenger");

addPassengerButton.onclick = () => {
  passengerCount++;
  passengerCountInput.setAttribute("value", String(passengerCount));
}

const removePassengerButton = document.getElementById("removePassenger");

removePassengerButton.onclick = () => {
  if (passengerCount > 1) {
    passengerCount--;
  }
  passengerCountInput.setAttribute("value", String(passengerCount));
}

type FlightData = {
  from: string;
  to: string;
  date: string;
  passengerCount: number;
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
    passengerCount: Number((document.getElementById("passengerCount") as HTMLInputElement).value),
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
    await fetch("/js/flights.json")
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
var className = "my-inverted";
var scrollTrigger = 60;

window.onscroll = function() {
  // We add pageYOffset for compatibility with IE.
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.getElementsByClassName("fixed")[0].classList.add(className);
  } else {
    document.getElementsByClassName("fixed")[0].classList.remove(className);
  }
};
