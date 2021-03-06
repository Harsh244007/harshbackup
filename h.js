<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Harsh Patel's portfolio.</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="google" content="notranslate" />
    <link
      href="https://fonts.googleapis.com/css?family=Raleway:500|Fira+Code&display=swap"
      rel="stylesheet"
    />
  </head>
  <style>
    /* Rounded sliders */
    .slider.round {
      border-radius: 31vw;
      width: 3.5vw;
      height: 4vh;
    }

    .slider.round:before {
      border-radius: 50%;
    }
    .switch {
      position: relative;
      display: inline-block;
      width: 3.5vw;
      height: 4vh;
    }

    .switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }

    .slider:before {
      position: absolute;
      content: "";
      height: 1.5vw;
      width: 1.5vw;
      left: 0.3vw;
      bottom: 0.2vw;
      background-color: white;
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }

    input:checked + .slider {
      background-color: #1e1e1e;
    }
    input:focus + .slider {
      box-shadow: 0 0 1vw #1e1e1e;
    }

    input:checked + .slider:before {
      -webkit-transform: translateX(26px);
      -ms-transform: translateX(26px);
      transform: translateX(26px);
    }

    #h11 {
      font-size: 45px;
    }
    .main {
      display: flex;
      width: auto;
      height: auto;
      flex-wrap: wrap;
      font-family: "Courier New";
    }
    .left {
      text-align: center;
      flex: 0 0 23%;
      min-height: 0px;
      position: fixed;
      width: 20vw;
      /* position: fixed; */
    }
    .right {
      flex: 0 0 76%;
      margin-left: 20vw;
      width: 100%;
    }
    #body {
      color: white;
      background-color: #292929;
      margin: 1vw 2vw 1vw 2vw;
    }
    .header {
      height: 10vh;
      display: flex;
    }
    #switchwhitemode {
      flex: 0 0 35%;
      text-align: right;
      grid-column-start: 60;
      grid-column-end: 61;
      grid-row-start: 1;
      grid-row-end: 1;
      padding: 2vh 0vw 0vh 0vw;
      margin: 0px 2vw 0px 0px;
    }
    #errortitle {
      font-size: 1vw;
      margin: 0px 0px 0px 0px;
    }
    .intro {
      flex: 0 0 60%;
      text-align: left;
      margin: auto;
      font-size: 2vw;
      font-family: sans-serif;
    }
    #img {
      width: 12vw;
      border: 0.15vw solid red;
      border-radius: 12vw;
      box-shadow: 0 0 0.9vw 0.8vw rgba(255, 8, 8, 0.27);
    }
    #harsh {
      font-weight: 200;
      font-size: 2vw;
      margin: 1vw 0vw 0vw 0vw;
      color: white;
      font-family: "Courier New";
    }
    .p11 {
      margin: 1vw 0vw 0vw 0vw;
      padding: 0vw 0vw 0vw 0vw;
      font-size: 0.9vw;
      font-family: "Courier New";
    }
    .p11:hover {
      color: red !important;
      font-size: 1vw !important;
      font-weight: bold;
    }
    #harsh:hover {
      color: red !important;
    }
    #nameintro {
      font-size: 2vw;
      animation-name: example;
      animation-duration: 4s;
      animation-fill-mode: both;
      animation-iteration-count: infinite;
    }

    @keyframes example {
      from {
        color: red;
      }
      to {
        color: rgb(9, 187, 246);
      }
    }
    .hr {
      width: 13vw;
    }
    #hand {
      text-decoration: none !important;
    }
    #img1,
    #i17,
    #i18 {
      width: 2vw;
      height: 2vw;
      border-radius: 80px;
      display: inline-block;
    }
    #i17 {
      width: 2vw;
      height: 2vw;
      display: inline-block;
    }
    #i18 {
      display: none;
      width: 2vw;
      height: 2vw;
    }
    #home1 {
      text-align: center;
      border: 1px solid red;
      margin: 10vw 12vw 10vw 12vw;
      padding: auto;
      display: block;
    }
    #pro1 {
      display: none;
    }
    #con1 {
      display: none;
    }
    .p21 {
      margin: 1vw 0vw 0vw 0vw;
      padding: 0vw 0vw 0vw 0vw;
      font-size: 1.3vw;
      font-family: "Courier New";
      color: red !important;
    }
    .p21:hover {
      font-weight: bold;
      font-size: 1.5vw;
    }
    #i18:hover {
      width: 3vw;
      height: 3vw;
    }
    #img1:hover {
      width: 3vw;
      height: 3vw;
    }
    #i17:hover {
      width: 3vw;
      height: 3vw;
    }
  </style>
  <body id="body">
    <div class="header">
      <div class="intro">
        <strong id="nameintro"
          >Hi I am Harsh
          <a id="hand" href="https://www.linkedin.com/in/harsh-patel244/">????</a>
        </strong>
      </div>
      <div id="switchwhitemode">
        <h3 id="errortitle">White Mode</h3>
        <label class="switch">
          <input id="checked" onclick="dark()" type="checkbox" />
          <span class="slider round"></span>
        </label>
      </div>
    </div>
    <br />
    <div class="main">
      <div class="left">
        <img id="img" src="./filename.png" />

        <p id="harsh">Harsh Patel</p>
        <p class="p11">MERN Stack Devloper</p>
        <br />
        <hr class="hr" />
        <p class="p21" onclick="home()">HOME</p>
        <hr class="hr" />
        <p class="p11" onclick="pro12()">PROJECTS</p>
        <hr class="hr" />
        <p class="p11" onclick="cont1()">CONTACT</p>
        <hr class="hr" />
        <div class="links">
          <a href="https://github.com/Harsh244007/"
            ><img id="i17" src="14.png" alt="" />
            <img id="i18" src="13.png" alt=""
          /></a>
          <a href="https://www.linkedin.com/in/harsh-patel244/"
            ><img id="img1" src="./12.gif" alt=""
          /></a>
        </div>
      </div>
      <div class="right">
        <div id="home1">
          <h2>
         
            Hello, Myself Harsh. I am a Full-stack devloper for MERN stack.I
            love creating webapps with React. I posses some superpower few which
            are communication skill, collaborative skills, passionate about
            coding and learning new technologies.
          </h2>
          <h2>
            You can find
            <a id="h1y" href="./projects.html">Projects info here,</a> as well
            <a id="h1y" href="./contacts.html">connect me here.</a>
          </h2>
        </div>
      </div>
    </div>
  </body>
  <script>
    var count = 2;

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
      var img = document.getElementById("img");
      var body = document.getElementById("body");
      var i17 = document.getElementById("i17");
      var i18 = document.getElementById("i18");
      if (count % 2 == 0) {
        body.style.backgroundColor = "#1e1e1e";
        body.style.color = "white";
        document.getElementById("harsh").style.color = "white";
        img.style.border = "solid red";
        img.style.boxShadow = " 0 0 0.9vw 0.8vw rgba(255, 8, 8, 0.27)";
        i18.style.display = "none";
        i17.style.display = "inline-block";
      } else {
        body.style.color = "black";
        document.getElementById("harsh").style.color = "black";
        body.style.backgroundColor = "white";
        img.style.border = "solid #84cbdb";
        i17.style.display = "none";
        i18.style.display = "inline-block";
        img.style.boxShadow = "0 0 0.6vw 0.6vw #84cbdb";
      }
    }
    //  border: 0.15vw solid red;
    //   border-radius: 12vw;
    //   box-shadow: 0 0 0.9vw 0.8vw rgba(255, 8, 8, 0.27);
  </script>

  <script src="https://use.fontawesome.com/cdf5676fe9.js"></script>
</html>
