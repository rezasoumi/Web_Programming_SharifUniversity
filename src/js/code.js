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
}

<<<<<<< HEAD
function getUser() {
  return user;
}
=======
let loginPerson = async(email, password) => {
  let str;
  for (let x in user) {
    if (user[x].email == email) {
      if (user[x].password == password) {
        localStorage.setItem("userlogin", true);
        localStorage.setItem("username", user[x].username);
        alert("login successfully");
        window.location.href = '/dashboard.html';
        return;
      } else {
        str = "password is wrong";
        alert("password is wrong");
        break;
      }
    } else {
      str = "login failed";
      alert("login failed");
    }
  }

  console.log(str);
}




//var e = document.getElementById("number-type");
//var e_val = e.value;
//if (e === "1") {
//  e.innerHTML="aa"
//}
>>>>>>> 4025c4cff5be34f3a8e75d57eb00519771e4b114
