function Person(name, email, passport, pass) {
  this.username = name;
  this.email = email;
  this.passport = passport;
  this.password = pass;
}

let user = [];
const user1 = new Person("ali", "ali@gmail.com", "123", "123");
user.push(user1);
const user2 = new Person("reza", "reza@gmail.com", "123", "123");
user.push(user2);
const user3 = new Person("mohammad", "mohammad@gmail.com", "123", "123");
user.push(user3);
const user4 = new Person("sara", "sara@gmail.com", "123", "123");
user.push(user4);

function newPerson(name, passport, email, pass) {
  const userInput = new Person(name, passport, email, pass);
  user.push(userInput);
  location.replace("./login.html");
}

function getUser() {
  return user;
}
