var n = localStorage.getItem("darkf");
if (n == null) count = 2;
else if (n > 2) {
  count = n;
  count--;
  dark();
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
  var body = document.getElementById("body");
  var i17 = document.getElementById("i17");
  var i18 = document.getElementById("i18");
  var i171 = document.getElementById("i171");
  var i181 = document.getElementById("i181");
  var i1712 = document.getElementById("i1712");
  var i1812 = document.getElementById("i1812");
  if (count % 2 == 0) {
    body.style.backgroundColor = "#1e1e1e";
    body.style.color = "white";
    document.getElementById("harsh").style.color = "white";
    img.style.border = "solid red";
    img.style.boxShadow = " 0 0 0.9vw 0.8vw rgba(255, 8, 8, 0.27)";
    i18.style.display = "none";
    i17.style.display = "inline-block";
    i181.style.display = "none";
    i171.style.display = "inline-block";

    i1812.style.display = "none";
    i1712.style.display = "inline-block";
  } else {
    body.style.color = "black";
    document.getElementById("harsh").style.color = "black";
    body.style.backgroundColor = "white";
    img.style.border = "none";
    i17.style.display = "none";
    i18.style.display = "inline-block";
    i171.style.display = "none";
    i181.style.display = "inline-block";

    i1712.style.display = "none";
    i1812.style.display = "inline-block";
    img.style.boxShadow = "0 0 0.6vw 0.6vw #84cbdb";
  }
}
//  border: 0.15vw solid red;
//   border-radius: 12vw;
//   box-shadow: 0 0 0.9vw 0.8vw rgba(255, 8, 8, 0.27);
