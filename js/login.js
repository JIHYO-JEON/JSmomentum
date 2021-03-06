// // Option 1 to find elements
// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

// // Option 2 to find elements
// // const loginInput = document.querySelector("#login-form input");
// // const loginButton = document.querySelector("#login-form button");

// function onLoginBtnClick(){
//     const username = loginInput.value;
//     if (username === ""){
//         alert("Please write your name.");
//     } else if (username.length > 15){
//         alert("Your name is too long.")
//     } else {
//         console.log('Hello', username);
//     }
//     console.log('Hello', username);
// }

// loginButton.addEventListener("click",onLoginBtnClick);

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const todo = document.querySelector("#todo-form input")

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault(); // Prevent refreshing
    loginForm.classList.add(HIDDEN_CLASSNAME); // hide login form
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username); //Memorizing
    paintGreetings(username); // call another function
}

function paintGreetings(username) {
    const hours = String(new Date().getHours());
    let hello = '';
    if (hours < 12){
      hello = 'Good morning';
    } else if (hours>=12 && hours<18){
      hello = 'Good afternoon';
    } else {
      hello = 'Good evening'
    }
    greeting.innerText = `${hello}, ${username}.`;
    greeting.classList.remove(HIDDEN_CLASSNAME); // show greeting
    todo.classList.remove(HIDDEN_CLASSNAME);
  }
  
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME); // show login form
    todo.classList.add(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
  } else {
    paintGreetings(savedUsername);
  }
