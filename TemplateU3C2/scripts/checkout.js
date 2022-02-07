function success(){
    var name=0,num="t",email=0,add=0,add2=0;
    name=document.getElementById("name").value
     num=document.getElementById("number").value
     email=document.getElementById("email").value
     add=document.getElementById("address").value
     add2=document.getElementById("city").value
    console.log(name)
if(name==0){
    alert("Invalid Name")
}
else if(num=="t"){
    alert("Invalid Number")
}
else if(email==0){
    alert("Invalid Email")
}
else if(add==0){
    alert("Invalid Adrres1 field")
}
else if(add2==0){
    alert("Invalid Address2 field")
}
else{
   
    settime(name)
}

}
function settime(name){
    alert(name+" Your Order is Accepted")
setTimeout(function(accept){
    alert(name+" Your Order is being cooked")

},3000)

setTimeout(function(accept){
    alert(name+" Your Order is Ready")
},8000)

setTimeout(function(accept){
    alert(name+" Your Order is Order out for delivery ")
},10000)

setTimeout(function(accept){
    alert(name+" Order delivered")
},12000)



}