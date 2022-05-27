var n = localStorage.getItem("darkf");
if (n == null) count = 2;
else if (n > 2) {
  count = n;
  count--;
  dark();
}
var count1 = 1;

function hme1() {
  //   count1++;
  //   if (count % 2 == 0) {
  document.getElementById("home1").style.display = "block";
  document.getElementById("home2").style.display = "none";
  document.getElementById("home3").style.display = "none";
  document.getElementById("home4").style.display = "none";
  document.getElementById("p11").style.color = "red";
  // document.getElementById("p12").style.color = "white";
  // document.getElementById("p13").style.color = "white";
  // document.getElementById("p14").style.color = "white";
}
function hme2() {
  document.getElementById("home2").style.display = "block";
  document.getElementById("home1").style.display = "none";
  document.getElementById("home3").style.display = "none";
  document.getElementById("home4").style.display = "none";
  document.getElementById("p12").style.color = "red";
  // document.getElementById("p11").style.color = "white";
  // document.getElementById("p13").style.color = "white";
  // document.getElementById("p14").style.color = "white";
}

function hme3() {
  //   count1++;
  //   if (count % 2 == 0) {
  document.getElementById("p13").style.color = "red";
  // document.getElementById("p12").style.color = "white";
  // document.getElementById("p11").style.color = "white";
  // document.getElementById("p14").style.color = "white";
  document.getElementById("home3").style.display = "block";
  document.getElementById("home2").style.display = "none";
  document.getElementById("home1").style.display = "none";
  document.getElementById("home4").style.display = "none";
}
function hme4() {
  document.getElementById("p14").style.color = "red";
  // document.getElementById("p12").style.color = "white";
  // document.getElementById("p13").style.color = "white";
  // document.getElementById("p11").style.color = "white";
  document.getElementById("home4").style.display = "block";
  document.getElementById("home1").style.display = "none";
  document.getElementById("home3").style.display = "none";
  document.getElementById("home2").style.display = "none";
}

function skill() {
  window.location.href = "skills.html";
}
function cont1() {
  window.location.href = "contacts.html";
}
function home() {
  window.location.href = "index.html";
}
function pro12() {
  window.location.href = "projects.html";
}
function dark() {
  count++;
  localStorage.setItem("darkf", count);
  var img = document.getElementById("img");
  var p211 = document.getElementById("p211");
  var body = document.getElementById("body");
  var ex1 = document.getElementById("ex1");
  var ex0 = document.getElementById("ex0");
  var i17 = document.getElementById("i17");
  var i18 = document.getElementById("i18");
  var i1711 = document.getElementById("i1711");
  var i1811 = document.getElementById("i1811");
  var i171 = document.getElementById("i171");
  var i181 = document.getElementById("i181");
  var i1712 = document.getElementById("i1712");
  var i1812 = document.getElementById("i1812");
  var i1714 = document.getElementById("i1714");
  var i1814 = document.getElementById("i1814");
  if (count % 2 == 0) {
    body.style.backgroundColor = "#1e1e1e";
    body.style.color = "white";
    p211.style.color = "#ccc";
    ex0.style.filter = "invert(100%)";
    ex1.style.filter = "invert(100%)";
    document.getElementById("harsh").style.color = "white";
    img.style.border = "solid red";
    img.style.boxShadow = " 0 0 0.9vw 0.8vw rgba(255, 8, 8, 0.27)";
    i18.style.display = "none";
    i17.style.display = "inline-block";
    i181.style.display = "none";
    i171.style.display = "inline-block";
    // ex0.style.display = "none";
    // ex1.style.display = "block";
    i1811.style.display = "none";
    i1711.style.display = "inline-block";
    i1812.style.display = "none";

    i1714.style.display = "inline-block";
    i1814.style.display = "none";
    i1712.style.display = "inline-block";
  } else {
    // ex0.style.display = "none";
    // ex1.style.display = "block";
    p211.style.color = "black";
    body.style.color = "black";
    ex0.style.filter = "invert(0)";
    ex1.style.filter = "invert(0)";
    document.getElementById("harsh").style.color = "black";
    body.style.backgroundColor = "white";
    img.style.border = "none";
    i17.style.display = "none";
    i18.style.display = "inline-block";
    i171.style.display = "none";
    i181.style.display = "inline-block";
    i1711.style.display = "none";
    i1811.style.display = "inline-block";
    i1712.style.display = "none";
    i1812.style.display = "inline-block";
    i1714.style.display = "none";
    i1814.style.display = "inline-block";
    img.style.boxShadow = "0 0 0.6vw 0.6vw #84cbdb";
  }
}
//  border: 0.15vw solid red;
//   border-radius: 12vw;
//   box-shadow: 0 0 0.9vw 0.8vw rgba(255, 8, 8, 0.27);
