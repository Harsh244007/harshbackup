var ha=localStorage.getItem("count")
console.log(ha)
var har=Math.floor(Math.random()*(500-200)+200)
var sunny=JSON.parse(localStorage.getItem("dish"))
var user,hattotal=har*ha;
var container=document.getElementById("cart")
container.innerHTML=null;
if(ha>=1)
{
    document.getElementById("total").innerHTML=hattotal+" Rs"
for(i=1;i<=ha;i++)
{
  user=sunny[i]
showit()
}
   }   function showit(){
    var div=document.createElement("div")
    div.setAttribute("class","div")


var img=document.createElement("img")
img.setAttribute("class","img")
img.src=user.strMealThumb

var name=document.createElement("p")
name.setAttribute("class","name")
name.innerHTML=user.strMeal

var price=document.createElement("p")
price.setAttribute("class","price")
var p1=Math.floor(Math.random()*(500-100)+100)
price.innerHTML=p1

var button=document.createElement("button")
button.innerHTML="Remove"
button.setAttribute("class","button")



div.append(img,name,price,button)
container.append(div)


}

function  checkout(){

    localStorage.setItem("final",hattotal)
    console.log(hattotal)
location.href="/TemplateU3C2/checkout.html"
}


