function Person(name, email, passport, pass) {
  this.username = name;
  this.email = email;
  this.passport = passport;
  this.password = pass;
}

function registerAccount(name, passport, email, pass) {
  const data = {
    Name: name,
    Email: email,
    PassportNumber: passport,
    Password: pass,
  };
  // http://localhost:3001/signup
  fetch("api/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      location.replace("./login.html");
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

