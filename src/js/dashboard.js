let login = localStorage.getItem("userlogin");
console.log(typeof login);
if (login === "false") {
  location.replace("./login.html");
}
function exitPerson() {
  localStorage.setItem("userlogin", false);
  location.replace("./index.html");
}
