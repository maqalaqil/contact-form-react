/* eslint-disable no-loop-func */
import React from "react";
import ReactDOM from "react-dom";
import "./styles/App.css";
import "./styles/MediaQueries.css";
import App from "./App.jsx";
import $ from "jquery";

ReactDOM.render(<App />, document.getElementById("root"));

let home = document.querySelectorAll(".homeLink");
let about = document.querySelectorAll(".aboutLink");
let services = document.querySelectorAll(".servicesLink");
let projects = document.querySelectorAll(".projectsLink");
let contact = document.querySelectorAll(".contactLink");

let navMenuIcon = document.getElementById("navMenuIcon");

let isClose = true;
navMenuIcon.addEventListener("click", () => {
  if (isClose === false) {
    closeMenu();
    isClose = true;
  } else {
    openMenu();
    isClose = false;
  }
});

//when scroll down(using mouse wheel only) hide the drop down menu
window.addEventListener("wheel", () => {
  closeMenu();
  isClose = true;
});
//when scroll down using finger (touch screen)
window.addEventListener("touchmove", () => {
  closeMenu();
  isClose = true;
});

//when click on body hide navBar
document.querySelector(".bodyClick").addEventListener("click", () => {
  closeMenu();
  isClose = true;
});

function closeMenu() {
  document.getElementById("navDropMenu1").style.display = "none";
  document.getElementById("space").style.display = "none";

  //show middle line
  document.getElementById("lineMiddle").style.transition =
    "background .4s ease-out";
  document.getElementById("lineMiddle").style.background = "#605d50";

  document.getElementById("navMenuIcon").style.flexDirection = "column";

  //bring top line to default position
  document.getElementById("lineTop").style.transform = "rotate(0)";
  //bring bottom line to default
  document.getElementById("lineBottom").style.transform = "rotate(0)";
}

function openMenu() {
  // checked
  document.getElementById("navDropMenu1").style.display = "block";
  document.getElementById("space").style.display = "block";

  // make middle transparent
  document.getElementById("lineMiddle").style.transition =
    "background .2s ease-out";
  document.getElementById("lineMiddle").style.background = "transparent";

  document.getElementById("navMenuIcon").style.flexDirection = "row";

  //make x sign side1
  document.getElementById("lineTop").style.transform = "rotate(-45deg)";
  //make x sign side2
  document.getElementById("lineBottom").style.transform = "rotate(45deg)";
}

/*Scroll to top when click on link - BEGIN*/

for (let i = 0; i < home.length; i++) {
  home[i].addEventListener("click", () => {
    scrollToTop();
    // drawLine("home");
    closeMenu();
    isClose = true;
  });
}

for (let i = 0; i < about.length; i++) {
  about[i].addEventListener("click", () => {
    // drawLine("about");
    closeMenu();
    isClose = true;
  });
}

for (let i = 0; i < services.length; i++) {
  services[i].addEventListener("click", () => {
    // drawLine("services");
    closeMenu();
    isClose = true;
  });
}

for (let i = 0; i < projects.length; i++) {
  projects[i].addEventListener("click", () => {
    // drawLine("projects");
    closeMenu();
    isClose = true;
  });
}

for (let i = 0; i < contact.length; i++) {
  contact[i].addEventListener("click", () => {
    // drawLine("contact");
    closeMenu();
    isClose = true;
  });
}

function scrollToTop() {
  window.scrollTo(0, 0);
}

function drawLine(thislink) {
  document.querySelector(".Linehome").style.borderBottom = "none";
  document.querySelector(".Lineabout").style.borderBottom = "none";
  document.querySelector(".Lineservices").style.borderBottom = "none";
  document.querySelector(".Lineprojects").style.borderBottom = "none";
  document.querySelector(".Linecontact").style.borderBottom = "none";

  // over write only one
  if (thislink) {
    document.querySelector(".Line" + thislink).style.borderBottom =
      "1px solid #848484";
  }
}

/*Scroll to top when click on link - END*/

//start click on any link and close dropdown menu

let links = document.querySelectorAll("a");
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", () => {
    closeMenu();
    isClose = true;
  });
}

// LATER ON
// let aboutHeading = document.querySelector(".l");

// if (window.innerWidth < 769) {
//   aboutHeading.className = "heading";
// } else {
//   aboutHeading.className = "headingLeft";
// }

// $(window).scroll(function() {
//   if ($(".serviceText p").offset().top > $(window).scrollTop()) {
//     $(".Lineservices").css("color", "#00ad9f");
//     $(".Linehome").css("color", "#4d4d4d");
//   } else {
//     $(".Lineservices").css("color", "#4d4d4d");
//   }
// });

// $(window).scroll(function() {
//   if ($(".thisTitle").offset().top > $(window).scrollTop()) {
//     $(".Linehome").css("color", "#00ad9f");
//     $(".Lineservices").css("color", "#4d4d4d");
//   } else {
//     $(".Linehome").css("color", "#4d4d4d");
//   }
// });
