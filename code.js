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
  console.log(user);
}

function loginPerson(email, password) {
  let str;
  for (let x in user) {
    if (user[x].email == email) {
      if (user[x].password == password) {
        sessionStorage.setItem("userlogin", true);
        sessionStorage.setItem("username", user[x].username);
        break;
      } else {
        str = "password is wrong";
        break;
      }
    } else {
      str = "login failed";
    }
  }

  console.log(str);
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "contents") {
      content.style.display = "none";
    } else {
      content.style.display = "contents";
    }
  });
}
document.getElementById("dash-username").innerHTML =
  sessionStorage.getItem("username");
