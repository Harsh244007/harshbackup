function vaccine(){
    console.log("harsj")
}

var images= document.getElementById("image")


var img=["https://images.pexels.com/photos/6347/coffee-cup-working-happy.jpg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60","https://media.istockphoto.com/photos/cheeseburger-with-tomato-and-lettuce-on-wooden-board-picture-id1309352410?b=1&k=20&m=1309352410&s=170667a&w=0&h=YduYl7Us5MSrw1EFSCxR9zDRLnEFa_O608NdqhHlSyM=","https://image.shutterstock.com/image-photo/vadapav-green-chilly-red-sauce-600w-1973435375.jpg","https://media.istockphoto.com/photos/indian-spicy-food-paav-bhaji-or-pav-bhaji-picture-id1155185428?k=20&m=1155185428&s=612x612&w=0&h=OhaOVUKroRKJbMbx4wPH2ysTb8vHx5p3plQOWnyagI0=","https://image.shutterstock.com/image-photo/indian-food-tawa-pulao-rice-600w-1261881601.jpg","https://media.istockphoto.com/photos/futuristic-glowing-blue-wifi-symbol-on-black-dark-background-with-picture-id1297855259?b=1&k=20&m=1297855259&s=170667a&w=0&h=VPCwHBRy2-9NJX6kqNcJ19yQ_6aYJ9EnnCCBR9f2HOM="];
var s1=""
function showimage(){
var h=JSON.parse(localStorage.getItem("har"))
s1="Your "

if(h[0]==true)
{ s1=s1+"Coffee "
    document.getElementById("image").src=img[0]
   
}
if(h[1]==true)
{s1=s1+"Tea "
    document.getElementById("image").src=img[1]
}
if(h[2]==true)
{ s1=s1+"Burger "
    document.getElementById("image").src=img[2]
}
if(h[3]==true)
{s1=s1+"Vadapau "
    document.getElementById("image").src=img[3]
}
if(h[4]==true)
{s1=s1+"Bhajipau "
    document.getElementById("image").src=img[4]
}
if(h[5]==true)
{s1=s1+"Pulao "
    document.getElementById("image").src=img[5]
}
if(h[6]==true)
{
    document.getElementById("image").src=img[6]
}

s1=s1+"is ready."

document.getElementById("texti").innerHTML=s1;

}


var norders=[],har;
function submito(){
    document.getElementById("texti").innerHTML="";
document.getElementById("image").src="https://image.shutterstock.com/image-illustration/handwriting-text-your-order-coming-600w-1263933046.jpg";
var a1=document.querySelector("#c1")
norders.push(a1.checked)
var a2=document.querySelector("#t1")
norders.push(a2.checked)
var a3=document.querySelector("#b1")
norders.push(a3.checked)
var a4=document.querySelector("#v1")
norders.push(a4.checked)
var a5=document.querySelector("#b1")
norders.push(a5.checked)
var a6=document.querySelector("#p1")
norders.push(a6.checked)
var a7=document.querySelector("#w1")
norders.push(a7.checked)
 har=Math.floor(Math.random()*1000)
norders.push(Number(har))
localStorage.setItem("har",JSON.stringify(norders))
norders=[];
random()
}
var orders
function random(){
   
    document.getElementById("orderi").innerHTML="Your order Number is "+har+" in progress5";

    let promis_f= new Promise(function(resolve,reject){
resolve("In process")
reject("nahi he")

    },5000);
    promis_f.then(function(res){
setTimeout(function(){
        document.getElementById("orderi").innerHTML="Your order Number: "+har+" is ready.";
        showimage();
    },5000);
    });
    promis_f.catch(function(err){
        document.getElementById("orderi").innerHTML="Your order Number is "+har+" rejected.";
        
    })
}

