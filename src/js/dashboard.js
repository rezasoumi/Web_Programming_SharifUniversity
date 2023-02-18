let login = localStorage.getItem("userlogin");
console.log(typeof login);
if (login === "false") {
  location.replace("./login.html");
}
function exitPerson() {
  localStorage.setItem("userlogin", false);
  localStorage.removeItem("username");

  const token = localStorage.getItem("JWTtoken");
  localStorage.removeItem("JWTtoken");

  // http://127.0.0.1:3001/logout
  fetch("api/auth/logout", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => location.replace("./index.html"))
    .catch((error) => {
      console.error("Error:", error);
    });
}
