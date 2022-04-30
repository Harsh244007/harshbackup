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