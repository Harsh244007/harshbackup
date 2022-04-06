var showcount=1;


function showpassword(){
    showcount++;
    var pass=document.getElementById("passl");

    if(showcount%2==0 && pass.type=="password"){
        pass.type="text";
    }
    else{
        pass.type="password";
    }
}
var local=JSON.parse(localStorage.getItem("signup"));
function submitl(){
var email= document.getElementById("emaill").value
var pass= document.getElementById("passl").value
var email1=local[2]
email1=email1.toString();
var pass1=local[3];


if(pass==""){
    alert("Please enter your password")
}
else if(email==""){
    alert("Please enter your Email")
}
else if(email!=email1 && pass!=pass1)
{
    alert("Invalid Email and Password")
}
else if(email==email1 && pass!=pass1)
{
    alert("Invalid Password")
}
else if(email!=email1 && pass==pass1)
{
    alert("Invalid Email")
}
else {
    location.href="http://127.0.0.1:5500/Async-Prog-Assignment-Template/index.html"
}
}
