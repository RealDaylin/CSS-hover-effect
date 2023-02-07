// home
var home_img = document.getElementById("home-img");
var home_div = document.getElementById("home-div");

// credit card
var cc_img = document.getElementById("cc-img");
var cc_div = document.getElementById("cc-div");

// user
var user_img = document.getElementById("user-img");
var user_div = document.getElementById("user-div");

// statics
var statics_img = document.getElementById("statics-img");
var statics_div = document.getElementById("statics-div");

// users
var users_img = document.getElementById("users-img");
var users_div = document.getElementById("users-div");

// addEventListeners
home_div.addEventListener("mouseenter", mouseenter);
home_div.addEventListener("mouseleave", mouseleave);
cc_div.addEventListener("mouseenter", mouseenter2);
cc_div.addEventListener("mouseleave", mouseleave2);
user_div.addEventListener("mouseenter", mouseenter3);
user_div.addEventListener("mouseleave", mouseleave3);
statics_div.addEventListener("mouseenter", mouseenter4);
statics_div.addEventListener("mouseleave", mouseleave4);
users_div.addEventListener("mouseenter", mouseenter5);
users_div.addEventListener("mouseleave", mouseleave5);

// functions


// mouseenter
function mouseenter() {
  home_img.src = "images/dashboard/home-light.svg";
}
function mouseenter2() {
  cc_img.src = "images/dashboard/credit-card-light.svg";
}
function mouseenter3() {
  user_img.src = "images/dashboard/user-light.svg";
}
function mouseenter4() {
  statics_img.src = "images/dashboard/statics-light.svg";
}
function mouseenter5() {
  users_img.src = "images/dashboard/users-light.svg";
}

// mouseleave
function mouseleave() {
  home_img.src = "images/dashboard/home-dark.svg";
}
function mouseleave2() {
  cc_img.src = "images/dashboard/credit-card-dark.svg";
}
function mouseleave3() {
  user_img.src = "images/dashboard/user-dark.svg";
}
function mouseleave4() {
  statics_img.src = "images/dashboard/statics-dark.svg";
}
function mouseleave5() {
  users_img.src = "images/dashboard/users-dark.svg";
}
