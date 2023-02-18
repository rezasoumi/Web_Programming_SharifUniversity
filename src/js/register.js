function Person(name, email, passport, pass) {
  this.username = name;
  this.email = email;
  this.passport = passport;
  this.password = pass;
}

// let user = [];
// const user1 = new Person("ali", "ali@gmail.com", "123", "123");
// user.push(user1);
// const user2 = new Person("reza", "reza@gmail.com", "123", "123");
// user.push(user2);
// const user3 = new Person("mohammad", "mohammad@gmail.com", "123", "123");
// user.push(user3);
// const user4 = new Person("sara", "sara@gmail.com", "123", "123");
// user.push(user4);

function registerAccount(name, passport, email, pass) {
  const data = {
    Name: name,
    Email: email,
    PassportNumber: passport,
    Password: pass,
  };
  fetch("http://localhost:3001/signup", {
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

