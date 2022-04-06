function h(){
var name=document.getElementById("names").value
var contact=document.getElementById("contact").value
var email=document.getElementById("emails").value
var pass=document.getElementById("passs").value

if(name!="" && contact!="" && email!="" && pass!="")
{ 
    var x=[name,contact,email,pass]
    localStorage.setItem("signup",JSON.stringify(x));
}
else if(name==""){
    alert("Name is not defined")
}
else if(contact==""){
    alert("Contact number is not defined")
}
else if(email==""){
    alert("Email is not defined")
}
else if(pass==""){
    alert("Password is not defined")
}

}